import express from "express"

const app = express()

const port = 8000;

app.get('/', (req, res)=>{
    res.status(200).json({message:"server live"})
});

app.listen(port, ()=>{
    console.log(`server running on port :${port}`)
})
