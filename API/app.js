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

app.set('view engine', 'ejs');

const port = 3000;

app.get('/jwTrainingAPI/article', async (req, res) => {
    const articleId = req.query.articleId;
    if(articleId && articleId.length > 0){
        const sql = 'SELECT  `title`, `video_link`, `main_content`, `quiz_content` FROM `articles` WHERE `articleId`=?';
        const result = await db.query(sql, [articleId]);

        if(result && result.length > 0){
            const data = { 
                title: result[0].title,
                video_link: result[0].video_link,
                main_content: result[0].main_content,
                quiz_content: result[0].quiz_content
            };
            res.render('article.ejs', data);
        } else {
            res.status(204);
        }
    } else {
    res.status(400);
    }
    res.end();
})

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

app.get('/jwTrainingAPI/training', async (req, res) => {
    const {status, data} = await getTraining(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();       
})

app.post('/jwTrainingAPI/assign_role', async (req, res) => {
    const {status, data} = await postRole(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
})

app.post('/jwTrainingAPI/assign_training', async (req, res) => {
    const {status, data} = await postAssignment(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
})

async function getUser(req) {
    let status = 500, data = null;
    try {
        const username = req.query.username;
        const password = req.query.password;
        if(username && password
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32){

            const sql = 'SELECT `email`, `username` FROM `users` WHERE `username`=? AND `password`=?';
            const result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                status = 200;
                data = {
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
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && username.length > 0 && username.length <= 64
        && password.length > 0 && password.length <= 64){

            let sql = 'SELECT `userId` FROM `users` WHERE `email`=?';
            let result = await db.query(sql, [email]);
            if(result.length < 1){
                
                let sql = 'SELECT `userId` FROM `users` WHERE `username`=?';
                let result = await db.query(sql, [username]);
                if(result.length < 1){
                
                    let sql = 'INSERT INTO `users` (`email`, `username`, `password`) '
                    + 'VALUES (?, ?, ?)';
                    let result = await db.query(sql, [email, username, password]);
        
                    if(result.affectedRows) {
                        status = 201;
                        data = {'id': result.insertId };
                    }
                
                } else { 
                    status = 400;
                    data = { error: "That username is already in use" };
                }
                
            } else { 
               status = 400;
               data = { error: "That email is already in use" };
            }
            
        } else {
            status = 400;
            data = { error: "Information provided was Invalid" };
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}

async function getTraining(req) {
    let status = 500, data = null;
    try {
        const username = req.query.username;
        const password = req.query.password;
        if(username && password
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32){

            let sql = 'SELECT `userId` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);
            let userId = result[0].userId;

            if(result && result.length > 0){
                
                let sql = 'SELECT a.articleId, ar.title, ar.description FROM assigned_articles a JOIN articles ar ON a.articleId = ar.articleId WHERE a.userId =?';
                let result = await db.query(sql, [userId]);
    
                if(result && result.length > 0){
                    
                    let sql = "SELECT CONCAT((SUM(completed) / COUNT(articleId)) * 100, '%') AS completed_percentage FROM assigned_articles WHERE userId =? AND due_date >= CURDATE()";
                    let completed_percentage = await db.query(sql, [userId]);
                    
                    status = 200;
                    data = {
                        result,
                        'completed_percentage': completed_percentage[0].completed_percentage
                    };
                    
                } else {
                    status = 204;
                }
                
            } else {
                status = 400;
            }
            
        } else {
            status = 400;   
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}
   
async function postRole(req) {
    let status = 500, data = null;
    try {
        const username = req.body.username;
        const password = req.body.password;
        const targetuser = req.body.targetuser;
        const newrole = req.body.newrole;
        if(username && password && targetuser && newrole
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32
        && targetuser.length > 0 && targetuser.length <= 32
        && targetuser.match(/^[a-zA-Z0-9_.-]+$/)
        && newrole.length > 0 && newrole.length <= 32
        && newrole.match(/^[a-zA-Z0-9_-]+$/)){

            let sql = 'SELECT `job_title` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                
                if (result[0].job_title == 'admin'){
                    
                    let sql = 'UPDATE `users` SET `job_title` =? WHERE `username` =?';
                    let result = await db.query(sql, [newrole, targetuser]);
                    if(result.affectedRows) {
                        status = 200;
                        data = {'affectedRows': result.affectedRows };
                    } else {
                        status = 204;   
                    }
                    
                } else {
                    status = 401;   
                }
    
            } else {
                status = 400;   
            }
            
        } else {
            status = 400;   
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}

async function postAssignment(req) {
    let status = 500, data = null;
    try {
        const username = req.body.username;
        const password = req.body.password;
        const articleId = req.body.articleId;
        const job_title = req.body.job_title;
        const deadline = req.body.deadline;
        if(username && password && articleId && job_title && deadline
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32
        && articleId.length > 0 && articleId.length <= 32
        && articleId.match(/^[0-9]+$/)
        && job_title.length > 0 && job_title.length <= 32
        && job_title.match(/^[a-zA-Z0-9_-]+$/)
        && deadline.length > 0 && deadline.length <= 12
        && deadline.match(/^[0-9]+$/)){

            let sql = 'SELECT `job_title` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                
                if (result[0].job_title == 'admin'){
                    
                    let sql = 'INSERT INTO assigned_articles (userId, articleId, due_date, completed) SELECT u.userId, a.articleId, DATE_ADD(NOW(), INTERVAL ? DAY), FALSE FROM users u INNER JOIN articles a ON u.job_title = ? AND a.articleId = ? LEFT JOIN assigned_articles aa ON u.userId = aa.userId AND a.articleId = aa.articleId WHERE aa.userId IS NULL';
                    let result = await db.query(sql, [deadline, job_title, articleId]);
                    if(result.affectedRows) {
                        status = 200;
                        data = {'affectedRows': result.affectedRows };
                    } else {
                        status = 204;   
                    }
                    
                } else {
                    status = 401;   
                }
    
            } else {
                status = 400;   
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