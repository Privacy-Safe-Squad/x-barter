# x-barter-contracts

[Soroban](https://soroban.stellar.org) smart contracts for X-Barter — a zero-knowledge exchange for Stellar assets. Trade XLM, USDC & Stellar tokens with complete privacy, using ZK-proofs to verify trades without exposing amounts or counterparties.

## Project Structure

```text
.
├── contracts
│   └── x_barter_core
│       ├── src
│       │   └── lib.rs
│       ├── Cargo.toml
│       └── Makefile
├── Cargo.toml
└── README.md
```

- `contracts/x_barter_core` holds the `XBarterCore` contract struct — the entrypoint future contributors will extend with the trade lifecycle, ZK-proof verification, and settlement interfaces.
- New contracts can be added under `contracts/`, each in its own crate, relying on the top-level `Cargo.toml` workspace for shared dependencies (e.g. `soroban-sdk`).

## Getting Started

Requires the [Stellar CLI](https://developers.stellar.org/docs/tools/developer-tools#cli) and the `wasm32v1-none` Rust target.

```bash
rustup target add wasm32v1-none
cd contracts/x_barter_core
make build
make test
```

## Related

- [`x-barter-web`](../x-barter-web) — frontend web app
- [`x-barter-api`](../x-barter-api) — backend API
