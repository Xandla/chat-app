FROM node:18

WORKDIR /public/
COPY package.json package-lock.json /public/src/
RUN npm install --production

COPY . /public/src/

EXPOSE 8085

CMD ["node", "index.js"]
