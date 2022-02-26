#specify a base image
FROM node:alpine

#to preventing idealTree errors
WORKDIR /usr/app

#copy the needed files from our project
#in this case, COPY <origin> <destination>
COPY ./ ./

#install some dependencies
RUN npm install

#default command
CMD ["npm", "start"]
