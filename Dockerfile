# From base image
FROM node:alpine

# Copying of working files
COPY ./ ./

# Installation of dependencies
RUN npm install

# Default container command
CMD ["npm", "start"]

