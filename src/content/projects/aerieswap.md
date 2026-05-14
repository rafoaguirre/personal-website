---
title: 'AerieSwap'
summary: 'Early-stage DEX monorepo exploring AMM architecture, Solidity accounting primitives, Foundry tests, and a Next.js trading interface.'
stack: ['Solidity', 'Foundry', 'TypeScript', 'Next.js', 'Turborepo', 'EVM']
year: 2026
repoUrl: 'https://github.com/rafoaguirre/aerieswap-monorepo'
featured: false
---

## Overview

AerieSwap is an early-stage decentralized exchange monorepo built to demonstrate blockchain system design from the protocol layer up. The project is inspired by PancakeSwap-style AMM architecture, but it is framed as a portfolio and learning implementation rather than a production deployment.

The goal is to make the full DEX architecture reviewable in one workspace: EVM contracts, accounting primitives, future routing packages, token utilities, and a frontend trading experience.

## What is implemented

- Initial Foundry-based EVM core package with Solidity contracts, tests, formatting, and package scripts
- Accounting-layer contracts including `Vault`, `VaultToken`, currency abstractions, balance deltas, settlement guards, reserve checkpoints, and shared safety helpers
- Interfaces and primitives for future pool managers, hooks, locking callbacks, vault access, and internal accounting tokens
- Tests covering vault behavior, adversarial settlement cases, vault token behavior, and core library primitives
- Architecture documentation covering the accounting model, transient lock mechanics, token assumptions, planned AMM layers, hooks, periphery, farms, and reward systems
- Next.js web client scaffold inside the monorepo, plus repository-level CI, security, contribution, licensing, and attribution notes

## Technical focus

The current signal is contract architecture and protocol-layer thinking. The implemented work focuses on custody, flash-style settlement, internal surplus accounting, token assumptions, scoped pause behavior, and the boundaries between a small vault core and future pool managers.

The project is intentionally not presented as a live exchange. It is not audited, has no canonical deployment, and should not be used with real funds.

## Current status

AerieSwap is in early development. The initial EVM accounting layer is implemented with Foundry tests, while the AMM, router, quoter, position manager, hook, rewards, and full trading UI layers remain planned work.

EcomSaaS remains the higher-priority portfolio build. AerieSwap is included as a public signal of blockchain architecture work that will receive deeper implementation once the commerce platform is in a stronger state.
