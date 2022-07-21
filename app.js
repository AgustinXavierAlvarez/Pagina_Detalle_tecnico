const express=require('express');
const app=express();



app.set('view engine', 'ejs');



app.listen (3050, () => { 
    console.log ('servidor corriendo')
});

app.get('/',(req,res)=>{
    res.render('index');
})