FROM node:16-alpine

WORKDIR /usr/app .
COPY package.json .
RUN npm install
COPY build .

ENTRYPOINT ["node", "main.js"]
