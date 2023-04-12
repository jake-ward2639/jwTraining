const http = require('http');
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const db = require('./db');

const app = express();
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.set('view engine', 'ejs');

const port = 3000;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'jwtraininghelp@gmail.com',
        pass: 'rqdyctyxrrtfmecy'
    }
});

app.get('/jwTrainingAPI/article', async (req, res) => {
    const articleId = req.query.articleId;
    if(articleId && articleId.length > 0){
        const sql = 'SELECT  `title`, `video_link`, `main_content`, `quiz_content` FROM `articles` WHERE `articleId`=?';
        const result = await db.query(sql, [articleId]);

        if(result && result.length > 0){
            const data = { 
                articleId: articleId,
                title: result[0].title,
                video_link: result[0].video_link,
                main_content: result[0].main_content,
                quiz_content: JSON.parse(result[0].quiz_content)
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

app.post('/jwTrainingAPI/article/submit', async (req, res) => {
    const {status, data} = await postQuiz(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
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

app.get('/jwTrainingAPI/training/search', async (req, res) => {
    const {status, data} = await getTrainingSearchResults(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
})

app.get('/jwTrainingAPI/stats', async (req, res) => {
    const {status, data} = await getUserStats(req);
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

app.post('/jwTrainingAPI/profile_picture/upload', async (req, res) => {
    try {
        let profilePicture = req.files.profilePicture;
        const username = req.body.username;
        const password = req.body.password;
        if(username && password
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32){
            
            let sql = 'SELECT `userId` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
            
                if(!req.files) {
                    res.status(400).send({
                        status: false,
                        message: 'No image submitted uploaded'
                    });
                } else if(profilePicture.name.includes('.jpg') || profilePicture.name.includes('.jpeg') || profilePicture.name.includes('.png')){ 
                    
                    let newFileName = username + "." + profilePicture.name.slice((profilePicture.name.lastIndexOf(".") - 1 >>> 0) + 2)
                    
                    profilePicture.mv('./uploads/profilePictures/' + newFileName);
        
                    res.status(201).send({
                        status: true,
                        message: 'Image has been uploaded',
                        data: {
                            name: newFileName,
                            mimetype: profilePicture.mimetype,
                            size: profilePicture.size
                        }
                    });
        
                } else {
                    res.status(400).send({
                        status: false,
                        message: 'File submitted was not in the correct format'
                    });
                }
            } else {
                res.status(400);
                res.end();
            }
        } else {
            res.status(400);
            res.end();
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/jwTrainingAPI/profile_picture/download', async (req, res) => {
    try{
        const username = req.query.username;
        const password = req.query.password;
        if(username && password
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32){
            
            let sql = 'SELECT `userId` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                
                const directory = __dirname + "/uploads/profilePictures/";
                fs.readdir(directory, (err, files) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        const matchingFiles = files.filter(file => file.includes(username));
                        if (matchingFiles.length === 1) {
                            const img = directory + matchingFiles[0];
                            const extension = img.substring(img.lastIndexOf('.') + 1);
                            res.sendFile(img, { headers: {'Content-Type': `image/${extension}`} });
                        } else {
                            res.status(404).send(`File not found for user ${username}`);
                        }
                    }
                });
                
            } else {
                res.status(400);
                res.end();
            }
        } else {
            res.status(400);
            res.end();
        }
    } catch (err) {
        res.status(500).send(err);
    }
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

            const sql = 'SELECT `email`, `username`, job_title FROM `users` WHERE BINARY `username`=? AND BINARY `password`=?';
            const result = await db.query(sql, [username, password]);

            if(result && result.length > 0){
                status = 200;
                data = {
                    'email': result[0].email,
                    'username': result[0].username,
                    'job_title': result[0].job_title
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
        && username.length > 5 && username.length <= 32
        && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,31}$/)
        && password.length > 5 && password.length <= 32){

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
                        
                        const mailOptions = {
                            from: 'jwtraininghelp@gmail.com',
                            to: email,
                            subject: 'JWtraining: Confirmation of Sign-up',
                            text: 'Dear '+username+',\n\nThank you for signing up for JWtraining. We are excited to have you onboard and look forward to providing you with valuable training to help you grow your skills and knowledge.\n\nAs a new user, please note that your account will be reviewed by one of our admins to assign you the appropriate job title and training courses before you can access the platform. This process typically takes [X] business days.\n\nOnce your account has been approved and set up, you will receive an email with login instructions, so please keep an eye on your inbox.\n\nIf you have any questions or require any extra help during this process, please feel free to reply to this email, and we will be more than happy to assist you.\n\nThank you again for choosing JWtraining. We look forward to supporting your growth and development.\n\nBest regards,\n'+username+'\nJWtraining Team.'
                        };
                    
                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });
                        
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
                
                let sql = 'SELECT a.articleId, ar.title, ar.description, a.due_date FROM assigned_articles a JOIN articles ar ON a.articleId = ar.articleId WHERE a.userId =? AND a.completed = false';
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
                status = 401;
            }
            
        } else {
            status = 400;   
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}

async function getTrainingSearchResults(req) {
    let status = 500, data = null;
    try {
        const username = req.query.username;
        const password = req.query.password;
        let keyword = req.query.keyword;
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;

        if(!keyword){
            keyword = ""
        }
        if(username && password
        && keyword.length <= 100
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32){

            let sql = 'SELECT `userId` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);
            let userId = result[0].userId;

            if(result && result.length > 0){
                
                if(page && pageSize){
                    let offset = (page - 1) * pageSize;
                    let sql = 'SELECT articleId, title, tags, description FROM articles WHERE title LIKE ? OR description LIKE ? OR tags LIKE ? LIMIT ? OFFSET ?;';
                    let result = await db.query(sql, [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`, pageSize, offset]);
        
                    if(result && result.length > 0){
                        
                        let sql = 'SELECT articleId, title, tags, description FROM articles WHERE title LIKE ? OR description LIKE ? OR tags LIKE ?;';
                        let resultNoOffset = await db.query(sql, [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`]);

                        status = 200;
                        data = {
                            result,
                            'overallTotal': resultNoOffset.length,
                            'currentPage': page,
                            'pageSize': pageSize
                        };
                        
                    } else {
                        status = 204;
                    }

                }
                
            } else {
                status = 401;
            }
            
        } else {
            status = 400;   
        }
    } catch(e) {
        console.error(e);
    }
    return {status, data};
}

async function getUserStats(req) {
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
                
                let sql = 'SELECT COUNT(*) AS completed_articles FROM assigned_articles WHERE userId = ? AND completed = true';
                let completedArticles = await db.query(sql, [userId]);

                sql = 'SELECT COUNT(*) AS missed_articles FROM assigned_articles WHERE userId = ? AND completed = false AND due_date < NOW()';
                let missedArticles = await db.query(sql, [userId]);

                sql = 'SELECT COUNT(*) AS uncompleted_articles FROM assigned_articles WHERE userId = ? AND completed = false';
                let uncompletedArticles = await db.query(sql, [userId]);

                sql = 'SELECT a.articleId, a.title, a.description, aa.due_date FROM assigned_articles aa JOIN articles a ON a.articleId = aa.articleId WHERE aa.userId = ? AND aa.completed = false AND aa.due_date >= CURDATE() ORDER BY aa.due_date ASC LIMIT 1';
                let closestArticle = await db.query(sql, [userId]);
                    
                status = 200;
                data = {
                    'completedArticles': completedArticles[0].completed_articles,
                    'missedArticles': missedArticles[0].missed_articles,
                    'uncompletedArticles': uncompletedArticles[0].uncompleted_articles,
                    closestArticle
                };
                
            } else {
                status = 401;
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

async function postQuiz(req) {
    let status = 500, data = null;
    try {
        const username = req.body.username;
        const password = req.body.password;
        const articleId = req.body.articleId;
        const userAnswers = req.body.answers.split(",").map(Number);
        if(username && password && articleId && userAnswers
        && username.length > 0 && username.length <= 32
        && username.match(/^[a-zA-Z0-9_.-]+$/)
        && password.length > 0 && password.length <= 32
        && articleId.length > 0 && articleId.length <= 32
        && articleId.match(/^[0-9]+$/)){
            
            let sql = 'SELECT `userId` FROM `users` WHERE `username`=? AND `password`=?';
            let result = await db.query(sql, [username, password]);
    
            if(result && result.length > 0){
                
                let sql2 = 'SELECT `quiz_content` FROM `articles` WHERE `articleId`=?';
                let articleInfo = await db.query(sql2, [articleId]);
                let quizContent = JSON.parse(articleInfo[0].quiz_content);
        
                let score = 0;
                for (let i = 0; i < quizContent.length; i++) {
                    if (userAnswers[i] == quizContent[i].correctAnswerIndex) {
                        score++;
                    }
                }
                let percentScore = score / quizContent.length;
    
                if (percentScore >= 0.7) {
                
                    let userId = result[0].userId;
                    let sql3 = 'UPDATE `assigned_articles` SET `completed`=? WHERE `userId`=? AND `articleId`=?';
                    let updateResult = await db.query(sql3, [true, userId, articleId]);
                    if(updateResult.affectedRows) {
                        status = 200;
                        data = {
                            'percentScore': percentScore
                        };
                    } else {
                        status = 400;
                    }
                
                
                } else {
                    status = 400;
                }
                
            } else {
                status = 401;
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