//@ts-nocheck
import mongoose, {type Document } from "mongoose";
import { type visitObject } from "../config/utility";

const patientSchema = new mongoose.Schema({
    firstName:{ type: String, required:true},
    lastName:{ type: String, required:true},
    middleName:{ type: String},
    NIN:{ type: Number, required:true, unique:true},
    DOB:{ type: String},
    phoneNumber:{ type: Number},
    LGA:{ type: String, required:true},
    facility:{ type: String, required:true},
    visits:{ type: [{time: String, day: Number, month: Number, year: Number}], required:true},
}, {timestamps: true});

// {time: String, day: Number, month: Number, year: Number}
export type patientType={
    firstName:string,
    lastName:string,
    middleName:string,
    NIN:number,
    DOB:string,
    phoneNumber: number,
    LGA:string,
    facility:string,
    visits: visitObject[]
}
const Patients = mongoose.models?.Patients || mongoose.model<patientType>('Patients', patientSchema);
export default Patients;