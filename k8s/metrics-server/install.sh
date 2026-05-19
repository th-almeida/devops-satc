#!/usr/bin/env bash
# Aula 10 — Metrics Server (obrigatório para o HPA ler CPU/memória)
# https://github.com/kubernetes-sigs/metrics-server
set -euo pipefail

METRICS_SERVER_VERSION="${METRICS_SERVER_VERSION:-0.7.2}"
URL="https://github.com/kubernetes-sigs/metrics-server/releases/download/v${METRICS_SERVER_VERSION}/components.yaml"

echo "Instalando Metrics Server v${METRICS_SERVER_VERSION}..."
kubectl apply -f "${URL}"

echo "Aguardando deployment ficar disponível..."
kubectl rollout status deployment/metrics-server -n kube-system --timeout=3m

echo "Verificando métricas dos nodes..."
kubectl top nodes

echo "Metrics Server instalado. O HPA (app-satc-hpa) pode usar métricas de CPU."
