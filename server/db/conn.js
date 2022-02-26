const mongoose=require('mongoose');


const db=process.env.DATABASE;

mongoose.connect(db).then(()=>{
    console.log('connected successfully');
}).catch((err)=>{console.log('no connection')});

