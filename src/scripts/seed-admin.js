import bcrypt from "bcrypt";
import { createUser } from "../models/Users.js";
import dotenv from "dotenv";
dotenv.config();



async function seedAdmin() {
    try {
        
        let email = "admin@ql.com";
        const hashedPassword = await bcrypt.hash("admin123", 10);

        const newUser = await createUser(email,hashedPassword,"admin");

        // console.log("✅ Admin created:", newUser.insertedId);
    } catch (error) {
        // console.error("❌ Error creating admin:", error);
    }
}

seedAdmin();
