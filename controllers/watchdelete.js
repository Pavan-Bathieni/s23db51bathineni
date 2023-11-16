var watch = require('../models/watch');
exports.watch_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await watch.findById(req.query.id)
    res.render('watchdelete', { title: 'watch Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };