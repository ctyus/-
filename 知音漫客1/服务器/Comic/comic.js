const express = require('express');
const router = express.Router();
const sql = require('../model/ComicModel')
const PH = require('../model/PaiHangModel')  //排行

router.get('/data', (req, res) => {
  // 对数据的正确性进行验证


  let del = new sql();
  del.GetComic(function (ads) {
    if (ads.code == -100) {
      console.log(ads.err);
      res.json({ code: -2, Msg: '系统性错误' });
      return;
    }
    if (ads.code == 100) {
      res.json({ "code": 0, "msg": "", "count": 1000, "data": ads.results });
    }
  });
});
router.get('/paihang', (req, res) => {
  // 对数据的正确性进行验证


  let del = new PH();

  del.GetPH(function (ads) {
    if (ads.code == -100) {
      console.log(ads.err);
      res.json({ code: -2, Msg: '系统性错误' });
      return;
    }
    if (ads.code == 100) {
      res.json({ "code": 0, "msg": "", "count": 1000, "data": ads.results });
    }
  });
});


module.exports = router;