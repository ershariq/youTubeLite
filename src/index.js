import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`the server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("mongoDB Connection Failed", error)
})