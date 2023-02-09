const http = require('http');
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs");
const ejs = require("ejs");
const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

app.get('/jwTrainingAPI/login', async (req, res) => {
    const {status, data} = await getUser(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();       
})

app.post('/jwTrainingAPI/signup', async (req, res) => {
    const {status, data} = await postUser(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
})

app.put('/jwTrainingAPI', async (req, res) => {
    res.status(405);
    res.end();
})

app.delete('/jwTrainingAPI', async (req, res) => {
    res.status(405);
    res.end();
})

async function getUser(req) {
    let status = 500, data = null;
    try {
        const username = req.query.username;
        const password = req.query.password;
        if(username && password
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-z0-9]+$/i)
        && password.length > 0 && password.length <= 32){

            const sql = 'SELECT `userId`, `email`, `username` FROM `users` WHERE `username`=? AND `password`=?';
            const result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                status = 200;
                data = {
                    'userId': result[0].userId,
                    'email': result[0].email,
                    'username': result[0].username
                };
            } else {
                status = 204;
            }
            
        } else {
            status = 400;   
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}

async function postUser(req) {
    let status = 500, data = null;
    try {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        if(email && username && password
        && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        && email.length > 0 && email.length <= 64 
        && username.match(/^[a-z0-9]+$/i)
        && username.length > 0 && username.length <= 64
        && password.length > 0 && password.length <= 64){

            const sql = 'INSERT INTO `users` (`email`, `username`, `password`) '
            + 'VALUES (?, ?, ?)';
            const result = await db.query(sql, [email, username, password]);

            if(result.affectedRows) {
                status = 201;
                data = {'id': result.insertId };
            }
            
        } else {
            status = 400;
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}
   

app.listen(port, () => {
 console.log(`running at http://localhost:${port}`)
})