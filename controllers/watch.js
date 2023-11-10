var watch = require('../models/watch');
// List of all watch
exports.watch_list = function (req, res) {
    res.send('NOT IMPLEMENTED: watch list');
};
// for a specific watch.
exports.watch_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await watch.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle watch create on POST.
exports.watch_create_post = async function (req, res) {
    console.log(req.body)
    let document = new watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watch_type":"goat", "cost":12, "size":"large"}
    document.WatchId = req.body.WatchId;
    document.Watch_Price = req.body.Watch_Price;
    document.Watch_Style = req.body.Watch_Style;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle watch delete form on DELETE.
exports.watch_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);
};
// Handle watch update form on PUT.
exports.watch_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await watch.findById(req.params.id)
        // Do updates of properties
        if (req.body.WatchId)
            toUpdate.WatchId = req.body.WatchId;
        if (req.body.cost) toUpdate.Watch_Price = req.body.Watch_Price;
        if (req.body.size) toUpdate.Watch_Style = req.body.Watch_Style;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// List of all watch
exports.watch_list = async function (req, res) {
    try {
        thewatch = await watch.find();
        res.send(thewatch);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show all view
exports.watch_view_all_Page = async function (req, res) {
    try {
        thewatch = await watch.find();
        res.render('watch', { title: 'watch Search Results', watchList: thewatch });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
