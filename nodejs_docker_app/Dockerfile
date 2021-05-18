# 베이스 이미지
# FROM alpine #npm이 없어 npm install 할 수 없음
FROM node:10

# 워크 디렉터리
WORKDIR /usr/src/app

# 종속성
COPY package.json ./
# COPY ./ ./

# 추가적으로 필요한 파일
RUN npm install

COPY ./ ./

CMD ["node", "server.js"]