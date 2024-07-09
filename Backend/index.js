//import
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/index.router.js";

//app settings
dotenv.config();
const app = express();

//import folder file etc  
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:"*"}));
app.use(express.static("./public"));


//router
app.use(router);

//app listening

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})