FROM node:7
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /code/
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]