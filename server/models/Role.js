import mongoose, { Schema } from "mongoose";

const RoleSchema = new Schema(
    {
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Role = mongoose.model("Role", RoleSchema)

export default Role