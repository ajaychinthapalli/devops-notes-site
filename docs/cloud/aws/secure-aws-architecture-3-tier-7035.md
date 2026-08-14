---
title: "Secure AWS Architecture for a 3-Tier Application"
---

# Secure AWS Architecture for a 3-Tier Application

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785765697035.jpeg)

</details>


## What is a 3-Tier Architecture?

A 3-tier architecture separates an application into three layers:

- **Web Tier** (Presentation Layer) – Receives user requests.
- **Application Tier** (Business Logic) – Processes requests.
- **Database Tier** (Data Layer) – Stores application data.

**Real-World Analogy:** Bank
- Customer → Enters the bank (Web Tier)
- Bank Employee → Processes transactions (Application Tier)
- Vault → Stores money securely (Database Tier)

Customers never access the vault directly.

## VPC Design

### 1. Public Subnets

- Contain: ALB, NAT Gateway, Bastion Host (optional)
- Reason: These resources need internet connectivity.

### 2. Private Subnets

- Contain: Application Servers, ECS Tasks, EKS Worker Nodes, RDS Database
- Reason: Backend resources should not be directly accessible from the internet.

## Secure AWS Architecture (Flow)

1. Internet
2. Route 53 (DNS)
3. AWS WAF + Shield
4. Application Load Balancer (Public Subnets)
5. EC2 / ECS / EKS – Web Tier (Public Subnets)
6. Internal ALB (Private Subnets)
7. Application Tier – EC2 / ECS / EKS (Private Subnets)
8. Amazon RDS / Aurora (Private Subnets)
9. AWS Backup & Snapshots

## Security Flow

User → HTTPS → Route53 → AWS WAF → AWS Shield → ALB → Web Tier → App Tier → RDS

## Security Components

1. **Amazon Route 53**
   - DNS management
   - Health checks
   - Failover routing

2. **AWS WAF**
   - Protects against: SQL Injection, Cross-Site Scripting (XSS), Bad bots, Malicious requests.
   - Analogy: A security guard checking everyone before they enter a building.

3. **AWS Shield**
   - Provides protection against: DDoS attacks, Network-layer attacks.

4. **Application Load Balancer (ALB)**
   - SSL/TLS termination
   - Distributes traffic across multiple application instances
   - Health checks

5. **Auto Scaling Group**
   - Automatically adds servers during high traffic and removes servers during low traffic.
   - Benefits: High availability, Cost optimization.

6. **Security Groups**
   - ALB Security Group → Allow HTTPS (443) from Internet
   - Web Tier → Allow HTTPS only from ALB
   - App Tier → Allow application port only from Web Tier
   - Database → Allow MySQL (3306) only from App Tier
   - Never expose the database to the Internet.

7. **Network ACLs**
   - Provide subnet-level security.
   - Example: Block unwanted traffic; Allow only required ports.

8. **IAM**
   - Use IAM Roles instead of access keys.
   - Examples: EC2 Role, ECS Task Role, Lambda Execution Role.
   - Follow the Principle of Least Privilege.

9. **Secrets Management**
   - Store: Database passwords, API Keys, Tokens.
   - Use: AWS Secrets Manager.
   - Never hardcode credentials in your application.

10. **Database Layer**
    - Use: Amazon RDS or Aurora.
    - Multi-AZ deployment.
    - Automated backups.
    - Encryption at rest and in transit.

11. **Encryption**
    - Use: AWS KMS, EBS Encryption, RDS Encryption, S3 Encryption.
    - Always use HTTPS/TLS.

12. **Monitoring**
    - Use: Amazon CloudWatch, AWS CloudTrail, AWS GuardDuty, Amazon Inspector.
    - These services help monitor, audit, and detect threats.

13. **Logging**
    - Store logs in: CloudWatch Logs, Amazon S3.
    - Enable: ALB Access Logs, VPC Flow Logs, CloudTrail Logs.

14. **Backup and Disaster Recovery**
    - Use: AWS Backup, RDS Snapshots, Cross-Region Backup (if required).

## Best Practices

- Use Multi-AZ deployments for high availability.
- Keep application and database servers in private subnets.
- Use IAM Roles instead of long-term access keys.
- Enable encryption at rest (KMS) and TLS in transit.
- Store secrets in AWS Secrets Manager.
- Restrict Security Groups to only required ports and sources.
- Enable CloudTrail, GuardDuty, and AWS Config for auditing and threat detection.
- Regularly patch operating systems and application dependencies.

## Interview Tips

- Place only the Load Balancer (and other internet-facing components) in public subnets.
- Keep Application and Database tiers in private subnets.
- Protect internet-facing applications with AWS WAF and AWS Shield.
- Use Auto Scaling and Multi-AZ for high availability.
- Follow least privilege with IAM.
- Never expose the database directly to the internet.

## Quick Revision Checklist

- Route 53 → DNS
- AWS WAF → Web application firewall
- AWS Shield → DDoS protection
- ALB → Load balancing & SSL termination
- Auto Scaling → High availability
- Security Groups → Instance-level firewall
- IAM Roles → Secure AWS access
- Secrets Manager → Store credentials securely
- RDS Multi-AZ → Highly available database
- CloudWatch + CloudTrail + GuardDuty → Monitoring, auditing & threat detection
