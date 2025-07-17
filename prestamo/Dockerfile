FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3002

CMD ["node", "index.js"]
