const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT;
/*const User=require('./model/userSchema')



app.get('/',(req,res)=>{

    res.send('helllo');
    console.log(req.url);
});*/

/*app.get('/about',midddleware,(req,res)=>{
    res.send('Hello from about server app js');
});

app.get('/signin',(req,res)=>{
    res.send('Hello from sigin page server');
});

app.get('/signup',(req,res)=>{
    res.send('Hello from signup page server');
});

app.use((req,res)=>
{
   res.status(404).send("404 Error");

});*/


app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
});

/*,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
} */