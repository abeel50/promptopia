import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDb is already Connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbNAme: 'sharePrompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("Mongodb Connected....");
    } catch (error) {
        console.error(error);
    }
}
