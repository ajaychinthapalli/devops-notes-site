---
title: "Declarative (Terraform) vs Imperative (Ansible)"
---

# Declarative (Terraform) vs Imperative (Ansible)

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785989570189.jpeg)

</details>


## 1. Terraform — Declarative

- You describe what the final infrastructure should look like.
- Terraform decides the actions needed to reach that desired state.
- Best for provisioning infrastructure: VPCs, VMs, databases, networks, load balancers.
- Maintains a state file and builds a dependency graph.
- Preview changes with `terraform plan` before apply.

```hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
```

**Flow:** Write config → plan → apply

## 2. Ansible — Imperative / Task-Oriented

- You define the tasks and order of operations.
- Ansible runs tasks top to bottom.
- Best for configuration management, package install, OS setup, app deployment, maintenance.
- Usually agentless and often used over SSH / WinRM / APIs.
- Modules are often idempotent, but playbooks remain order-dependent.

```yaml
- name: Install Nginx
  apt:
    name: nginx
    state: present

- name: Start Nginx
  service:
    name: nginx
    state: started
```

**Flow:** Write playbook → execute tasks → configure servers

## 3. Key Differences

| Category | Terraform | Ansible |
|---|---|---|
| Approach | Declarative | Task-oriented |
| Main question | What should exist? | What actions should run? |
| Primary use | Infrastructure provisioning | Configuration management |
| State | Maintains state file | Usually stateless / agentless |
| Execution | Dependency graph | Top-to-bottom order |
| Preview | `terraform plan` | check mode |
| Rollback | Apply earlier config | Reverse tasks / restore |
| Connection | Cloud APIs | SSH, WinRM, APIs |

## 4. How They Work Together

1. **Terraform** creates VPCs, VMs, databases, load balancers.
2. **Ansible** installs software, configures servers, deploys applications.

- Terraform builds the infrastructure.
- Ansible configures what runs inside it.

## 5. When to Use Which?

- Use Terraform when you need repeatable infrastructure provisioning.
- Use Ansible when you need server and application configuration.
- Use both together for end-to-end automation.
- Terraform = desired state of infra.
- Ansible = ordered tasks on systems.

## 6. Nuance

Ansible is not fully imperative — many modules use desired state like `state: present` or `state: started`. But playbooks are still task-oriented and order-dependent.

## Key Takeaway

Terraform builds the infrastructure. Ansible configures what runs inside it. Best results often come from using them **together**.
