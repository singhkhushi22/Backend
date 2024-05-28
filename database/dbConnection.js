// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://khushi22:khushi22@cluster0.kwxky9j.mongodb.net/Event_Planner?retryWrites=true&w=majority&appName=Cluster0'; 

// const connectToDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log('Connected to MongoDB');
        
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// };

// module.exports = connectToDB;

// mongodb+srv://khushi22:khushi22@cluster0.kwxky9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "EVENT_PLANNER_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};