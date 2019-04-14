FROM node:11

WORKDIR /app

COPY package*.json ./
COPY webpack.config.js ./
COPY index.js ./
COPY .env ./

RUN npm ci

EXPOSE 5000
