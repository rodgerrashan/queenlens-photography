import dbConnect from "../lib/dbConnect";
import bcrypt from "bcrypt";
import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Use mongoose.models to check if the model already exists
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;

export async function createUser(email, password, role = "user") {
    try {
        const { db } = await dbConnect();

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.collection("users").insertOne({
            email,
            password: hashedPassword,
            role,
            createdAt: new Date(),
        });

        console.log("✅ User created:", result.insertedId);
        return result;
    } catch (error) {
        console.error("❌ Error creating user:", error.message);
        throw new Error("Error creating user.");
    }
}


export async function findAllUsers() {
    try {
        // Connect to the database
        const { db } = await dbConnect();

        // Find all users
        const users = await db.collection("users").find({}).toArray();

        if (users.length === 0) {
            console.warn("⚠️ No users found.");
        } else {
            console.log("✅ Users found:", users.length);
        }

        return users;
    } catch (error) {
        console.error("❌ Error finding users:", error);
        throw new Error("Error finding users.");
    }
}

export async function findUser(email) {
    try {
        // Connect to the database
        const { db } = await dbConnect();

        // Find the user by email
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            console.warn("⚠️ User not found:", email);
        } else {
            console.log("✅ User found:", user._id);
        }

        return user;
    } catch (error) {
        console.error("❌ Error finding user:", error);
        throw new Error("Error finding user.");
    }
}


export async function findUserById(userId) {
    try {
        // Connect to the database
        const { db } = await dbConnect();

        // Find the user by ID
        const user = await db.collection("users").findOne({ _id: new mongoose.Types.ObjectId(userId) });

        if (!user) {
            console.warn("⚠️ User not found with ID:", userId);
        } else {
            console.log("✅ User found:", user._id);
        }

        return user;
    } catch (error) {
        console.error("❌ Error finding user by ID:", error);
        throw new Error("Error finding user by ID.");
    }
}

export async function verifyPassword(inputPassword, hashedPassword) {
    try {
        // Compare the input password with the hashed password
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

        if (isMatch) {
            console.log("✅ Password verified.");
        } else {
            console.warn("⚠️ Password mismatch.");
        }

        return isMatch;
    } catch (error) {
        console.error("❌ Error verifying password:", error);
        throw new Error("Error verifying password.");
    }
}
