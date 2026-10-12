FROM node:22-alpine AS test

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm test

FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=test /app/app.js ./app.js

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('node:http').get('http://127.0.0.1:3000', (r) => { process.exit(r.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))"

EXPOSE 3000

CMD ["node", "app.js"]
