# credit to https://blog.mayadata.io/openebs/steps-to-deploy-angular-application-on-kubernetes
# Stage 0: build with node.js
ARG APPID_CLIENT_ID
ARG APPID_DISCOVERY_ENDPOINT
FROM node:13.10.1 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG env=production
RUN npm run build -- --output-path=./dist/out --configuration $env

# Stage 1: nginx
FROM nginx:stable
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
