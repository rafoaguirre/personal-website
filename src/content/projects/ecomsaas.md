---
title: 'EcomSaaS'
summary: 'Multi-tenant e-commerce platform with vendor storefronts, marketplace and split-payments flows, plus AI-powered store operations and blockchain-ready architecture.'
stack: ['TypeScript', 'Next.js', 'NestJS', 'Turborepo', 'Supabase', 'Stripe Connect', 'Polygon']
year: 2026
repoUrl: 'https://github.com/rafoaguirre/ecomsass'
featured: true
---

## Overview

EcomSaaS is a portfolio project focused on building a modern multi-tenant commerce system with clear service boundaries and realistic product workflows. Vendors can run branded storefronts, and the platform is designed to scale into advanced payments and blockchain features without forcing everything into a monolith.

## Product scope

- Vendor-managed stores exposed through subdomains
- Marketplace surface for store discovery
- Multi-vendor cart and checkout flows
- Stripe Connect payment splitting for platform and vendor payouts
- Blockchain-ready direction for crypto payments, rewards, and fundraising

## Engineering approach

The codebase uses a Turborepo monorepo with explicit boundaries (`clients`, `backends`, `packages`, `blockchain`, and `infra`). Shared domain and contract packages keep core logic and API types consistent across services, while preserving independent iteration for frontend and backend applications.

## AI usage

This project includes an AI-powered management direction via an MCP server for natural-language store configuration. Development was AI-assisted (Copilot/Claude) for implementation speed, but architecture, design decisions, code review, and validation remained developer-owned.

## Current status

This is an active portfolio build and not yet production-ready. Security hardening and compliance work are being implemented progressively, and the project is used to demonstrate systems thinking, maintainable architecture, and practical full-stack execution.
