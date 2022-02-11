FROM node:lts AS build
RUN npm install -g pnpm
RUN npm install -g meta
RUN pnpm install
COPY github.meta .meta
RUN meta git update
RUN npx ng build common
RUN npx ng build example
RUN npx ng build

FROM caddy:2.4.6-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build dist/core /srv

