---
title: "Kubernetes kubectl Cheat Sheet"
---

# Kubernetes kubectl Cheat Sheet

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785226449640.jpeg)

</details>


Quick reference for Kubernetes commands.

**Quick Tip:** Use `-n <namespace>` to run commands in a specific namespace.

## 1. Contexts, Clusters & Namespaces

```bash
# Show cluster information
kubectl cluster-info

# List contexts
kubectl config get-contexts

# Show current context
kubectl config current-context

# Switch context
kubectl config use-context <context>

# Set default namespace for current context
kubectl config set-context --current --namespace=<namespace>

# List namespaces
kubectl get namespaces

# Run in a specific namespace
kubectl get pods -n <namespace>

# Run across all namespaces
kubectl get pods -A
```

## 2. Discover Resources

```bash
# List supported resource types
kubectl api-resources

# Explain a resource
kubectl explain deployment

# Explain a nested field
kubectl explain deployment.spec.template.spec.containers

# Display API versions
kubectl api-versions
```

## 3. View Resources

```bash
# List common resources
kubectl get pods, deployments, services, nodes, ingress, configmaps, secrets

# Show additional columns
kubectl get pods -o wide

# Watch for changes
kubectl get pods -w

# Filter by label
kubectl get pods -l app=web

# Show labels
kubectl get pods --show-labels

# View YAML or JSON
kubectl get pod <pod> -o yaml
kubectl get pod <pod> -o json

# Describe a resource
kubectl describe pod <pod>
```

## 4. Create & Apply Resources

```bash
# Apply a manifest
kubectl apply -f manifest.yaml

# Apply all manifests in a directory
kubectl apply -f ./kubernetes/

# Preview changes
kubectl diff -f manifest.yaml

# Create a deployment
kubectl create deployment web --image=nginx

# Generate YAML without creating
kubectl create deployment web \
  --image=nginx --dry-run=client -o yaml

# Create from a remote manifest
kubectl apply -f manifest-url
```

## 5. Pods

```bash
# Create a temporary pod
kubectl run test --image=busybox --restart=Never --sleep 3600

# Start an interactive temporary pod
kubectl run shell --rm -it --image=busybox \
  --restart=Never -- sh

# Delete a pod
kubectl delete pod <pod>

# Wait until a pod is ready
kubectl wait --for=condition=Ready pod/<pod> \
  --timeout=120s
```

## 6. Logs

```bash
# View pod logs
kubectl logs <pod>

# Follow logs
kubectl logs -f <pod>

# Logs from a specific container
kubectl logs <pod> -c <container>

# Logs from previous instance
kubectl logs <pod> --previous

# Logs from last hour
kubectl logs <pod> --since=1h

# Last 100 lines
kubectl logs <pod> --tail=100

# Logs from pods matching a label
kubectl logs -l app=web --all-containers=true
```

## 7. Execute Commands & Copy Files

```bash
# Open a shell
kubectl exec -it <pod> -- sh

# Bash, when available
kubectl exec -it <pod> -- bash

# Specific container
kubectl exec -it <pod> -c <container> -- sh

# Execute one command
kubectl exec <pod> -- env

# Copy local file into a pod
kubectl cp ./file.txt <pod>:/tmp/file.txt

# Copy file from a pod
kubectl cp <pod>:/tmp/file.txt ./file.txt
```

## 8. Deployments & Rollouts

```bash
# Create a deployment
kubectl create deployment web --image=nginx:latest

# Scale a deployment
kubectl scale deployment/web --replicas=5

# Set container image
kubectl set image deployment/web nginx=nginx:1.27

# Restart a deployment
kubectl rollout restart deployment/web

# Check rollout status
kubectl rollout status deployment/web

# View rollout history
kubectl rollout history deployment/web

# Undo the latest rollout
kubectl rollout undo deployment/web

# Undo to a specific revision
kubectl rollout undo deployment/web --to-revision=2

# Pause or resume a rollout
kubectl rollout pause deployment/web
kubectl rollout resume deployment/web
```

## 9. Services & Networking

```bash
# List services
kubectl get services

# Expose a deployment
kubectl expose deployment web \
  --port=80 --target-port=8080 --type=ClusterIP

# Port-forward to a pod
kubectl port-forward pod/<pod> 8080:80

# Port-forward to a service
kubectl port-forward service/<service> 8080:80

# Test service DNS from a temp pod
kubectl run curl-test --rm -it --image=busybox \
  --restart=Never -- nslookup <service>

# Test an HTTP endpoint
kubectl run curl-test --rm -it --image=curlimages/curl \
  --restart=Never -- curl http://<service>:<port>
```

## 10. ConfigMaps & Secrets

```bash
# Create ConfigMap from literals
kubectl create configmap app-config \
  --from-literal=MODE=production \
  --from-literal=LOG_LEVEL=info

# Create ConfigMap from a file
kubectl create configmap app-config --from-file=config.properties

# Create Secret from literals
kubectl create secret generic app-secret \
  --from-literal=username=admin \
  --from-literal=password=example

# Create TLS Secret
kubectl create secret tls app-tls --cert=tls.crt --key=tls.key

# Decode one Secret value
kubectl get secret app-secret \
  -o jsonpath='{.data.password}' | base64 --decode; echo
```

## 11. Labels & Annotations

```bash
# Add or update a label
kubectl label pod <pod> environment=production --overwrite

# Remove a label
kubectl label pod <pod> environment-

# Add or update an annotation
kubectl annotate deployment/web \
  owner=platform-team --overwrite

# Remove an annotation
kubectl annotate deployment/web owner-
```

## 12. Resource Usage

```bash
# Node CPU & memory usage
kubectl top nodes

# Pod CPU & memory usage
kubectl top pods

# Across all namespaces
kubectl top pods -A

# Include containers
kubectl top pod <pod> --containers
```

Note: `kubectl top` requires a metrics provider such as Metrics Server.

## 13. Troubleshooting

```bash
# Inspect a pod on error
kubectl get pod <pod>

# List recent cluster events
kubectl get events \
  --sort-by='.lastTimestamp'

# Describe a resource
kubectl describe pod <pod>

# View pods on a node
kubectl get pods -o wide --field-selector spec.nodeName=<node>

# Inspect (behind services) endpoints
kubectl get endpoints

# Check resource requests & limits
kubectl get pod <pod> \
  -o jsonpath='{.spec.containers[*].name}{"\t"}{.spec.containers[*].resources}'

# Start an ephemeral debugging container
kubectl debug <pod> -it --image=busybox --target=<container>
```

## 14. Nodes

```bash
# List nodes
kubectl get nodes -o wide

# Inspect a node
kubectl describe node <node>

# Prevent new pods from being scheduled
kubectl cordon <node>

# Allow scheduling again
kubectl uncordon <node>

# Safely evict workloads
kubectl drain <node> \
  --ignore-daemonsets --delete-emptydir-data
```

## 15. Edit, Patch & Replace

```bash
# Edit a live resource
kubectl edit deployment/web

# Patch replica count
kubectl patch deployment/web \
  --type=merge -p '{"spec":{"replicas":3}}'

# Replace from a manifest
kubectl replace -f manifest.yaml
```

Prefer managing production resources through version-controlled manifests rather than live edits.

## 16. Delete Resources

```bash
# Delete one resource
kubectl delete deployment web

# Delete resources from a manifest
kubectl delete -f manifest.yaml

# Delete by label
kubectl delete pods -l app=web

# Delete a namespace and everything in it
kubectl delete namespace <namespace>

# Emergency-only forced deletion
kubectl delete pod <pod> --grace-period=0 --force
```

## 17. Output Formatting & JSONPath

```bash
# Print only resource names
kubectl get pods -o custom-columns='NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName'

# Check pod images
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[*].image}{"\n"}{end}'

# Print pod images per line
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.image}{","}{end}{"\n"}{end}'
```

## 18. Useful Shell Aliases

```bash
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kgd='kubectl get deployments'
alias kd='kubectl describe pod'
alias kl='kubectl logs'
alias kx='kubectl exec -it'

# Enable Bash completion
source <(kubectl completion bash)
complete -o default -F __start_kubectl k

# Enable Zsh completion
source <(kubectl completion zsh)
```

## 19. Fast Daily Workflow

1. `kubectl config use-context <context>`
2. `kubectl config set-context --current --namespace <namespace>`
3. `kubectl get pods`
4. `kubectl describe pod <problem-pod>`
5. `kubectl logs <problem-pod> --sort-by='.lastTimestamp'`
6. `kubectl exec -it <problem-pod> -- sh`
