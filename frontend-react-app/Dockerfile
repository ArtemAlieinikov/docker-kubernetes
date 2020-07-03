FROM node:alpine as build_step
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build_step /app/build /usr/share/nginx/html

