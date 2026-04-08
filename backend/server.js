import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://respect-indol.vercel.app',
        'https://respect-s5pn.vercel.app'
    ]
}))


// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () => console.log('Server started on PORT: ' + port))