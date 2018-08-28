const fs = require('fs');

let json = {

RF:function(){
fs.readFile('./Data/file.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        var buf = Buffer.from(data);
        data = buf.toString(); 
        console.log(data)
    }
})   
} 
}
module.exports = json;