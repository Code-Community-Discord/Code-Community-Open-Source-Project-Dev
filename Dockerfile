FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
# copies both package and package-lock.json
RUN npm install
# installs the dependencies listed in package.json
COPY . .
# copies installed files over
CMD [ "npm", "run", "dev" ]