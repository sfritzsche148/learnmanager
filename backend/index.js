// backend.js
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse request bodies as JSON

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learnmanager'
});

app.get("/", (req, res) => {
    res.json("hello");
});

app.get("/user", (req, res) => {
    const q = "SELECT * FROM user;";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/login', (req, res) => { 
    const username = req.body.benutzername;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE benutzername = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "Wrong username/password" });
                }
            }
        }
    );
});

app.listen(8800, () => {
    console.log("Connected to backend");
});
