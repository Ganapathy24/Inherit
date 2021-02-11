const express = require('express');
const app = express();
const api = require('./express_app/apiRouter');

app.use(express.static(__dirname + '/dist/inherit-ui'));

app.use('/api', api);

// // Catch all other invalid routes
app.get('/', function(req,res){
    res.status(200).sendFile(__dirname + '/dist/inherit-ui/index.html');
});

// Start the server
app.listen(process.env.PORT || 8080);
