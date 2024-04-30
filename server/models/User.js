import mongoose, {Schema} from "mongoose";

const UserSchema =new Schema(
    {
        firstName:{
            type:String,
            required: true
          },
          lastName: {
            type: String,
            required: true
          },
          userName: {
            type: String,
            required: true,
            unique: true
          },
          password: {
            type: String,
            required: true
          },

          email:{
            type: String,
            required:true,
            unique:true
          },
          profileImage: {
            type: String,
            required: false,
            default:" "
          },
          isAdmin: {
            type: Boolean,
            default:false
          },
          roles:{
            type: Schema.Types.ObjectId,
            required:true,
            ref:"Role"
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", UserSchema)

export default User ;