require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const setupSocket = require("./config/socket");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

setupSocket(server);

// connect database
connectDB();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
