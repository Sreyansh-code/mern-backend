import express from 'express'
import dbConnect from './config/db.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
const app = express()
app.use(express.json())

const startServer = async () => {
    await dbConnect()
    app.listen(8080, () => console.log("Server is live...."))
}
startServer()

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)