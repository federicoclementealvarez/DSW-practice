import fs from 'node:fs';
import http from 'node:http';

//try{
  const hostname = '127.0.0.1';
  const port = 3000;


  const server = http.createServer(async (req, res) => {
    const timestamp = new Date();
    if (req.method==='GET'){
      let desc='Succesful response';
      switch (req.url){
        case ('/'):
        case ('/home'):
        case ('/home.html'):
        case ('/index.html'):
        case ('/index'):
          await response(res,req,'index.html',200, timestamp, desc);
          break;
    
        case ('/page1'):
          await response(res,req,'page1.html',200, timestamp, desc);
          break;
    
        case ('/page2'):
          await response(res,req,'page2.html',200, timestamp, desc);
          break;
    
        default:
          desc="Error 404 - Page not found";
          await response(res,req,'notFoundPage.html',404, timestamp, desc);
          break;
      }
    }
    else{
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/html');
      let desc = 'Error - Method not allowed';
      res.end(desc);
      recordRequest(req,timestamp,res,desc);
    }
  });


  async function response(res,req,file,stsCode,timestamp,desc)
  {
    try{
      res.setHeader('Content-Type', 'text/html');
      fs.readFile(file,(error,data)=>{
        if(error){
          res.statusCode=404;
          desc='Error 404: File not found';
          res.end(desc);
        }
        else{
          res.statusCode = stsCode;
          res.end(data);
        }
        recordRequest(req,timestamp,res,desc);
      })
    }
    catch (error){
        console.log(error);
    }
  }
 

  function recordRequest(req, timestamp, res, desc){
    try{
      fs.appendFile('myCoolServer.log',`Method: ${req.method}\nURL: ${req.url}\nTimestamp: ${timestamp}\nResponse status code: ${res.statusCode}\nResponse description: ${desc}\n\n`,()=>{
        console.log(`Request succesfully recorded`);
      });
    }
      catch (error){
        console.log(error);
      }
  }


  server.listen(port, hostname, (error) => {
    if (error){
      console.log("An error has ocurred");
    }
    else {
      console.log(`Server running at http://${hostname}:${port}/`);
    }
  });
/*}
catch (error){
  console.log(error);
}*/
