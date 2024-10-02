
"use server"

// import { error } from "console";
import { connectToDb } from "../config/dbconnection";
import Patients from "../models/patients";

export const submitForm = async (prevState: any, formData:any)=>{
    const {firstName, lastName, middleName, NIN, phoneNumber, DOB, facility, 
            LGA, day, month, year, time
     }= Object.fromEntries(formData)
     let visit= {
        time, day, month, year
     }
     let initialPatient={
        firstName, lastName, middleName, NIN, phoneNumber, DOB, facility, 
        LGA, visits:[visit]
     }
    // let firstName= formData.get("firstName");
    if(!day || !month || !year){
        return {
            error: "Date of Visit is required"
        }
    }
    try{
        connectToDb();
        const newPatient= new Patients(initialPatient);
        let findPatient= await Patients.findOne({NIN, facility, LGA});
        if(findPatient){
            await Patients.updateOne(findPatient, {$push: {visits: visit}});
            // console.log('Patient data updated successfully');
        }
        else {
            await newPatient.save();
        }      
        return {
            msg: "Patient data successfully submitted"
        }
    }
    catch(err: any){
    console.log(err.message);
    if(err.message.includes("ETIMEOUT")|| err.message.includes("ENOTFOUND")){
        return {
            error: "Please check your internet connection"
            }
    }
    if(err.message.includes("NIN_1 dup key")){
        return {
            error: "This NIN is already associated with another patient from past entries, please review"
            }
    }
    if(err.message.includes("firstName")){
        return {
            error: "Patient's First Name is required"
            }
    }
    if(err.message.includes("LGA")){
        return {
            error: "LGA field is required"
            }
    }
    if(err.message.includes("facility")){
        return {
            error: "Facility field is required"
            }
    }
    if(err.message.includes("NIN")){
        return {
            error: "Patrient's NIN is required"
            }
    }
    if(err.message.includes("lastName")){
        return {
            error: "Patient's Last Name is required"
            }
    }
    if(err.message.includes("phoneNumber")){
        return {
            error: "Phone Number field is required"
            }
    }
    
    return {
            error: "Something went wrong while trying to add patient data. Please check your internet connection"
        }
    }
    // return {msg: "Success"};
}