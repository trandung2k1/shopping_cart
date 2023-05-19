FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["node"]

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
