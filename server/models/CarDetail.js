import mongoose, {Schema} from "mongoose";

const carSchema = new mongoose.Schema({
  carNumber: {
    type: String,
    required: true,
    unique:true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  pinCode: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Car = mongoose.model('Car', carSchema);

export default Car;
