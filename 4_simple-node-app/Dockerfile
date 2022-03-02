#specify a base image
FROM node:alpine

#to preventing idealTree errors
WORKDIR /usr/app

#copy the needed files from our project
#in this case, COPY <origin> <destination>
COPY ./package.json ./

#install some dependencies
RUN npm install

#this if for not run previous command every time that I made a 
#modification
COPY ./ ./

#default command
CMD ["npm", "start"]
