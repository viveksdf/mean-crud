const express = require('express');
const router = express.Router();

var { Employee } = require('../models/employee');
var ObjectID = require('mongoose').Types.ObjectId;

// To get all the employee records

router.get('/',(req,res) => {
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else
        {
            console.log("Failed to connect :"+ JSON.stringify(err));
        }
    });
});

// To create employee record

router.post('/',(req,res) => {

    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        organization : req.body.organization,
        salary : req.body.salary
    });

    emp.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else
        {
            console.log("Failed to connect :"+ JSON.stringify(err));
        }
    });
});

// To find employee by ID

router.get('/:id',(req,res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        console.log("Error finding record with an id : "+id);
        res.sendStatus(400);
    }

    else{
    Employee.findById(id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else
        {
            console.log("Failed to connect :"+ JSON.stringify(err));
        }
    });
}
});

// To update employee record

router.put('/:id',(req,res) => {

    var id = req.params.id;

    var emp = {
        name : req.body.name,
        position : req.body.position,
        organization : req.body.organization,
        salary : req.body.salary
    };


    if(!ObjectID.isValid(id)){
        console.log("Error finding record with an id : "+id);
        res.sendStatus(400);
    }

    else{
    Employee.findByIdAndUpdate(id,{$set : emp },{new : true},(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else
        {
            console.log("Failed to connect :"+ JSON.stringify(err));
        }
    });
}
});

// To delete employee record

router.delete('/:id',(req,res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        console.log("Error finding record with an id : "+id);
        res.sendStatus(400);
    }

    else{
    Employee.findByIdAndRemove(id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else
        {
            console.log("Failed to connect :"+ JSON.stringify(err));
        }
    });
}
});

module.exports = router;