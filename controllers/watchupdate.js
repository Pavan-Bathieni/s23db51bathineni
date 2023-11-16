var watch = require('../models/watch');
exports.watch_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await watch.findById(req.query.id)
    res.render('watchupdate', { title: 'watch Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };