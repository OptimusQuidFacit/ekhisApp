"use client"
import { diagnosisType, type formattedPatients } from '@/lib/data/patients';
import { adminContextType } from '@/ContextProvider';
import { useAdminContext } from '@/customHooks';
import React from 'react';
import * as XLSX from 'xlsx';

type props={
  patients:formattedPatients[],
}
const ExportToExcel = ({patients}:props) => {
  const {adminYear} = useAdminContext() as adminContextType
  const exportExcel = () => {
    //Convert each patient object to an array
    let patientAsArray = patients.map((patient, index)=> {
       let {name, NIN, phoneNumber, LGA, facility, january ,
        febuary, march, april, may, june, july, august, september, october,
        november, december, diagnosis
       } = patient
      //  if(diagnosis)
       let patientDiagnosis = diagnosis?.map(item=>`${item.name?item.name:"null"} on ${item.date}`)
       let diagnosisData = "";
       if(patientDiagnosis){
          for (let value of patientDiagnosis){
              let index = patientDiagnosis.indexOf(value)
              if(index>0){
                diagnosisData= diagnosisData + ", " + value
              }
              else{
                diagnosisData = diagnosisData + value
              }
          }
       }
       let result = Object.values({index:index+1, name, NIN, phoneNumber, LGA, facility, diagnosis: diagnosisData as string, january ,
            febuary, march, april, may, june, july, august, september, october,
            november, december
           });
        return result;
    });

    // Step 1: Create a new workbook and add a sheet
    const wb = XLSX.utils.book_new();
    const ws_data = [
      [`Patient Data for ${adminYear}`],
      ["S/N", "Name", "NIN", "Phone Number", "LGA", "Facility", "Diagnosis",
        "Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", 
        "Sep", "Oct", "Nov", "Dec"], // headers
     ...patientAsArray          // other rows
    ];

    // Step 2: Convert data to a worksheet
    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    // Step 3: Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Step 4: Generate the Excel file as a binary string
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Step 5: Convert binary string to an ArrayBuffer
    const s2ab = (s: string) => {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
      }
      return buf;
    };

    // Step 6: Create a Blob and prepare for download
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    
    // Step 7: Create a download link and trigger download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "patientData.xlsx"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link element
  };

  return (
    <div>
      <button className='text-white text-sm py-2 px-3 bg-[#FFB232] rounded-lg' onClick={exportExcel}>Download Excel</button>
    </div>
  );
};

export default ExportToExcel;
