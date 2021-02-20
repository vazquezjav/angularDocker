FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install 
RUN npm build --prod

FROM nginx:alpine 
COPY --from node /app/dist/conexion3 /usr/share/nginx/html