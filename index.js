require("dotenv").config();

// === Server to client ===

const { wsServer, server } = require("./lib/server");
const twitterStream = require("./lib/twitter");


twitterStream.on("error", error => {
  console.error(error);
})

wsServer.on("connection", client => {
  console.log("new client connection");

  client.on("message", message => {
    
    const messageParsed = JSON.parse(message);

    console.log("message from client: ", message);
    switch(messageParsed.type){
      case "command": {
        switch (messageParsed.text) {
          case "pause": {
            twitterStream.pause()
          } 
          break;
          case "resume": {
            twitterStream.resume()
          }
          break;
        }

      }
    }

    client.send(message);
  })

  client.send("Welcome!");

  twitterStream.on("data", tweet => {
    // chaine de caractere
    client.send(JSON.stringify(tweet));
  })
})

server.listen(process.env.PORT);