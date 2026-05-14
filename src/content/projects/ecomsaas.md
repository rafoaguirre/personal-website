---
title: 'EcomSaaS'
summary: 'Multi-tenant commerce platform built as a TypeScript monorepo with vendor and storefront apps, Stripe payments, shared domain packages, worker flows, and Terraform-based infrastructure work.'
stack:
  [
    'TypeScript',
    'NestJS',
    'Next.js',
    'Supabase',
    'Stripe',
    'Redis',
    'BullMQ',
    'Turborepo',
    'Terraform',
    'GCP',
  ]
year: 2026
repoUrl: 'https://github.com/rafoaguirre/ecomsass'
featured: true
---

## Overview

EcomSaaS is a multi-tenant commerce platform built as a product-oriented TypeScript monorepo. The point of the project is not just to show storefront screens. It is to show how product surfaces, shared business logic, operational workflows, background jobs, and deployment concerns fit together across vendor onboarding, catalog management, checkout, payments, and platform infrastructure.

The strongest technical signal is coordination. The repo demonstrates how to keep domain rules, API contracts, queue-backed workflows, deployment boundaries, and application responsibilities coherent as the system grows.

## What is implemented

- Vendor dashboard flows for onboarding, store settings, and product management
- Marketplace and storefront flows for store discovery, product detail, cart, and checkout
- Stripe payment intents, webhook-driven order confirmation, and supporting order workflows
- Shared domain, application, contracts, validation, infrastructure, API client, and UI packages inside a single monorepo
- Redis and BullMQ-backed queues, email notifications, and a standalone worker for scheduled and background jobs
- Terraform-based GCP infrastructure compositions for demo and higher-scale paths, plus deploy-path container assets and tighter cloud identity boundaries
- Security and operational foundations such as config validation, ownership checks, webhook idempotency, health surfaces, and hardening-oriented infrastructure work

## Technical focus

This project is meant to demonstrate more than feature shipping. The main signal is architectural discipline across both application and platform layers: clear package boundaries, clean dependency direction, realistic payment handling, queue-backed workflows, worker execution, and infrastructure that reflects different cost, reliability, and hardening requirements.

It also demonstrates scope control. Blockchain and AI-related extensions remain available as future paths, but the core platform is not distorted by blockchain or assistant complexity before the product actually needs them.

## Infrastructure and DevOps

Infrastructure is part of the portfolio value of this project. The repo includes Terraform-based demo and higher-scale environment compositions, deploy-path container assets, more explicit workload identity boundaries between Terraform runs and deployment automation, and a separation between a lower-cost demo path and a more hardened reference path.

The demo path centers on Cloud Run for the API and Cloud Scheduler for the current automation jobs, avoiding the always-on worker and Redis dependency in that deployment shape. The higher-scale path adds a private worker VM, Memorystore-backed queue infrastructure, VPC networking, hardened ingress, observability, and tighter deployment identities.

This should be read as implemented platform architecture in the repository, not as a fully production-proven rollout. The deployment model is implemented in code and moving toward live verification, with apply-and-verify work still pending.

## AI usage

AI tools were used to accelerate drafting, implementation, and documentation, but system design, package boundaries, technical decisions, review, and validation remained developer-owned.

AI-assisted vendor workflows, the MCP server, and similar assistant surfaces remain roadmap items rather than implemented product features.

## Current status

This is an active portfolio build, not a production launch. The repo already demonstrates meaningful architecture across frontend, backend, payments, workers, queues, and infrastructure in one cohesive system.

Stripe Connect, Polygon-based payments, and the MCP server remain planned or exploratory extensions rather than shipped core capabilities.
