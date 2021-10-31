FROM node:14
LABEL version="1.0"
LABEL description="This is the base docker image for the Tweeter clone  frontend react app."
LABEL maintainer = ["kunalahirrao@outlook.com"]
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
EXPOSE 3002
CMD ["npm", "run","start"]