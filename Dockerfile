FROM node:6.10.3-slim

# create application dir
RUN mkdir -p /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app

# install dependecies
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
