const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json());


app.get('/hello', (req, res) => {
    res.status(200).send("Hello World")
});

app.listen(3002,()=>{
    console.log("Server is up and running at port 3000")
})