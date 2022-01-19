const mysql = require('mysql');

   
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Auriss@123',
    database:'testdb'
});
con.connect((err)=>{
    if(!err){
        console.log('db connected successfully');
    }
    else{
        throw err
    }
})

module.exports = con ;