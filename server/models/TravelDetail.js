import mongoose, { Schema } from "mongoose";

const TravelSchema = new Schema(
    {
        countryName: {
            type: String,
            required: true
        },
        startDate:{
            type: String,
            require:true
        },
        endDate:{
            type: String,
            require:true
        },
        createdAt: {
            type: Date,
            default: Date.now
       }
    }
   
);

const Travel = mongoose.model("Travel", TravelSchema)

export default Travel