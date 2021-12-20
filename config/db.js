const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log('MongoDb Connected...');
  } catch (error) {
    console.error(error.message);
    //EXIT process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
