FROM node:12.16.3-slim
ENV LANG C.UTF-8

WORKDIR /usr/src/app

RUN apt-get update -qq && apt-get install -y yarn git

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
