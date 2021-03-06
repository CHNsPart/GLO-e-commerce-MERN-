import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import ora from "ora"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import productRoute from "./routes/productRoute.js"


dotenv.config()
connectDB()

const app = express()


app.get("/", (req, res) => {
    res.send("Landing Page")
})


app.use("/api/products", productRoute)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


const throbber = ora({
  text: '',
  spinner: {
    frames: ['👾', '🤖', '👨‍💻', '🕵🏼‍♂️'],
    interval: 200, // Optional
  },
}).start();

 setTimeout(() => {
  throbber.stop();
}, 1000 * 10) 


// Simulating some asynchronous work for 10 seconds...


app.listen(PORT, 
    console.log(
            `Server is on live in`.brightMagenta.bold+`\n@...@\n#...#\n%...%\n#...#\n&...&\n`.green+`{ ${process.env.NODE_ENV} }`.brightGreen.bold+` mode on port `.black.bold.dim.italic +
    `{ ${PORT} }`.brightMagenta+
    `\n\n ------------- `.america+`CHNsBOT`.trap+ ` -------------\n`.america)
)

setTimeout(() => {
        throbber.stop();
    }, 1000 * 2)