# 베이스 이미지
FROM node:10

# 워크 디렉터리
WORKDIR /usr/src/app

# 종속성
COPY ./ ./

RUN npm install

CMD ["node", "server.js"]