var express = require('express');
const watch_controlers= require('../controllers/watch');
const watch_detail= require('../controllers/watchdetail');
const watch_create= require('../controllers/watchcreate');
const watch_update= require('../controllers/watchupdate');
var router = express.Router();

router.get('/', watch_controlers.watch_view_all_Page );
router.get('/detail', watch_detail.watch_view_one_Page);
router.get('/create', watch_create.watch_create_Page);
router.get('/update', watch_update.watch_update_Page);

module.exports = router;
