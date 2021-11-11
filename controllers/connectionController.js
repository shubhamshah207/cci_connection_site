const model = require('../models/connection');

// get request /connections: send all connections to the user
exports.index = (req, res, next)=>{
    groupByTopic = groupBy("connectionTopic");
    
    model.find()
    .then(connections=>{
        console.log(groupByTopic(connections));
        res.render('./connection/index', {connections: groupByTopic(connections)});
        
    })
    .catch(err=>next(err));
};

exports.new = (req, res)=>{
    res.render('./connection/newConnection');
};

exports.create = (req, res, next)=>{

    let connection = new model(req.body); // create a new connection document
    connection.save() // Insert a document to the database.
    .then((connection)=>res.redirect('/connections'))
    .catch(err=>{
        if(err.name==='ValidationError'){
            err.status = 400;
        }
        next(err);
    });
    
};

// Get /connections/:id send details of connection identified by id
exports.show = (req, res, next)=>{


    let id = req.params.id;
    // an ObjectId is 24 bits hex decimal string
    if (!id.match(/^[0-9A-Fa-f]{24}$/)){
        let err = new Error('Invalid connection Id');
        err.status = 400;
        return next(err);
    }
    model.findById(id)
    .then(connection=>{
        if(connection) {
            res.render('./connection/connection', {connection});
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));

};

//Get /connections/:id/edit send the html form for editing an existing connection.
exports.edit = (req, res, next)=>{

    let id = req.params.id;
    // an ObjectId is 24 bits hex decimal string
    if (!id.match(/^[0-9A-Fa-f]{24}$/)){
        let err = new Error('Invalid connection Id');
        err.status = 400;
        return next(err);
    }
    model.findById(id)
    .then(connection=>{
        if(connection) {
            res.render('./connection/edit', {connection});
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err)); 

};

//Put /connections/:id update the connections identified by id
exports.update = (req, res, next)=>{

    let connection = req.body;
    let id = req.params.id;
    // an ObjectId is 24 bits hex decimal string
    if (!id.match(/^[0-9A-Fa-f]{24}$/)){
        let err = new Error('Invalid connection Id');
        err.status = 400;
        return next(err);
    }
    model.findByIdAndUpdate(id, connection, {useFindAndModify: false, runValidators:true})
    .then(connection=>{
        if (connection) {
            res.redirect('/connections/'+id);
        } 
        else {
            let err = new Error('Cannot find a connection with id ' + id);
             err.status = 404;
             next(err);
        }
    })
    .catch(err=>{
        if(err.name==='ValidationError'){
            err.status = 400;
        }
        next(err)
        
    });




};

//delete /connections/:id, delete the connection identified by id
exports.delete = (req, res, next)=>{

    let id = req.params.id;
    // an ObjectId is 24 bits hex decimal string
    if (!id.match(/^[0-9A-Fa-f]{24}$/)){
        let err = new Error('Invalid connection Id');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(connection=>{
        if(connection)
            res.redirect('/connections');
        else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};


// extra helper method
const groupBy = function groupBy(key) {
    return function group(connections) {
      return connections.reduce((dict, obj) => {
        const property = obj[key];
        dict[property] = dict[property] || [];
        dict[property].push(obj);
        return dict;
      }, {});
    };
  };

