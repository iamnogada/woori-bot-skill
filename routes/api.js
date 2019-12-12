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
/*
{"intent":{"id":"3valv9dkvvv65hdfpdlilhvu","name":"블록 이름"},"userRequest":{"timezone":"Asia/Seoul","params":{"ignoreMe":"true"},"block":{"id":"3valv9dkvvv65hdfpdlilhvu","
name":"블록 이름"},"utterance":"발화 내용","lang":null,"user":{"id":"549282","type":"accountId","properties":{}}},"bot":{"id":"5dee0b2292690d0001fbf098","name":"봇 이름"},"a
ction":{"name":"mi5aseg3tg","clientExtra":null,"params":{},"id":"ioo17q8oq53c4n37d5r7dju7","detailParams":{}}}
*/
/* api service '/api/ */
router.get('/', function(req, res, next) {
  res.json({name:'hi'});
});


var defaultReponse ={
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleText": {
                    "text": "시험 버전입니다. 200~220 만 검색 됩니다."
                }
            }
        ]
    }
}

var response ={
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleImage": {
                    "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                    "altText": "보물상자입니다"
                }
            }
        ]
    }
}

var imageURL =""

router.post('/', function(req, res, next) {
	console.log('post');
  console.log(JSON.stringify(req.body));
  res.json(resonseTemplate);
});


module.exports = router;
