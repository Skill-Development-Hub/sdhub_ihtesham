const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/SDHub`, {});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

// connectDB();
module.exports = connectDB;