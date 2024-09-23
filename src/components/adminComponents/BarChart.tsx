"use client"
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
// import {  places } from "@/lib/data";
import { LGAs } from "@/app/lib/data/lga";

const randomColor=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}
type props= {
    lgaCount:number[]
}
Chart.register(CategoryScale);
const BarChart = ({lgaCount}:props) => {
    // const {orders, paidOrders} = props;
    const dataPaid={
        labels: LGAs,
        datasets: [{
           label: "No of Patients attended to",
           data: lgaCount,
           backgroundColor: lgaCount?.map((i)=> randomColor()),
           barThickness: 20,
        }]
    }
    // const paidOptions= {
    //     plugins:{
    //         title:{
    //             display: true,
    //             text: "Most Popular accomodations",
    //             font: {
    //                 size: "20px",
    //             }
    //         }
    //     }
    // }
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Bar data={dataPaid}/>   
        </div>
    );
}

export default BarChart;