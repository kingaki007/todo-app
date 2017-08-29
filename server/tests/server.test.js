const expect = require('expect');
const request = require('supertest');

const {app} = require('./../index');
const {Tasks} = require('./../models/todo');
const {Users} = require('./../models/user');

beforeEach((done)=>{
    Tasks.remove({}).then(()=>done())
})

describe('POST /tasks',()=>{
    it('should create a new todo',(done)=>{
        var text = 'Test task text';

        request(app)
        .post('/tasks')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }

            Tasks.find().then((tasks)=>{
                expect(tasks.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        })
    })

    it('should not create a new todo with iinvalid body',(done)=>{
        
        request(app)
        .post('/tasks')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){
                return done(err);
            }

            Tasks.find().then((tasks)=>{
                expect(tasks.length).toBe(0);
                done();
            }).catch((e)=>done(e));
        })
    })
})