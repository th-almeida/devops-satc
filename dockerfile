# Etapa de build: Node só aqui (não entra na imagem final do Trivy)
FROM node:20-alpine AS builder

WORKDIR /app

COPY gremio-page/package.json gremio-page/package-lock.json ./
RUN npm ci

COPY gremio-page/ ./
RUN npm run build

# Imagem final: só Nginx + arquivos estáticos (menos CVEs que Node em runtime)
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
