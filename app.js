const express = require('express');
const morgan = require('morgan');
const connectionRoutes = require('./routes/connectionRoutes');
const mainRoutes = require('./routes/mainRoutes');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const { exec} = require('child_process');

// create app
const app = express();

// configure app
let port = 3000;
let host = "localhost"; 
app.set('view engine', 'ejs');


// connect to database
mongoose.connect('mongodb://localhost:27017/demos', 
    {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
        //start the server
        const child = exec('mongo < ./initialize.js');
        if(child.error){
            console.log("Error while initializing documents in mongodb\n"+child.error);
        }
        app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
    });
})
.catch(err=> console.log(err.message));



// mount middleware functions
app.use(express.static('public')); // static files can be defined.
app.use(express.urlencoded({extended: true})); // allpw to parse request data into request body
app.use(morgan('tiny')); // help logging all the requests and responses in the terminal.
app.use(methodOverride('_method'));

// setup routes
app.use('/', mainRoutes);
app.use('/connections', connectionRoutes);

// another middleware to handle 404
app.use((req, res, next)=>{
    error = new Error('The server cannot locate: ' + req.url);
    error.status = 404;
    next(error);
});


// below all of the functions as should be called last.
app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message = ('Internal Server error');
    }
    res.status(err.status);
    res.render('error', {error:err});
});

// start server
// app.listen(port, host, (req, res)=>{
//     console.log("server is running on port", port)
// });