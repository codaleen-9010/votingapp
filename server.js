const express= require('express')
const app =express();

const bodyParser=require('body-parser');

app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('listening to port 3000');
})