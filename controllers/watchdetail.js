var watch = require('../models/watch');
exports.watch_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await watch.findById( req.query.id)
    res.render('watchdetail',
    { title: 'watch Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };