const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "alA3SapJ#hyxHIpePpIrBvpN-u6TX0hDqMcfMv9gJv9mwpGnZGrQ",
  MONGODB: process.env.MONGODB || "mongodb://mongo:aAPxMVTgCvoBSHypAKvnrIeRQpdCdntj@interchange.proxy.rlwy.net:29573",
  OWNER_NUM: process.env.OWNER_NUM || "94776290170",
};
