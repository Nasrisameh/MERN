const express = require("express");
const cors =  require("cors");
const app = express();


//---MIDDLEWARE ---
app.use(express.json( )); //parse the incoming requests with json
app.use(express.json(), express.urlencoded({ extended: true }))

app.use(cors({ //cors is going to allow different ports to send requests to our API
    origin:"http://localhost:3000" 
}));

require("./config/mongoose.config")

//we require our mongoose config file so that it is available to our express method
require("./config/mongoose.config"); 

//See the routes file to better understand how these work together.
require("./routes/product.routes")(app);

//We set our node server to listen on port 8000
app.listen(8000, () => console.log("Listening on Port 8000"))