---
title: "Kubernetes Services"
---

# Kubernetes Services

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785222440346.jpeg)

</details>


A Service provides a stable network address to access a group of Pods. It uses labels and selectors to route traffic to the correct Pods.

## 1. What is a Kubernetes Service?

- Provides a stable network address for accessing a group of Pods.
- Pods are dynamic. Their IPs can change when they are created, deleted, or replaced.
- Service uses labels and selectors to route traffic to the correct Pods.

**Flow:** User / Application -> Kubernetes Service -> Pod 1, Pod 2, Pod 3

## 2. Main Service Types

1. **ClusterIP** — Default Service type. Accessible only inside the cluster. Used for internal communication.
2. **NodePort** — Exposes the application on a port on every worker node (usually 30000–32767). Useful for testing and small environments.
3. **LoadBalancer** — Creates an external load balancer. Common in cloud environments. Routes external traffic to Pods.
4. **ExternalName** — Maps a Service name to an external DNS name. Useful for connecting to external databases or APIs.
5. **Headless Service** — Set `clusterIP: None`. No single virtual IP. DNS returns individual Pod IPs. Used for StatefulSets, databases, and pod discovery.

## 3. Example Service YAML

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: ClusterIP
```

**Explanation:**
1. `apiVersion: v1` — Uses core API.
2. `kind: Service` — Resource type.
3. `metadata.name` — Service name.
4. `selector` — Sends traffic to Pods with label `app: backend`.
5. `port: 80` — Port exposed by Service.
6. `targetPort: 8080` — Port where app runs inside Pod.
7. `type: ClusterIP` — Accessible only inside the cluster.

## 4. How Traffic Flows

```
Client -> Service IP:80 -> Pod IP:8080, Pod IP:8080, Pod IP:8080
```

Service selects Pods using labels (`app: backend`).

## 5. Service Type Diagrams

| Type | Access Path | Notes |
|------|-------------|-------|
| ClusterIP (Internal) | Client -> ClusterIP Service -> Pods | Accessible only inside the cluster |
| NodePort (External via Node Port) | Client -> NodePort Service -> Pods | Access via NodeIP:NodePort |
| LoadBalancer (External via Load Balancer) | Internet -> LoadBalancer Service -> Pods | Access via Cloud Load Balancer |
| ExternalName (External DNS) | Service Name -> DNS Name -> External Database / API | Maps to external DNS |
| Headless (No Cluster IP) | Client -> Headless Service -> Pod IP, Pod IP, Pod IP | DNS returns individual Pod IPs |

## 6. Quick Summary

| Service Type | Main Purpose |
|---|---|
| ClusterIP | Internal cluster communication |
| NodePort | Expose through worker-node ports |
| LoadBalancer | Expose externally using a load balancer |
| ExternalName | Connect to an external DNS address |
| Headless | Direct Pod discovery |

## 7. Key Takeaways

- Services provide stable networking for dynamic Pods.
- Use appropriate Service type based on requirement.
- Labels and selectors are the key to routing traffic.
- Services enable service discovery, load balancing, and high availability.
