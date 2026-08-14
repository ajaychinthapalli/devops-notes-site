---
title: "Grafana Cheat Sheet"
---

# Grafana Cheat Sheet

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785518811956.jpeg)

</details>


The Complete Quick Reference Guide

## 1. What is Grafana?

Grafana is an observability and visualization platform, used to query, explore, visualize and alert on metrics, logs, traces and other data.

**Data Sources:** Prometheus (Metrics), Loki (Logs), Tempo (Traces), SQL/NoSQL, CloudWatch, and more...

**Use Cases:** Dashboards, Explore, Alerts, Reports, Annotations

## 2. Core Components

- **Data Source** — System from which data is retrieved
- **Dashboard** — Collection of related panels
- **Panel** — Single query + visualization
- **Visualization** — Graphical representation of data
- **Variable** — Dynamic dashboard value `{x}`
- **Transformation** — Reshapes query results
- **Explore** — Interactive troubleshooting workspace
- **Alert Rule** — Evaluates data against a condition
- **Contact Point** — Notification destination
- **Notification Policy** — Routes and groups alerts

## 3. Data Sources

Prometheus (Metrics), Loki (Logs), Tempo (Traces), PostgreSQL (SQL), MySQL (SQL), CloudWatch (AWS)

**Flow:** Panel Query -> Data Source -> Transform -> Visualization

## 4. Common Visualizations

- Time Series — Trends over time
- Stat — Single value
- Gauge — Value with thresholds
- Bar Gauge — Compare values
- Table — Rows and columns
- Heatmap — Density/distribution
- Histogram — Value distribution
- Logs — Log messages
- State Timeline — State changes
- Status History — Health over time
- Pie Chart — Proportion
- Geomap — Geographic data
- Node Graph — Relationships

## 5. Prometheus Queries in Grafana

```promql
up
up == 0
sum by(service)(rate(http_requests_total[5m]))
100 * sum by(service)(rate(http_requests_total{status=~"5.."}[5m])) / sum by(service)(rate(http_requests_total[5m]))
100 * (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[5m])))
100 * (1 - node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)
histogram_quantile(0.95, sum by(le)(rate(http_request_duration_seconds_bucket[5m])))
```
- Target availability: `up`
- Failed targets: `up == 0`
- Requests per second: `sum by(service)(rate(http_requests_total[5m]))`
- HTTP error percentage
- CPU usage
- Memory usage
- P95 latency

## 6. Variables

Variables make dashboards dynamic and reusable. Example: `$environment`, `$cluster`, `$namespace`, `$service`, `$instance`

**Example Query:**
```promql
rate(http_requests_total{environment="$environment", service="$service"}[5m])
```

**Prometheus Variable Examples:**
- Job: `label_values(up, job)`
- Instance: `label_values(up{job="$job"}, instance)`
- Namespace: `label_values(kube_namespace_created, namespace)`
- Service: `label_values(http_requests_total{namespace="$namespace"}, service)`

Dependency: namespace -> service -> instance

**Variable Types:** Query, Custom, Text box, Constant, Data source, Interval, Switch

## 7. Built-in Time Variables

- `$__from` — Start of selected time range
- `$__to` — End of selected time range
- `$__range` — Entire selected range
- `$__interval` — Calculated interval for queries
- `$__rate_interval` — Recommended rate window

**Prometheus example:** `rate(http_requests_total[$__rate_interval])`

**SQL example:**
```sql
SELECT $__timeGroupAlias(created_at, $__interval), COUNT(*) AS value
FROM requests
WHERE $__timeFilter(created_at)
GROUP BY 1 ORDER BY 1;
```

## 8. Transformations (After data is returned)

- Reduce
- Filter fields
- Organize fields
- Group by
- Add field from calculation
- Labels to fields
- Rename by regex
- Rows to fields
- Join by field
- Sort by
- Merge series
- Convert field type

**Example - Reduce:** Input: 20, 25, 30, 40 -> Last: 40, Mean: 28.75, Max: 40

**Add field from calculation example:** Error % = error_requests / total_requests × 100

## 9. Annotations, Links & Others

- **Annotations** — Mark important events on graphs (Deployments, Changes, Incidents)
  - Sources: Manual, Data source, Alerts, External systems
- **Dashboard Links** — Navigate to other dashboards / URLs
- **Data Links** — Link a value to another context (Example: Click value -> Open logs for that service)
- **Explore** — Test queries (PromQL, LogQL, SQL); Inspect metrics, logs, traces; Compare queries; Add results to dashboard
- **Provisioning (As Code)** — Provision data sources & dashboards via YAML files; Store in Git for GitOps

## 10. Alerting

- Query
- Expression / Reduce
- Threshold Condition
- Alert Instance
- Alerting Policy
- Contact Point

**Alert States:** Normal (Condition is false), Pending (Condition is true, waiting), Alerting (Condition remains true), Recovering (Condition cleared), No Data (No usable data), Error (Evaluation failed)

**Contact Points:** Email, Slack, Teams, PagerDuty, Webhook

**Notification Policies:** severity="critical" -> PagerDuty; team="payments" -> Slack #payments; environment="dev" -> Email logs

## 11. Best Practices

- Keep dashboards focused
- Use consistent units & titles
- Use variables, avoid duplicates
- Add thresholds & meaningful colors
- Link to logs, traces and runbooks
- Avoid excessive refresh rates

## Dashboard Layout Suggestion

- Top Row: Health / KPIs
- Middle: Traffic / Errors / Latency
- Bottom: Infra / Details / Debug

## 12. Common Issues (Quick Checks)

- No data -> Check query, time range, variables, datasource
- Slow dashboard -> Reduce queries, high cardinality, high range
- Gaps in graph -> Check data, scrape, interval, null handling
- Variables empty -> Check query, regex, parent variable
- Alert not firing -> No variables in alert query, permissions

## Quick Memory Formula

Data -> Query -> Transform -> Panel -> Dashboard -> Variable -> Alert -> Explore -> Provisioning

## Most Useful Workflow

1. Connect Data Source
2. Test in Explore
3. Create Panel
4. Select Visualization
5. Configure & Thresholds
6. Add Data Source (as needed)
7. Create Dashboard
8. Setup Alerts
9. Send Notifications
