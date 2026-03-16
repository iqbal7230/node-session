import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js";
import  studentRoutes from "./routes/student.routes.js"

dotenv.config()
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json())

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/students", studentRoutes)

app.listen(port, ()=>{
    console.log(`serving running on port :${port}`)
})