
var request = require('request');
const fs = require('fs');

 
let datax = fs.readFileSync('./Data/database.json');
var buf = new Buffer.from(datax);
datax= JSON.parse(buf);
let singers = datax.singer;



var optionsAr = {
  method:'GET',
  url:'https://api.imjad.cn/cloudmusic', ////id=12057022 黄龙飞
  qs: { type: 'artist', id: '12057022' },
  headers:
  {
    'Cache-Control': 'no-cache' 
  }
};



////输出的数据
let json = {
/////这是一个发送请求的方法，返回值为每一个歌手的信息,其中的hotSongs[index].id为前五十个热门歌曲的id
 request:function (){
   let datap = [];
   singers.forEach(function(index,item){
    //请求歌手的song信息;
     request(optionsAr,function(err,res,body){
      if(err){
      throw new Error(err);
      }
      else{
       console.log('获取数据成功');
       datap[item] = body;
      }
    })
 })
 return datap;
 },
 index : 1
}

module.exports = json;

