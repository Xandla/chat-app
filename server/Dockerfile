FROM node:18

WORKDIR /server/
COPY package.json package-lock.json /server/
RUN npm install --production

COPY . /server/

EXPOSE 8085

CMD ["node", "index.js"]
