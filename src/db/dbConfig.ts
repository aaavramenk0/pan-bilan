import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Database connected');
        })

        connection.on('error', () => {
            console.log('Database connection error');
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }
}