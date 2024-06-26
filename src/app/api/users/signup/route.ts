import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect() // Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) { // Defines an asynchronous POST request handler.
    try {
        // Parses the request body to extract email and password
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email }); // Checks if a user with the provided email already exists.

        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
            // If a user with the provided email already exists, returns a JSON response with a message.
        }

        // hash password using bcryptjs
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });

        // Saves the new user to the database.
        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}