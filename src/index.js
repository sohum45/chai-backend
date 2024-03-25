// always make ur database async await or try - catch
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./db/idx.js"

dotenv.config({
    path:'./env'
})

connectDb()
















/*
import express from "express"
const app =express()

;( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`) // connecting ur database
       app.on("error",(error)=>{
        console.log("Errr:" , error);
        throw error
       })

       app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port:${process.env.PORT}`);
       })
    }catch(error){
        console.log("Error" , error);
        throw error
    }
})() //using  iifi (strt with semi-colon)
*/




