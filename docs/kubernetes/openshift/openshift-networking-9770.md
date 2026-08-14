---
title: "OpenShift Networking"
---

# OpenShift Networking

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785683739770.jpeg)

</details>


## 1. Pod, Service and Machine Networks

OpenShift has 3 network types:

- **Pod Network** – Connects all pods across nodes. (`10.244.0.0/16`)
- **Service Network** – Virtual IPs for services. (`172.30.0.0/16`)
- **Machine Network** – Connects nodes to each other and to external networks. (`192.168.1.0/24`)

## 2. OpenShift SDN and OVN-Kubernetes

OpenShift supports two primary CNI network plugins:

- **SDN** – Layer 3 overlay using Open vSwitch.
- **OVN-Kubernetes** – Layer 2 overlay with OVN, better performance and scalability.

SDN uses an `ovs bridge`; OVN-Kubernetes uses an `OVN` component.

## 3. Cluster Network Operator (CNO)

- CNO manages the cluster-wide network configuration.
- Handles SDN/OVN plugin, network policies, service CIDRs, and more.
- Ensures desired state and upgrade of network plugins.

## 4. Services and Endpoints

- A Service provides a stable virtual IP (ClusterIP) for a set of pods.
- Endpoints are the actual pod IPs behind the service.

Example: `Service 10.96.1.10` → `Endpoints (Pods): 10.244.1.5, 10.244.2.7, 10.244.3.9`

## 5. Routes and Ingress

- **Route**: OpenShift native way to expose services externally via an Ingress Controller.
- **Ingress**: Kubernetes standard for HTTP/HTTPS routing.

Flow: User → Internet → Route/Ingress → Service → Pods

## 6. Edge, Passthrough and Re-encrypt Routes

- **Edge**: TLS terminated at the router (edge).
- **Passthrough**: TLS passes through to the backend (no termination at router).
- **Re-encrypt**: TLS terminated at router and re-encrypted to backend.

| Type | Flow | Use Case |
|---|---|---|
| Edge | User → Router (TLS) → Service (HTTP) | Offload TLS at router |
| Passthrough | User → Router (TLS) → Service (TLS) | End-to-end TLS |
| Re-encrypt | User → Router (TLS) → Service (TLS) | Secure backend + routing at edge |

## 7. TLS Termination

- Can be done at the router (edge) or at the backend service.
- Certificates are managed using OpenShift Ingress Controller (default) or custom certificates.

## 8. NetworkPolicies

- Control traffic flow between pods using labels.
- Default is allow all (if no policy).
- Policies are additive.
- Applied per namespace.

Example: Allow (TCP 80) Pod A (app=frontend) → Pod B (app=backend); Deny (TCP 3306).

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 80
```

## 9. DNS and Service Discovery

- OpenShift provides internal DNS (CoreDNS).
- Services are discoverable by DNS names: `<service>.<namespace>.svc.cluster.local`
- Example: `my-service.my-namespace.svc.cluster.local`

## 10. Egress Traffic

- Controls outbound traffic from pods.
- By default, pods can access external networks.
- Use NetworkPolicy or EgressFirewall (OVN-K) to restrict.
- NAT is used for outbound traffic by default.

Flow: Pod → Egress (NAT) → Internet / External Services

## 11. Multus and Secondary Networks

- Multus CNI allows attaching multiple interfaces to a pod.
- Useful for connecting to multiple networks (e.g., app network + storage network).
- Secondary networks are defined via `NetworkAttachmentDefinition`.

Example Pod interfaces:
- `eth0 (default)`: `10.244.1.5` → Pod Network
- `net1 (secondary)`: `192.168.100.5` → Secondary Network (VLAN / Storage)

## 12. Load Balancers

- Services of type LoadBalancer expose services externally.
- Cloud platforms provision external/cloud load balancers.
- On-prem: MetalLB or other load balancer solutions.

Users → Internet → Load Balancer (Cloud/MetalLB) → Service A, Service B, Service C

## Troubleshooting Connectivity

- Check pod status: `oc get pods -o wide`
- Check services/endpoints: `oc get svc`, `oc get endpoints`
- Check routes: `oc get routes`
- Check DNS: `oc exec -it <pod> -- nslookup my-service`
- Check network policies: `oc get networkpolicy`
- Check network logs:
  - `oc logs -n openshift-sdn | less` (SDN)
  - `oc logs -n openshift-ovn-kubernetes | less` (OVN-K)
- Use tools: `ping`, `curl`, `traceroute`, `tcpdump`, `oc debug node/<node>`
- Common issues: wrong labels/selectors, firewall rules, DNS issues, policies denied.

## Key Ports

- DNS (TCP/UDP): 53
- HTTP: 80
- HTTPS: 443
- OVN Northbound: 6641
- Geneve (OVN): 6081
- VXLAN (SDN): 4789

## Important CIDRs (Default)

- Pod Network: `10.244.0.0/16`
- Service Network: `172.30.0.0/16`
- Machine Network: `192.168.1.0/24`
- (Customizable during installation)

## SDN vs OVN-K

| | SDN | OVN-K |
|---|---|---|
| Layer | Layer 3 Overlay | Layer 2 Overlay |
| Tech | Open vSwitch | Better Performance |
| Notes | Simpler | Scalable |

**Remember:** Good network design ensures security, performance, and high availability!
