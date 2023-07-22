FROM node:alpine AS build
WORKDIR /server
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /public/build usr/share/nginx/html