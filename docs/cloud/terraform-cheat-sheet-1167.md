---
title: "Terraform Cheat Sheet"
---

# Terraform Cheat Sheet

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785225101167.jpeg)

</details>


Infrastructure as Code (IaC) Tool

**Workflow:** Write -> Plan -> Apply (`.tf` -> WRITE -> PLAN -> APPLY)

## 1. Essential CLI Commands

| Command | Description |
|---|---|
| `terraform init` | Initialize working directory |
| `terraform plan` | Preview changes |
| `terraform apply` | Apply changes |
| `terraform destroy` | Destroy infrastructure |
| `terraform fmt` | Format configuration files |
| `terraform validate` | Validate configuration |
| `terraform output` | Show output values |
| `terraform console` | Open console for expressions |
| `terraform state list` | List resources in state |
| `terraform import <addr> <id>` | Import existing resource |

## 2. Provider Block (Example)

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}
```

Providers are Plugins — Works with AWS, Azure, GCP, and more...

## 3. Variables, Locals & Outputs

**Variable:**
```hcl
variable "env" {
  description = "Environment"
  type        = string
  default     = "dev"
}
```

**Locals:**
```hcl
locals {
  name_prefix = "${var.project}-${var.env}"
}
```

**Output:**
```hcl
output "bucket_name" {
  value = aws_s3_bucket.logs.id
}
```

Use variables for inputs, locals for reusable values, outputs to expose data.

## 4. Resources & Data Sources

**Resource (Create):**
```hcl
resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = "t3.micro"
}
```

**Data Source (Read):**
```hcl
data "aws_vpc" "existing" {
  default = true
}
```

Resources manage infrastructure. Data sources read existing infrastructure.

## 5. Count & For_each

**COUNT (List of similar items):**
```hcl
resource "aws_instance" "web" {
  count         = 3
  ami           = var.ami_id
  instance_type = "t3.micro"
}
# Access -> aws_instance.web[0].id
```

**FOR_EACH (Map or Set):**
```hcl
resource "aws_s3_bucket" "b" {
  for_each = toset(["logs", "img", "bak"])
  bucket   = "${var.project}-${each.value}"
}
# Access -> aws_s3_bucket.b["logs"].id
```

Use `count` for identical items, `for_each` for unique keyed items.

## 6. Lifecycle Rules

```hcl
lifecycle {
  create_before_destroy = true
  prevent_destroy        = true
  ignore_changes         = [tags["UpdatedAt"]]
}
```

Protect resources and control changes.

## 7. Modules

**Call a Module:**
```hcl
module "network" {
  source      = "./modules/network"
  environment = var.environment
}
```

**Access Output:**
```hcl
module.network.vpc_id
module.network.public_subnets
```

Modules make code reusable and better organized.

## 8. State Commands

| Command | Description |
|---|---|
| `terraform state list` | List resources |
| `terraform state show <addr>` | Show resource |
| `terraform state mv <src> <dst>` | Move/Rename |
| `terraform state rm <addr>` | Remove from state |
| `terraform state pull` | Download state |
| `terraform state push` | Push state |

State maps real infrastructure to config.

## 9. Import Existing Resources

**CLI Import:**
```bash
terraform import aws_instance.web i-0123456789abcdef0
```

**Config Driven Import:**
```hcl
import {
  to = aws_instance.web
  id = "i-0123456789abcdef0"
}
```

Import brings existing infrastructure under Terraform management.

## 10. Workspaces

```bash
terraform workspace list
terraform workspace new <name>
terraform workspace select <name>
terraform workspace delete <name>
```

Workspaces help manage multiple environments with same code.

## Best Practices

- Keep state in remote backend with locking.
- Use meaningful names & consistent tags.
- Run `terraform fmt` and `validate` in CI/CD.
- Review plan before apply.
- Protect secrets with variables or secrets manager.
