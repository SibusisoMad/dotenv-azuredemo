const { DotenvAzure } = require('dotenv-azure')
var http = require('http');

let testValue="";

async function main() {
    
    let dotenvAzure = new DotenvAzure()
    let { parsed } = await dotenvAzure.config()
    console.log(parsed.appName);
    testValue=parsed.appName;
}

main();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end(testValue);
}).listen(process.env.PORT || 8100);