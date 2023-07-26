# Snappy - Chat Application 
Snappy is a chat application build with the power of MERN (MongoDB, Express, React, Node.js) Stack. 

![login page](./images/snappy_login.png)

![home page](./images/snappy.png)

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed. 

This repository provides example environment (.env.example) files which you can use. To use them you need to rename them from ``.env.example`` to ``.env``
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

>Note: **Make sure a MongoDB server is running and update ``/server/.env`` the MONGO_URL accordingly.**

Now install the dependencies for backend and frontend.
```shell
cd server
npm i
cd ..
cd public
npm i
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
npm start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
npm start
```

Done! Now open localhost:3000 in your browser.
