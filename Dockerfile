FROM node:lts AS build
COPY . /tmp/build
WORKDIR /tmp/build
COPY github.meta /tmp/build/.meta
RUN ls
RUN npm install -g pnpm meta @angular/cli
RUN pnpm install
RUN meta git update && \
    npm run build

FROM caddy:2.4.6-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /tmp/build/dist/core /srv
