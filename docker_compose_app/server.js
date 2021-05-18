const express = require("express");
const redis = require("redis");
//레디스 클라이언트 생성
const client = redis.createClient({
    // host:"https://redis-server.com",//도커 환경과 도커 환경이 아닐 때 다르다.
    host: "redis-server", //도커 환경 -> docker-compost.yml 파일에 명시한 컨테이너 이름
    port: 6379
});

const app = express();

// 숫자 0부터
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        //현재 숫자를 가져온 후에 1씩 올려줌
        client.set("number", parseInt(number) + 1)
        res.send("숫자가 1씩 올라갑니다. 숫자: " + number)
    })
})

app.listen(8080);
console.log("server is running")