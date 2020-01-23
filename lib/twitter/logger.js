const { Writable } = require("stream");

const logger = new Writable({
  objectMode: true,
  write(chunk, encoding, callback) {

    const data = JSON.stringify(chunk);

    console.log("--------------------------------\n")
    console.log(data)
    console.log("\n\n")

    callback();
  }
})

module.exports = logger;
