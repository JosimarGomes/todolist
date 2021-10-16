FROM node:14-alpine

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install --production

COPY ./backend ./

EXPOSE 3001

CMD ["npm", "start"]
