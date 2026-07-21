# Enterprise CI/CD Pipeline using Azure DevOps, Docker, ACR & AKS

## Overview

This project demonstrates an end-to-end CI/CD pipeline for deploying a containerized web application on Microsoft Azure. The pipeline automates the process of building Docker images, pushing them to Azure Container Registry (ACR), and deploying them to Azure Kubernetes Service (AKS) using Azure DevOps.

---

## Architecture

```
GitHub
   │
   ▼
Azure DevOps Pipeline
   │
   ├── Build Docker Image
   ├── Push to Azure Container Registry (ACR)
   └── Deploy to Azure Kubernetes Service (AKS)
                 │
                 ▼
        Portfolio Web Application
```

---

## Tech Stack

- Azure DevOps
- Azure Kubernetes Service (AKS)
- Azure Container Registry (ACR)
- Docker
- Kubernetes
- GitHub
- Azure CLI
- kubectl
- YAML Pipelines

---

## Features

- End-to-End CI/CD Pipeline
- Automated Docker Image Build
- Image Versioning using Build ID & `latest` tags
- Azure Container Registry Integration
- Kubernetes Deployment
- Azure Kubernetes Service Deployment
- GitHub Integration
- Infrastructure as Code using YAML

---

## CI/CD Workflow

1. Developer pushes code to GitHub.
2. Azure DevOps Pipeline is triggered automatically.
3. Docker image is built.
4. Image is pushed to Azure Container Registry.
5. AKS pulls the latest image.
6. Kubernetes updates the running application.

---

## Project Structure

```
devops-portfolio/
│
├── Dockerfile
├── azure-pipelines.yml
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md
```

---

## Deployment Commands

```bash
# Build Docker Image
docker build -t devops-portfolio:v1 .

# Login to Azure
az login

# Login to ACR
az acr login --name jaydeepregistry

# Connect to AKS
az aks get-credentials --resource-group <ResourceGroup> --name <AKSCluster>

# Deploy to Kubernetes
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

---

## Challenges & Resolutions

| Challenge | Resolution |
|-----------|------------|
| ImagePullBackOff | Added `latest` image tag in Azure DevOps pipeline |
| AKS VM Quota | Selected a supported VM SKU |
| Azure DevOps Authentication | Recreated and validated service connections |

---

## Future Enhancements

- Terraform for Infrastructure as Code
- Helm Charts
- Azure Key Vault Integration
- SonarQube Code Analysis
- Trivy Image Scanning
- Prometheus & Grafana Monitoring
- Blue-Green / Canary Deployments

---

## Skills Demonstrated

- Azure DevOps
- Docker
- Kubernetes
- Azure Kubernetes Service (AKS)
- Azure Container Registry (ACR)
- GitHub
- CI/CD
- YAML Pipelines
- Linux
- Azure CLI
- Infrastructure Automation

---

## Screenshots

> Add screenshots after completing the project:
- Azure DevOps Pipeline
- Azure Container Registry
- AKS Cluster
- Kubernetes Pods & Services
- Running Portfolio Website

---

## Author

**Jaydeep Gaikwad**

DevOps Engineer