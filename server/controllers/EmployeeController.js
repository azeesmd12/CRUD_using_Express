const con = require('../database');
module.exports = {

    getAll : async function(req,res){
        let query = 'select * from employee'
        con.query(query,(err,result)=>{
            if(err) throw err
            res.render('main',{result});

        })
    },
    renderaddPage:  function(req,res){
        res.render('adduser')

    },
    createEmployee: async function(req,res){
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        let query = 'insert into employee (emp_name,email,mobile) VALUES (?,?,?)'
         con.query(query,[name,email,mobile],(err,result)=>{
            if(err) throw err
            res.render('adduser');
        })
        
    },

    renderEditpage:  function(req,res){
        let id = req.params.id;
        console.log(id);
        let query = 'select * from employee where id = ?'
        con.query(query,[id],(err,result)=>{
            if(err) throw err
            res.render('edit',{result});
        })
        

    },

    editEmployee: function(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        let query = 'update employee set emp_name = ?,email=?,mobile=? where id = ?'
         con.query(query,[name,email,mobile,id],(err,result)=>{
            if(err) throw err
            res.redirect('/');
        })
    },

    deleteEmployee: function(req,res){
        const id = req.params.id
        let query = 'delete from employee where id = ?'
        con.query(query,[id],(err,result)=>{
           if(err) throw err
           res.redirect('/');
       })
   },
   
 }
