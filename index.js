const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products", productRoutes)



app.get('/' ,(req,res) => {
    res.send("Hello from node API");
});




mongoose.connect("mongodb+srv://purkarbhushanbabulal02:wcAimyWRKHsBB2rw@bacenddb.35wzl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BacendDB")
.then(()=>{
    console.log("Connect to database!");
    app.listen(3000, ()=>{
        console.log('server is running on port 3000');
        
    });
    
})
.catch(()=>{
    console.log("Connection failed!");
    
})