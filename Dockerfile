FROM node:16-alpine3.11

#Crea el directorio api
WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]