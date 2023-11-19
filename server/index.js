const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const photoRoutes = require("./photos.routes");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./archivos"
}));

app.use(express.static("images"));

app.use(photoRoutes);

app.listen(3000);

console.log(`Server on port ${ 3000 }`);