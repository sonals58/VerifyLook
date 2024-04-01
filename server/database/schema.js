const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
    if (!MONGO_URI) {
        console.error("MONGO_URI environment variable is not set.");
        process.exit(1);
    }

    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("Database connection failed. Exiting now...");
            console.error(error);
            process.exit(1);
        });
};
