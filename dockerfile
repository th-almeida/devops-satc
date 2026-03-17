FROM node:20-alpine

WORKDIR /app

COPY gremio-page/ .

RUN npm install

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]