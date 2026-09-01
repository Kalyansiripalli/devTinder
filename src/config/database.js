const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://svk7063_db_user:q_C5WUQH_58Q6_b@personalprojects.cyribyv.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
  
