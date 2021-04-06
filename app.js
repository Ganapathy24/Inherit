require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
let cors = require('cors')
app.use(cors())
const MongoDBStore = require('connect-mongodb-session')(session);

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gmgmf.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
const store = new MongoDBStore({
    uri: url,
    collection: 'Sessions'
});

store.on('error', function(error) {
    console.log(error);
});

const app = express();
const api = require('./express_app/router/apiRouter');

app.use(express.static(__dirname + '/dist/inherit-ui'));
app.use(express.json());
app.use(morgan('tiny'))
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
}));

app.use('/api', api);

// // Catch all other invalid routes
app.get('/', function(req,res){
    res.status(200).sendFile(__dirname + '/dist/inherit-ui/index.html');
});

// Start the server
const port = process.env.PORT || 8081
app.listen(port,() => console.log(`Listening at port ${port}`));
