FROM node:18-alpine3.18@sha256:4bdb3f3105718f0742bc8d64bb4e36e8f955ebbee295325e40ae80bc8ef78833
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY build/ ./
CMD [ "node", "." ]
