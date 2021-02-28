# start with the nodejs image, calling it 'build'
FROM node:14-alpine
EXPOSE 7001

# install node modules
COPY pokrovitelji/package.json pokrovitelji/yarn.lock /pokrovitelji/
COPY server/package.json server/yarn.lock /server/

WORKDIR /pokrovitelji
RUN yarn
WORKDIR /server
RUN yarn

# build assets
WORKDIR /pokrovitelji
COPY pokrovitelji .
RUN yarn build

# start server
WORKDIR /server
COPY server .
CMD ["node", "server.js"]
