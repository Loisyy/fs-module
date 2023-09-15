const fs = require("fs");
const path = require("path");

// Create the frontend-scaffold folder
fs.mkdirSync("frontend-scaffold");

// Create and fill the index.html file
const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <script src="./js/script.js"></script>
</body>
</html>`;

fs.writeFileSync("frontend-scaffold/index.html", indexHTML);

// Create the css folder and style.css file
fs.mkdirSync("frontend-scaffold/css");
const styleCSS = `h1 {
    text-align: center;
}`;
fs.writeFileSync("frontend-scaffold/css/style.css", styleCSS);

// Create the js folder and script.js file
fs.mkdirSync("frontend-scaffold/js");
const scriptJS = 'alert = ("Hello World");';
fs.writeFileSync("frontend-scaffold/js/script.js", scriptJS);

// Create the image folder
fs.mkdirSync("frontend-scaffold/image");

console.log("Frontend scaffold created successfully!");
