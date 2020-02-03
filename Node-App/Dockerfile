# From base image
FROM node:alpine

# Setting working directory
WORKDIR usr/app

# Copying of packege.json
COPY ./package.json ./

# Run NPM install
RUN npm install

# Copying of working files
COPY ./ ./

# Default container command
CMD ["npm", "start"]

