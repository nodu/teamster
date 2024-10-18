FROM node:22-alpine AS ui-builder

WORKDIR /app

COPY ui/package.json ui/package-lock.json ./
RUN npm install

COPY ui/ /app

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=ui-builder /app/dist /app/dist
COPY --from=ui-builder /app/node_modules /app/node_modules
COPY --from=ui-builder /app/package.json /app/package.json

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
