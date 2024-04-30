import mongoose, {Schema} from "mongoose";

const CustomerDetailsSchema =new Schema(
    {
        Name:{
            type:String,
            required: true
          },
          MobileNumber: {
            type: String,
            required: true,
            unique: true
          },
          Email: {
            type: String,
            required: true,
            unique: true
          },
          ZipCode: {
            type: String,
            require: true,
            unique:true
          },
          Address: {
            type: String,
            require: true 
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
    }
);

const Customer = mongoose.model("Customer", CustomerDetailsSchema)

export default Customer