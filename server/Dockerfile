FROM node:18-alpine

WORKDIR /app 
#Set the working directory in the container

COPY package.json package-lock.json ./ 
#Copy the package.json and package-lock.json files to the container

RUN npm i 
#install dependencies --production skips devdependencies

COPY . . 
#Copy the rest of the application source code to the container

EXPOSE 5000
#expose the port to the outer rims

CMD ["npm", "start"]
#Run the app when the container launches