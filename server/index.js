const express = require('express');
const app = express();
const PORT = process.argv[2] || 3000;
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {mongoose} = require('./connection');
const {Tasks} = require('./models/todo');
const {Users} = require('./models/user');
const {ObjectID} = require('mongodb');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/', function(req,res){
    res.send('hi');
});

app.post('/tasks',(req,res)=>{
    var task = new Tasks(req.body);
    task.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
})

app.get('/tasks', (req,res)=>{
    Tasks.find().then((tasks)=>{
        res.send({tasks : tasks , status:'success' });
    },(err)=>{
        res.status(400).send(e);
    })
})

app.post('/tasks/delete/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Tasks.findByIdAndRemove(id).then((task)=>{
        if(!task){
            return res.status(404).send();
        }
        res.send({task});
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.post('/tasks/update/:id', (req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    Tasks.findByIdAndUpdate(id, req.body,{upsert:true},function(err,task){
        if(err) return res.status(400).send(err);
        res.send({task});
    });
})

app.listen(PORT,function(){
    console.log(`Server up on port : ${PORT}`);
});

module.exports = {app};