# start with the nodejs image, calling it 'build'
FROM node:14-alpine AS build

WORKDIR /pokrovitelji
COPY pokrovitelji/package.json pokrovitelji/yarn.lock ./
RUN yarn

COPY pokrovitelji .
RUN yarn build

FROM node:26-alpine

# install tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

# copy built files (and config/json needed for server)
COPY --from=build /pokrovitelji/dist /pokrovitelji/dist
COPY --from=build /pokrovitelji/public /pokrovitelji/public
COPY --from=build /pokrovitelji/vue.config.js /pokrovitelji/vue.config.js
COPY --from=build /pokrovitelji/src/assets/razglednice.json /pokrovitelji/src/assets/razglednice.json

WORKDIR /server
COPY server/package.json server/package-lock.json ./
RUN npm ci

COPY server .
EXPOSE 7001

CMD ["node", "server.js"]
