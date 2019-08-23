const express = require("express")
const app = express()
const port = 8000


// middle ware
// path way to the angular application
app.use(express.static( __dirname + '/public-site/dist/public-site' ));

// server routes
app.get('/',(req,res)=>{
    // does noting 
})

// serving on port 
app.listen(port,(err)=>{
    if(err){
        console.log('error');
        console.log(err);
    }else{
        console.log(`listening on port ${port}`);
    }
})

