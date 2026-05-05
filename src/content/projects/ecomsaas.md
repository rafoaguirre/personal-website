---
title: 'EcomSaaS'
summary: 'Multi-tenant commerce platform with vendor dashboards, marketplace storefronts, Stripe checkout, shared domain packages, and queue-backed worker flows.'
stack: ['TypeScript', 'Next.js', 'NestJS', 'Turborepo', 'Supabase', 'Stripe Connect', 'Polygon']
year: 2026
repoUrl: 'https://github.com/rafoaguirre/ecomsass'
featured: true
---

## Overview

EcomSaaS is a full-stack monorepo for a multi-tenant commerce platform. The project is built to show practical systems design across product surfaces that have to work together: vendor onboarding, store management, marketplace browsing, multi-vendor checkout, payment workflows, and background processing.

The repo focuses on the coordination points that make a commerce platform meaningful to review as engineering work, not just isolated CRUD screens.

## What is implemented

- Vendor dashboard flows for onboarding, store configuration, and product management
- Marketplace and storefront experiences for browsing stores and purchasing products
- Multi-vendor cart and checkout with Stripe payment intents and webhook handling
- Shared domain, application, validation, API client, and UI packages inside a Turborepo monorepo
- Redis and BullMQ-backed caching, queues, email notifications, and worker jobs

## Engineering focus

The codebase uses explicit workspace boundaries across `clients`, `backends`, `packages`, `blockchain`, and `infra`. Shared domain and contract packages keep business rules and API types aligned across applications, while NestJS services, Next.js clients, and infrastructure adapters remain independently evolvable.

This project is meant to demonstrate more than feature shipping. The main signal is architectural discipline: clear package boundaries, practical clean-architecture patterns, realistic payment handling, operational workflows, and room for future blockchain extensions without forcing Web3 complexity into the core platform too early.

## AI usage

Development was AI-assisted for implementation speed and documentation support, but architecture, system boundaries, technical decisions, review, and validation remained developer-owned. The product direction also includes an MCP server for natural-language store configuration.

## Current status

This is an active portfolio build, not a production launch. Security hardening, compliance work, and the blockchain phase are still in progress, but the current repo already demonstrates meaningful backend, frontend, payments, queueing, and architecture work in one cohesive system.
