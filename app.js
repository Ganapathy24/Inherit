const express = require('express');
const app = express();

// // Use the /dist directory
// app.use(express.static(__dirname + '/dist'));

// // Catch all other invalid routes
// app.get('./', function(req,res){
//     res.status(200).sendFile(__dirname + '/dist/index.html');
// });

app.get('/', (req, res) => {
    res.send("Hello world");
})
// Start the server
app.listen(process.env.PORT || 8080);