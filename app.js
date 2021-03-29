const express = require('express');
const app = express();
const api = require('./express_app/router/apiRouter');
require('dotenv').config();

app.use(express.static(__dirname + '/dist/inherit-ui'));
app.use(express.json());

app.use('/api', api);

// // Catch all other invalid routes
app.get('/', function(req,res){
    res.status(200).sendFile(__dirname + '/dist/inherit-ui/index.html');
});

// Start the server
const port = process.env.PORT || 8081
app.listen(port,() => console.log(`Listening at port ${port}`));
