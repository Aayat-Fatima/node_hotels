const mongoose=require('mongoose')

//now defining the mongodb connection url

const mongoURL='mongodb://localhost:27017/hotels'
// to extablish connection with mongodb
mongoose.connect(mongoURL)
// get the default connection.   mongoose maintains a default connection object representing the Mongodb connection
const db=mongoose.connection;

//define event listeners for database connection.

db.on('connection' ,() => {
    console.log("connected to mongodb server")
})

db.on('error' ,(err) => {
    console.log("mongodb connection error", err)
})

db.on('disconnection' ,() => {
    console.log("mongodb disconnected")
})

//Export the database connection

module.exports=db;

