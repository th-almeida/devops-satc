# Etapa de build: Node só aqui (não entra na imagem final do Trivy)
FROM node:20-alpine AS builder

WORKDIR /app

COPY gremio-page/package.json gremio-page/package-lock.json ./
# --ignore-scripts evita execução de scripts de install de terceiros (supply chain)
RUN npm ci --ignore-scripts

COPY gremio-page/ ./
RUN npm run build

# Imagem final: Nginx como usuário não-root (nginxinc/nginx-unprivileged), porta 8080
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY --chown=nginx:nginx docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
