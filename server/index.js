import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import serviceRoute from './routes/service.js';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import Role from "./models/Role.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use("/server/role", roleRoute);
app.use("/server/auth", authRoute);
app.use("/server/user", userRoute);
app.use('/server', serviceRoute);

//Error Handler Middleware

export async function createDefultRole() {
    const defaultRoles = ["user", "admin"];
    const existingRoles = await Role.find({});

    for (const role of defaultRoles) {
        if (!existingRoles.find((r) => r.role === role)) {
            const newDefaultRole = new Role({ role });
            await newDefaultRole.save();
            console.log(`Default Role "${role}" created!`);
        }
    }
}

async function createAdmin() {

    const existUser = await User.findOne({ email: "dipti@yopmail.com" });
    if (!existUser) {

        let adminRole = await Role.findOne({ role: 'admin' });
        if (adminRole) {

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash('7306', salt);
            const admin = new User({
                firstName: "Dipti",
                lastName: "Patel",
                userName: "dipti",
                email: "dipti@yopmail.com",
                password: hashPassword,
                isAdmin: true,
                roles: adminRole?._id
            })
            admin.save()
        }

    }
}

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const errorMessage = err.message || "Someting went worng !";
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: errorMessage
    });
});

//Response Handler Middleware

app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went worng !";
    return res.status(statusCode).json({
        success: [200, 201, 204].some(a => a === obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    });
});


//Database Connection

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await createDefultRole()
        await createAdmin()
        console.log("connected to Database")
    } catch (error) {
        throw error;
    }
}

app.listen(8800, () => {
    connectMongoDB();
    console.log("connected to Server");
})
