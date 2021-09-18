import mongoose from "mongoose";

 const connectDB = async () => {
     try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
         
            useNewUrlParser: true,
        
        })
        console.log(`MongoDB connected now: `.white.bold +`${conn.connection.host}`.cyan.underline)
     }catch(error){
        console.log(`Error: `.yellow.bold+`${error.message}`.red.bold)
        process.exit(1)
     }
 }

 export default connectDB