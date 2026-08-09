---
title: "Terraform Code to Create an AWS EC2 Instance"
---

# Terraform Code to Create an AWS EC2 Instance

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785766262337.jpeg)

</details>


## What this project does

This Terraform project creates an AWS EC2 instance and a Security Group, using reusable variables and outputs.

Flow: Terraform Code → AWS Cloud → EC2 Instance

## Project Structure

```
terraform-ec2/
├── main.tf
├── variables.tf
├── outputs.tf
├── provider.tf
└── terraform.tfvars
```

## Terraform Files Explained

### 1. provider.tf

```hcl
terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}
```

- Configures Terraform and AWS provider
- Region is taken from a variable

### 2. variables.tf

```hcl
variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "ami_id" {
  description = "Amazon Machine Image ID"
  type        = string
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "SSH Key Pair Name"
  type        = string
}

variable "instance_name" {
  description = "EC2 Name Tag"
  type        = string
  default     = "terraform-ec2"
}
```

- Variables make the code reusable
- Defaults can be overridden in `terraform.tfvars`

### 3. main.tf

```hcl
resource "aws_security_group" "ec2_sg" {
  name        = "terraform-ec2-sg"
  description = "Allow SSH access"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["YOUR_PUBLIC_IP/32"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "terraform-ec2-sg"
  }
}

resource "aws_instance" "ec2" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]

  tags = {
    Name        = var.instance_name
    Environment = "Dev"
    ManagedBy   = "Terraform"
  }
}
```

- Creates a Security Group for SSH
- Creates an EC2 instance
- Replace `YOUR_PUBLIC_IP/32` with your own public IP in production

### 4. outputs.tf

```hcl
output "instance_id" {
  value = aws_instance.ec2.id
}

output "public_ip" {
  value = aws_instance.ec2.public_ip
}

output "public_dns" {
  value = aws_instance.ec2.public_dns
}
```

- Outputs show useful resource details after apply

### 5. terraform.tfvars

```hcl
aws_region    = "us-east-1"
ami_id        = "ami-xxxxxxxxxxxxxxxxx"
instance_type = "t3.micro"
key_name      = "my-keypair"
instance_name = "web-server"
```

Replace `ami-xxxxxxxxxxxxxxxxx` with a valid AMI for your AWS Region.

## Deployment Flow

1. `terraform init`
2. `terraform fmt`
3. `terraform validate`
4. `terraform plan`
5. `terraform apply`
6. `terraform destroy`

## Deploy Commands

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
terraform destroy
```

## Production Best Practices

- Store Terraform state remotely (for example, in an S3 backend) and use a lock mechanism such as DynamoDB if applicable.
- Restrict SSH access to your own public IP instead of `0.0.0.0/0`.
- Use IAM roles for EC2 instead of embedding AWS credentials.
- Tag all resources consistently (Environment, Project, Owner, CostCenter).
- Keep reusable code in Terraform modules.
- Pin provider versions to avoid unexpected changes.

## Interview Tips

- `provider` → Configures the AWS provider.
- `resource` → Creates AWS infrastructure.
- `variables` → Makes the configuration reusable.
- `outputs` → Exposes important resource information.
- `terraform plan` previews changes before deployment.
- `terraform apply` creates or updates infrastructure.
- `terraform destroy` removes managed infrastructure.

## Quick Revision Checklist

- `provider.tf` → AWS provider configuration
- `variables.tf` → Input variables
- `main.tf` → EC2 + Security Group resources
- `outputs.tf` → Instance ID, Public IP, DNS
- `terraform init` → Initialize project
- `terraform plan` → Preview changes
- `terraform apply` → Deploy infrastructure
- `terraform destroy` → Delete infrastructure
