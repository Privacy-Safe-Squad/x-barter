# x-barter-api

Backend API for X-Barter — a zero-knowledge exchange for Stellar assets. Trade XLM, USDC & Stellar tokens with complete privacy, using ZK-proofs to verify trades without exposing amounts or counterparties.

Built with [Express](https://expressjs.com) and TypeScript.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The server starts on [http://localhost:3001](http://localhost:3001) (override with the `PORT` env var).

Check it's up:

```bash
curl http://localhost:3001/health
```

## Scripts

- `npm run dev` — start the development server with hot reload
- `npm run build` — compile TypeScript to `dist/`
- `npm run start` — run the compiled production build

## Project Structure

```
src/
  index.ts   # app entrypoint
```

## Related

- [`x-barter-web`](../x-barter-web) — frontend web app
- [`x-barter-contracts`](../x-barter-contracts) — Soroban smart contracts
