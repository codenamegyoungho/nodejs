const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function() {
    console.log('server running on port 8080');
})

// get요청을 받을 때는 app.get()을 사용한다.
//  예시) app.get('/hello', function(req, res) { res.send('hello world'); });
app.get('/pet',function(요청,응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
})
app.get('/beauty',function(요청,응답){
    응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
})
app.get('/',function(요청,응답){
    응답.sendFile(__dirname + '/index.html',);
})
app.get('/write',function(요청,응답){
    응답.sendFile(__dirname + '/write.html',);
})

app.post('/add',function(요청,응답){
    응답.send('전송완료');
    console.log(요청.body.date);
});