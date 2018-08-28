function response(res){
res.writeHead(200,{'content-Type':'text/html'});
res.end('<h1>HELLO WORLDd</h1>');
}
module.exports = response;