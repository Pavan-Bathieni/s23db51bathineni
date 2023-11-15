var express = require('express');
const watch_controlers= require('../controllers/watch');
const watch_detail= require('../controllers/watchdetail');
var router = express.Router();

router.get('/', watch_controlers.watch_view_all_Page );
router.get('/detail', watch_detail.watch_view_one_Page);
module.exports = router;
