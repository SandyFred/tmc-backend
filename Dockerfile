FROM node:18.14.2-bullseye-slim
RUN apt-get update && apt-get upgrade -y
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV production
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node package.json ./package.json
COPY --chown=node:node package-lock.json ./package-lock.json

RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node . .

USER node
EXPOSE 8080
CMD ["dumb-init", "node", "index.js"]

