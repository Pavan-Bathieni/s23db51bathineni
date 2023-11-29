var express = require('express');
const watch_controlers= require('../controllers/watch');
const watch_detail= require('../controllers/watchdetail');
const watch_create= require('../controllers/watchcreate');
const watch_update= require('../controllers/watchupdate');
const watch_delete= require('../controllers/watchdelete');
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

var router = express.Router();

router.get('/', watch_controlers.watch_view_all_Page );
router.get('/detail', watch_detail.watch_view_one_Page);
router.get('/create', secured,watch_create.watch_create_Page);
router.get('/update', secured,watch_update.watch_update_Page);
router.get('/delete', secured,watch_delete.watch_delete_Page);


module.exports = router;
