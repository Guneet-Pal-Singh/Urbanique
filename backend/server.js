const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(express.json());
app.use(cors())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"urbanique"
})
app.get('/',(re,res)=>{
    return res.json("From backend");
 })

app.post('/customer',(req,res)=>{
    const sql="select * from customer where emailid = ? and password= ? ";
    const values=[
        req.body.email,
        req.body.password
    ]
    db.query(sql,[ req.body.email,req.body.password],(err,data)=>{
        if (err) return res.json("ERROR");
        if (data.length>0){
            return res.json("Login Successful")
        }
        else{
            return res.json("Login Failed")
            
        }
        return res.json(data);
    })
})
app.listen(8081,()=>{
console.log("listening");
}
)