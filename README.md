# x-barter

X-Barter: Zero-knowledge exchange for Stellar assets. Trade XLM, USDC & Stellar tokens with complete privacy. ZK-proofs verify trades without exposing amounts or counterparties. Built for confidential barter, secure settlements & financial privacy. Trade Stellar assets, reveal nothing.

## Project Structure

This is a monorepo with three parts:

| Directory | Description |
| --- | --- |
| [`x-barter-web`](x-barter-web) | Frontend web app (Next.js) |
| [`x-barter-api`](x-barter-api) | Backend API (Express, TypeScript) |
| [`x-barter-contracts`](x-barter-contracts) | Soroban smart contracts (Rust) |

Each directory has its own README with setup instructions.

## Getting Started

```bash
# web app
cd x-barter-web && npm install && npm run dev

# backend api
cd x-barter-api && npm install && npm run dev

# smart contracts
cd x-barter-contracts/contracts/x_barter_core && make build
```
