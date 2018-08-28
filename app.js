const express = require('express');
const expressStatic = require('express-static');
const consolidate = require('consolidate');
const getMusicUrl = require('./myModules/getMusicUrl');

const app = express();
      app.listen(80,()=>{
        console.log('有人来了');
       })

      app.use('/aaa',function(req, res){
        
        res.render('index.ejs');
        getMusicUrl();
   
       })
        ///ejs模板使用
        app.set('view engine','html');
        app.set('views', './template');
        app.engine('html', consolidate.ejs);
        ///配置静态文件目录
        app.use(expressStatic('./public'));
  
       // https://api.imjad.cn/cloudmusic/?type=artist&id=12057022
