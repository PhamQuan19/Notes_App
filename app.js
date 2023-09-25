require('dotenv').config();

const express= require('express');
const expressLayouts =require('express-ejs-layouts');

const app =express();
const port=5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Static files
app.use(express.static('public'));
//template Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

//Router
app.use('/', require('./server/routes/index'));


// app.get('/',function(req , res){
//     const locals ={
//         title:'NodeJS Notes',
//         description:" NodeJS Notes App"
//     }
//     res.render('index',locals);
// });

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});