FROM node:alpine AS build
WORKDIR /public
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /public/build usr/share/nginx/html