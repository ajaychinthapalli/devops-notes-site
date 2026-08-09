---
title: "Kubernetes RBAC Explained"
---

# Kubernetes RBAC Explained

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785765230466.jpeg)

</details>


(Using Simple Examples)

## What is RBAC?

RBAC (Role-Based Access Control) is a Kubernetes security mechanism that controls who can do what inside a cluster.

Instead of giving everyone full access, RBAC grants only the permissions they need.

**Real-World Analogy:** Company HQ building.
- **Manager** → Can access every department
- **Developer** → Can access only the development floor
- **HR** → Can access only HR records
- **Visitor** → Can enter the reception area only

Everyone has different permissions based on their role.

## RBAC Components

**RBAC Architecture:** User/ServiceAccount → RoleBinding/ClusterRoleBinding → Role/ClusterRole → Kubernetes Resources

### 1. Role

A Role defines what actions are allowed within a single namespace.

```yaml
kind: Role
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list"]
```

**Analogy:** A job description that says, "Developers can view application logs."

### 2. ClusterRole

A ClusterRole defines permissions across the entire cluster.

**Examples:**
- View all nodes
- Manage namespaces
- Read cluster-wide resources

**Analogy:** A regional manager who can visit every branch of a company.

### 3. RoleBinding

A RoleBinding assigns a Role to a User, Group, or ServiceAccount within a namespace.

Example: Developer → Read Pods → dev namespace

**Analogy:** Giving an employee an access card for the Development department only.

### 4. ClusterRoleBinding

A ClusterRoleBinding assigns a ClusterRole across the whole cluster.

Example: Admin → Full Cluster Access

**Analogy:** Issuing a master key that opens every office in the company.

## Simple Examples

### 1. Developer Can Only View Pods

User: developer
- Can: `get pods`, `list pods`
- Cannot: `delete pods`, `create deployments`

**Result:** The developer can see Pods but cannot modify them.

### 2. DevOps Engineer

- Create Deployments
- Update Services
- Restart Pods
- Read Logs

The DevOps engineer can manage applications but may not have cluster administration privileges.

### 3. Cluster Administrator

ClusterRole: Everything
- Manage Nodes
- Create Namespaces
- Install Controllers
- Manage RBAC
- Delete Resources

## Common Verbs

| Verb | Meaning |
|---|---|
| get | View one resource |
| list | View all resources |
| watch | Monitor changes |
| create | Create resources |
| update | Modify resources |
| patch | Partially update resources |
| delete | Remove resources |

## Common Resources

| Resource | Description |
|---|---|
| Pods | Application containers |
| Deployments | Manage Pods |
| Services | Networking |
| ConfigMaps | Configuration |
| Secrets | Sensitive data |
| Namespaces | Resource isolation |

## Useful Commands

```bash
kubectl get roles
kubectl get rolebindings
kubectl get clusterroles
kubectl get clusterrolebindings
kubectl describe role <role-name>
kubectl auth can-i create pods
kubectl auth can-i delete deployments
```

## Best Practices

- Follow the Principle of Least Privilege (grant only the permissions required).
- Prefer Role over ClusterRole whenever possible.
- Use ServiceAccounts for applications instead of default credentials.
- Avoid granting cluster-admin unless absolutely necessary.
- Review and audit RBAC permissions regularly.

## Interview Tips

- RBAC stands for Role-Based Access Control.
- Role → Namespace-level permissions.
- ClusterRole → Cluster-wide permissions.
- RoleBinding → Assigns a Role.
- ClusterRoleBinding → Assigns a ClusterRole cluster-wide.
- `kubectl auth can-i` is the quickest way to verify permissions.

## Quick Revision Checklist

- RBAC → Controls access to Kubernetes resources
- Role → Namespace permissions
- ClusterRole → Cluster-wide permissions
- RoleBinding → Assigns a Role to a user/service account
- ClusterRoleBinding → Assigns a ClusterRole cluster-wide
- Principle of Least Privilege → Give minimum required access
- `kubectl auth can-i` → Check user permissions
