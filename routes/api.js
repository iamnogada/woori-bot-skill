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


var data = {
    "211" : "예수는 내 힘이요(내삶의 이유라)",
    "212" : "갈보리 십자가의",
    "213" : "거룩하신 하나님",
    "214" : "그곳에서 기도드리네",
    "215" : "그대를 만난 건 주님의 축복",
    "216" : "그때 그 무리들이",
    "217" : "나는 하나님을 예배하는", 
    "218" : "나의 모습 나의 소유",
    "219" : "나 주님의 기쁨 되기 원하네",
    "220" : "나 주의 믿음 갖고"
}

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
    let params = JSON.parse(req.body.action.detailParams.sys_number.value);
    let number = params.amount;
    var result;
    if(number <211 || number>220){
        result = defaultReponse;
    }else{
        result = {...response}

        result.template.outputs[0].simpleImage.imageUrl=`${req.protocol}://${req.host}/images/sheet/${number}.jpg`;
        result.template.outputs[0].simpleImage.altText=data[number];
    }
    res.json(result)
});


module.exports = router;
