const bcrypt = require("bcrypt");
const { createUser } = require("../models/Users.js");
require("dotenv").config();



async function seedAdmin() {
    try {
        
        let email = "admin@ql.com";
        let password = "admin123";
        const hashedPassword = await bcrypt.hash("admin123", 10);

        const newUser = await createUser(email,hashedPassword,"admin");

        console.log("✅ Admin created:", newUser.insertedId);
    } catch (error) {
        console.error("❌ Error creating admin:", error);
    }
}

seedAdmin();
