//import mongoose from our Node Modules folder since we installed the package
const mongoose = require("mongoose");

const dbName = "products";
//connect to your database - we are putting in a variable that we define in server.js so we can change to different DBs
mongoose.connect(`mongodb://localhost/${dbName}`,)
    .then(() => console.log(`📡📡📡 Established a connection to the ${dbName} database`))
    .catch(err => console.log("❌❌❌❌ Something went wrong when connecting to the database", err));
