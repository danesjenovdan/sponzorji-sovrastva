# start with the nodejs image, calling it 'build'
FROM node:14-alpine
EXPOSE 7331

# install node modules
COPY pokrovitelji/package.json pokrovitelji/package-lock.json /pokrovitelji/
COPY server/package.json server/package-lock.json /server/

WORKDIR /pokrovitelji
RUN npm install
WORKDIR /server
RUN npm install

# build assets
WORKDIR /pokrovitelji
COPY pokrovitelji .
RUN npm run build

# start server
WORKDIR /server
COPY server .
CMD ["node", "server.js"]