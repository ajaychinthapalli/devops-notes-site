---
title: "DevOps Resources Cheat Sheet"
---

# DevOps Resources Cheat Sheet

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785930918609.jpeg)

</details>


## 1. Version Control

- **Git** – Distributed VCS
- **GitHub** – Code hosting
- **GitLab** – DevOps platform
- **Bitbucket** – Code hosting

**Common Commands:**

```bash
git init                # Initialize repo
git clone <url>          # Clone repo
git add .                # Stage changes
git commit -m "msg"      # Commit
git push                 # Push to remote
git pull                 # Pull latest changes
```

## 2. CI/CD

- Jenkins
- GitLab CI
- GitHub Actions

**Key Concepts:**
- Continuous Integration
- Continuous Delivery
- Continuous Deployment
- Pipeline as Code
- Automated Testing

## 3. Containerization

- Docker
- Kubernetes

**Key Commands (Docker):**

```bash
docker build -t image .
docker run -d -p 8080:80 image
docker ps
docker images
docker exec -it <container> sh
```

**Kubernetes Basics:**

```bash
kubectl get pods
kubectl get svc
kubectl apply -f <file.yaml>
```

## 4. Infrastructure as Code (IaC)

- Terraform
- Ansible
- AWS CloudFormation

**Key Commands (Terraform):**

```bash
terraform init
terraform plan
terraform apply
terraform destroy
```

## 5. Cloud Platforms

- AWS, Azure, GCP

**Key Services:**
- **AWS** – EC2, S3, RDS, IAM, VPC
- **Azure** – VM, Storage, AAD, AKS
- **GCP** – Compute, Storage, IAM, GKE

## 6. Monitoring & Logging

- Prometheus
- Grafana
- ELK Stack

**Key Points:**
- Monitor everything
- Centralize logs
- Set alerts & dashboards

## 7. Configuration Management

- Puppet
- Chef
- Ansible

**Use For:**
- Automate server configuration
- Ensure consistency
- Manage at scale

## 8. Networking Basics

- **IP** – Internet Protocol
- **DNS** – Domain Name System
- **HTTP/HTTPS** – Web Protocols
- **SSH** – Secure Shell
- **VPN** – Secure Connection

## 9. Useful Tools

- **Linux** – OS for DevOps
- **Bash** – Scripting
- **curl** – Transfer data
- **Postman** – API Testing
- **JMeter** – Load Testing
- **Datadog** – Monitoring

## 10. DevOps Lifecycle

Dev (Plan → Code → Build → Test) → Ops (Release → Deploy → Operate → Monitor)

- **Plan** – Requirements & Design
- **Code** – Write & Version
- **Build** – Compile & Package
- **Test** – Automated Testing
- **Release** – Prepare for Production
- **Deploy** – Deploy to Environment
- **Operate** – Run & Support
- **Monitor** – Monitor & Improve

**Remember:** Automate Everything & Monitor Always!
