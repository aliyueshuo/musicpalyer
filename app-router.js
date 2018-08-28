var express = require('express');

var app = express();
    app.listen(8080,()=>{
        console.log('有人来了');
    })

var routerUser= express.Router();
routerUser.use(function(req, res){
  require('./router/user')(res);
})

app.use('/user',routerUser);

