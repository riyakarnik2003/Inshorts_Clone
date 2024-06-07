import mongoose from "mongoose"


const Connection=async()=>{
    const URL='mongodb://localhost:27017/InShorts'
   try {
    await mongoose.connect(URL)
    console.log('db connected successfully!')
   } catch (error) {
        console.log('error while connecting db',error)
   }
}

export default Connection;