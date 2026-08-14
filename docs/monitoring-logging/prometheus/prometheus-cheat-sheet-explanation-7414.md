---
title: "Prometheus Cheat Sheet Explanation"
---

# Prometheus Cheat Sheet Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785488897414.jpeg)

</details>


## 1. What is Prometheus?

- Open-source monitoring and alerting system
- Collects time-series metrics from apps, servers, containers, databases, Kubernetes
- Pull model: scrapes /metrics endpoints
- Data is queried with PromQL and visualized in Grafana

## 2. Architecture

**Flow:** Targets/App (/metrics) -> Prometheus Server -> PromQL/Rules -> Grafana + Alertmanager

- Exporters expose metrics
- Pushgateway for short-lived jobs
- Alertmanager sends notifications

## 3. Metric Format

```
http_requests_total{method='GET', status='200'} 15240
```
- `http_requests_total` = metric name
- `{method='GET', status='200'}` = labels
- `15240` = value

## 4. Metric Types

- **Counter** — only increases; use rate()/increase()
- **Gauge** — goes up or down
- **Histogram** — buckets + _sum + _count; use histogram_quantile()
- **Summary** — quantiles from app, hard to aggregate

## 5. Important Labels

- **job** = group of targets
- **instance** = single target
- **namespace** = Kubernetes namespace
- **pod** = Kubernetes pod

## 6. Basic PromQL

```promql
up
up == 0
rate(http_requests_total[5m])
increase(http_requests_total[1h])
sum by(service)(rate(http_requests_total[5m]))
topk(5, node_load1)
histogram_quantile(0.95, sum by(le)(rate(http_request_duration_seconds_bucket[5m])))
```

## 7. Linux / Server Queries

- CPU % = 100 - idle
- Memory % = 1 - available/total
- Filesystem usage %
- Network rx/tx rate
- Disk read/write rate

## 8. HTTP / App Monitoring

- Requests per second
- 5xx error rate
- Error %
- Average response time
- P95 / P99 latency

## 9. Alerting + Recording Rules

- Alert rule: expr + for + labels + annotations
- Example: `InstanceDown when up==0 for 5m`
- Recording rules save expensive queries as new metrics

## 10. Troubleshooting

- Target DOWN -> check /metrics, port, firewall, auth, TLS
- No data -> verify metric name and labels
- rate() odd -> ensure metric is a counter
- Avoid high-cardinality labels: user_id, email, request_id, UUID

## Golden Signals

- Latency
- Traffic
- Errors
- Saturation

## 12. Quick Memory Formula

| Concept | Formula/Action |
|---|---|
| Counter | rate() / increase() |
| Gauge | direct query |
| Histogram | histogram_quantile() |
| Labels | filter / group |
| Prometheus | scrape & store |
| Grafana | visualize |
| Alertmanager | notify |
