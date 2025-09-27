import mongoose, {Schema} from "mongoose";

const bookAppointmentSchema = new Schema({
    petName:{
        type:String,
        required:true
    },
    petType:{
        type:String,
        enum:['Dog','Cat','Bird','Rabbit','Other'],
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    service:{
        type:String,
        enum:['Regular Checkup','Vaccination','Grooming Services','Dental Care','Emergency Care','Other'],
        required:true
    },
    message:{
        type:String
    },
    status:{
        type:String,
        enum:['Pending','Confirmed','Completed','Cancelled'],
        default:'Pending'
    }
    

},{timestamps:true});

export const BookAppointment = mongoose.model("BookAppointment",bookAppointmentSchema);