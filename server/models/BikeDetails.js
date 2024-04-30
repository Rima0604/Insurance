import mongoose, {Schema} from "mongoose";

const BikeDetailsSchema =new Schema(
    {
        BikeNumber:{
            type:String,
            required: true,
            unique: true
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
          PinCode: {
            type: String,
            require: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
    }
);

const Bike = mongoose.model("Bike", BikeDetailsSchema)

export default Bike