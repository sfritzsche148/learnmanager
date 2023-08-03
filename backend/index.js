import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learnmanager'
})

app.get("/", (req,res)=>{
    res.json("hello");
})

app.get("/user", (req, res)=>{
    const q = "SELECT * FROM user;"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.post('/login/', (req, res) => {
    const username = req.body.benutzername
    const password = req.body.password

    db.query(
        "SELECT * FROM user WEHRE benutzername = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }else {
                if (result) {
                    res.send(result) 
                } else {
                    res.send({message: "Wrong username/password"})
                }
            }
        }
    )
})


app.listen(8800, ()=>{
    console.log("Connected to backend");
})