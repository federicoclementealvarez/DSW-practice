import fs from 'node:fs';
import http from 'node:http';


try{
  const hostname = '127.0.0.1';
  const port = 3000;
  const indexList = ['/', '/home', '/home.html', '/index', '/index.html'];
  const page1List = ['/page1'];
  const page2List = ['/page2'];  

  function setServerReq(serverReq,file,desc,statusCode){
    serverReq.file=file;
    serverReq.desc = desc;
    serverReq.res.statusCode=statusCode;
  }

  function defineHtml(serverReq){
    serverReq.res.statusCode=200;
    if (serverReq.req.method==='GET'){
      if(indexList.includes(serverReq.req.url)) serverReq.file='index.html';
      else if (page1List.includes(serverReq.req.url)) serverReq.file='page11.html';
      else if (page2List.includes(serverReq.req.url)) serverReq.file='page2.html';
      else setServerReq(serverReq,'notFoundPage.html','Error 404 - Page not found',404);
    }
    else setServerReq(serverReq,'notAllowedMethod.html','Error 405 - Method not allowed',405);

    return(serverReq);
  }

  const server = http.createServer(async (req, res) => {
    try{
      const serverReq = {
        req: req,
        res: res,
        timestamp: new Date(),
        desc: 'Succesful response',
      }
      await response(defineHtml(serverReq));
    }
    catch (error){
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      let desc = 'Error 500 - Something went wrong';
      res.end(desc);
      recordRequest({req:req, res:res, timestamp:new Date(),desc:desc});
    }
  });


  async function response(serverReq)
  {
    try{
      fs.readFile(serverReq.file,(error,data)=>{
        if(error){
          serverReq.res.setHeader('Content-Type', 'text/plain');
          serverReq.res.statusCode=404;
          serverReq.desc='Error 404: File not found';
          serverReq.res.end(serverReq.desc);
        }
        else{
          serverReq.res.setHeader('Content-Type', 'text/html');
          serverReq.res.end(data);
        }
        recordRequest(serverReq);
      })
    }
    catch (error){
        console.log(error);
    }
  }
 

  function recordRequest(serverReq){
    try{
      fs.appendFile('myCoolServer.log',`Method: ${serverReq.req.method}\nURL: ${serverReq.req.url}\nTimestamp: ${serverReq.timestamp}\nResponse status code: ${serverReq.res.statusCode}\nResponse description: ${serverReq.desc}\n\n`,()=>{
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

}
catch (error){
  console.log("Internal code exception: " + error);
}
