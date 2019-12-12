var express = require('express');
var router = express.Router();

var resonseTemplate ={
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "basicCard": {
            "title": "보물상자",
            "description": "보물상자 안에는 뭐가 있을까",
            "thumbnail": {
              "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
            },
            "profile": {
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
              "nickname": "보물상자"
            },
            "social": {
              "like": 1238,
              "comment": 8,
              "share": 780
            },
            "buttons": [
              {
                "action": "message",
                "label": "열어보기",
                "messageText": "짜잔! 우리가 찾던 보물입니다"
              },
              {
                "action":  "webLink",
                "label": "구경하기",
                "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
              }
            ]
          }
        }
      ]
    }
  }

/* api service '/api/ */
router.get('/', function(req, res, next) {
  res.json({name:'hi'});
});



module.exports = router;
