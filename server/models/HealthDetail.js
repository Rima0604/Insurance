import mongoose, { Schema } from "mongoose";

const HealthSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Gender:{
            type: String,
            require: true
        },
        Age:{
            type:String,
            require:true
        },
        MobileNumber: {
            type: String,
            required: true,
            unique: true
          },
         BirthDate:{
            type:String,
            require:true
         }, 
        createdAt: {
            type: Date,
            default: Date.now
    }
}
);

const Health = mongoose.model("Health", HealthSchema)

export default Health