FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
# 운영 환경에서는 nodemon을 쓸 필요 없기 때문에 start
