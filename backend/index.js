const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'regisform',
    multipleStatements: true
});


mysqlConnection.connect((err) => {
    if (!err) {
        console.log('db connection succes');
    } else {
        console.log('db connection failed :' + JSON.stringify(err, undefined, 2));
    }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, () => console.log('express server running in port 3000'));

//get all user
app.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err)
            res.send(rows)
        else
            console.log(err);

    })
});

//get user by id
app.get('/user/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM user WHERE userid = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows)
        else
            console.log(err);

    })
});

//delete user
app.delete('/user/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM user WHERE userid = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Delete Succesfully')
        else
            console.log(err);

    })
});


//insert user
app.post('/user', (req, res) => {
    let emp = req.body;
    var sql = "INSERT INTO user SET ?";
    mysqlConnection.query(sql, emp,
        (err, rows, fields) => {
            if (!err)
                res.send("Create Succesfully with id : " + rows.insertId)
            else
                console.log(err);

        })
});

//update user
app.put('/user', (req, res) => {
    let emp = req.body;

    var sql = "UPDATE user SET userid = ?, mobile = ? , firstname = ? , lastname = ? , email = ?, birthdate = ?  Where userid = ?";
    mysqlConnection.query(sql, [emp.userid, emp.mobile, emp.firstname, emp.lastname, emp.email, emp.birthdate, emp.userid],
        (err, rows, fields) => {
            if (!err)
                res.send("Update Succesfully")
            else
                console.log(err);

        })
});