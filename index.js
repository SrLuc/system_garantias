const { pool } = require("./connection")
const express = require('express');
const app = express();
const port = 1234;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get("/clientes", (req, res) => {
    pool.query("SELECT * FROM Clientes;", (error, result) => {
        if (error) {
            res.status(400).send("Error");
            return;
        }
    });
})


app.listen(port, () => {
    pool.connect().then(() => {
        console.log(`App listening at http://localhost:${port}`);
    })
})