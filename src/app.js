const express = require("express");
const app= express();
const path = require('path');
const hbs = require("hbs");
const port= process.env.PORT || 8000;

const static_path = path.join( __dirname, "../public" );
const partials_path = path.join( __dirname, "../temp/partials" );
const temp_path = path.join( __dirname, "../temp/views" );

app.set('view engine', 'hbs');
app.set('views',temp_path );

app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("",(req,res)=>{
    res.render('index')
});

app.get("/about",(req,res)=>{
    res.render("about")
});

app.get("/weather",(req,res)=>{
    res.render('weather')
});

app.get("/*",(req,res)=>{
    res.render('404error',{
        errorMsg: `OOp's ! Page Not Found ` 
    })
});

app.listen(port , () => {
    console.log(`listning to the port ${port}`); 
});