import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
        .then(() => console.log(' MongoDB connected successfully'))
        
       } catch (error) {
        console.error('Error: ',error.message);
    }
}


export default connectDB;