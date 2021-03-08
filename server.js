const express=require('express');
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const app=express();

//=======covid package===========
const api=require('novelcovid');

//=====-static assets==========
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

//======express-handlebars==========
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//======express-handlebars==========
app.engine('handlebars',exphbs());
app.set("view engine", "handlebars");


app.get('/',(req,res)=> {
    api.countries()
    .then((response)=> {
        res.render('./home',{response});
        console.log(response)
    })  
    .catch((err)=> {
        console.log(err);
    })

})

const PORT=3030;
app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`surver running on ${PORT}`)
})