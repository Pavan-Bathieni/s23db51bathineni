var watch = require('../models/watch');
exports.watch_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('watchcreate', { title: 'watch Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    