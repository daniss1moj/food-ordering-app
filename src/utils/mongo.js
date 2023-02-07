import mongoose from 'mongoose';

const MONGO_URL = process.env.NEXT_PUBLIC_MONGO_URL;

if (!MONGO_URL) {
	throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

async function dbConnect() {
	await mongoose.connect(MONGO_URL);
}

export default dbConnect;
