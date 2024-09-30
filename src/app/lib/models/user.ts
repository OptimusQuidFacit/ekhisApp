import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{ type: String, required:true},
    password:{ type: String},
    isAdmin:{ type: Boolean, default:false},
}, {timestamps: true});


export type userType= {
    name: string,
    password:string,
    isAdmin:boolean,
}

const User = mongoose.models?.User || mongoose.model<userType>('User', userSchema);
export default User;