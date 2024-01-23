FROM node:20.8 AS build
ARG OIDC_AUTHORITY
ARG OIDC_CLIENT_ID
ARG MOD_BRANCH
COPY . /tmp/build
WORKDIR /tmp/build
COPY github.meta /tmp/build/.meta
RUN ls
RUN npm install -g pnpm meta @angular/cli
RUN pnpm install
RUN meta git update && \
    meta git checkout ${MOD_BRANCH:-main} && \
    npm run build

FROM caddy:2.4.6-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /tmp/build/dist/core /srv
LABEL org.opencontainers.image.source=https://github.com/wisdom-oss/frontend-workspace