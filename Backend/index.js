import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from './route/book.route.js'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())

const port = process.env.PORT || 4000
const uri=process.env.MongoDBURI

// connect to mongodb
try{
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology:true
    })
    console.log("Connected To MongoDB")
}catch(error){
    console.log("Error:", error)
}


app.use('/book', bookRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
