let express = require('express');
let router = express.Router();
let database = require('./dataBase')

router.get('/', (req, res) => {
    const db = new database(); 
    if(db.addUser({name: "Ganapathy"})) {
        res.send("Sucessfully added a user")
    }
    else {
        res.send("Insertion unsuccessful")
    }
})

module.exports = router