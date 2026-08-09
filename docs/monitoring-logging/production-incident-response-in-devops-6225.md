---
title: "Production Incident Response in DevOps"
---

# Production Incident Response in DevOps

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786092106225.jpeg)

</details>


## Incident Lifecycle

| Stage | Action | Goal |
|---|---|---|
| Detect | Monitoring or users identify a problem | Find the issue fast |
| Alert | On-call engineer receives notification | Start response quickly |
| Triage | Determine severity, impact, affected services | Understand scope |
| Investigate | Check logs, metrics, traces, deployments | Find likely cause |
| Mitigate | Rollback, scaling, failover, config fix | Reduce impact fast |
| Recover | Restore normal production service | Bring system back |
| Validate | Confirm health and user experience | Ensure stable recovery |
| Postmortem | Root cause + preventive actions | Prevent recurrence |

## 1) Detect & Alert

Flow: Prometheus → Alertmanager → PagerDuty / Slack / Email → On-Call Engineer

**Typical symptoms:**
- HTTP 5XX increasing
- CPU > 90%
- Memory pressure
- Pods restarting
- Database latency
- Queue backlog
- App unavailable

Good alerts answer: What failed? Where? How severe? When did it start?

## 2) Severity

- **SEV-1:** Critical outage affecting most users
- **SEV-2:** Major degradation affecting part of the system
- **SEV-3:** Minor issue with limited impact

## 3) Triage Questions

- What changed recently?
- Which services are affected?
- When did the problem begin?
- Is it getting worse?
- Are all users affected?
- Is the database healthy?
- Did a recent deployment cause it?

**What changed immediately before the incident?**
- Recent deployment
- Config change
- Infra change
- DB migration
- Dependency failure
- Traffic spike
- Certificate expiry
- DNS issue

## 4) Kubernetes Production Checks

```bash
kubectl get pods -A
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl logs <pod-name> --previous
kubectl get deployments
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl top pods
```

## 5) Investigate with Observability

**Three pillars of observability:** Metrics, Logs, Traces

- **Metrics:** CPU, Memory, Request rate, Error rate, Latency, Disk, Network
- **Logs:** ERROR, FATAL, Timeout, Connection refused, OutOfMemory, CrashLoopBackOff, 503, 500
- **Traces:** User → API Gateway → Frontend → Order Service → Payment Service → Database

## 6) Mitigate & Recover

Restore service first. RCA can continue afterward.

- Rollback
- Restart deployment
- Scale application
- Failover
- Disable faulty feature
- Reconfigure
- Increase resources
- Route traffic away from unhealthy instances (Primary Region ✗ → Secondary Region ✓)

```bash
kubectl rollout undo deployment/my-app
kubectl rollout restart deployment/my-app
kubectl scale deployment my-app --replicas=10
```

## 7) Validate Recovery

- Error rate down
- Latency normal
- CPU normal
- Memory stable
- Pods healthy
- Database healthy
- User requests successful

```bash
kubectl get pods
kubectl get deployment
kubectl rollout status deployment/my-app
```

**Note:** Never assume recovery succeeded only because deployment succeeded — verify actual user experience.

## 8) Incident Roles

- **Incident Commander** — coordinates, decides, assigns tasks
- **Technical Lead** — investigates and fixes
- **Communications Lead** — updates customers, management, support, stakeholders
- **Scribe** — records timeline, actions, decisions, observations

## 9) Communication

Example timeline:
- 14:05 Alert triggered
- 14:08 On-call investigating
- 14:12 Payment API unhealthy
- 14:16 Recent deployment suspected
- 14:20 Deployment rolled back
- 14:24 Error rate improving
- 14:30 Service fully restored

Keep updates short and factual.

## 10) Root Cause & Postmortem

**Common root causes:**
- Bad deployment
- Incorrect config
- DB overload
- Memory leak
- Dependency outage
- Certificate expiration
- Resource exhaustion
- Networking failure
- Human error
- Missing monitoring

**Good postmortem includes:**
- Incident summary
- Customer impact
- Timeline
- Root cause
- Resolution
- Corrective actions

**Example:**
- Incident: Checkout API outage
- Impact: 35% of checkout requests failed
- Root Cause: New release caused DB connection exhaustion
- Resolution: Rolled back deployment
- Preventive Actions: Add connection-pool monitoring, load testing, automatic rollback, better deployment validation

## Golden Rule

Restore first → Investigate deeply → Learn → Improve

Flow: Alert → Acknowledge → Assess → Triage → Investigate → Mitigate → Restore → Validate → Postmortem → Prevent Recurrence

**MTTD** = Mean Time To Detect, **MTTA** = Mean Time To Acknowledge, **MTTR** = Mean Time To Restore/Recover

Better monitoring, observability, automation, runbooks, rollback strategy, and communication reduce MTTR.
