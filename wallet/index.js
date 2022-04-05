const http = require("http");
const app = require("./route/app");
const server = http.createServer(app);
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
    

    require('./model/user')   
    require('./model/post')

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});