#![no_std]

use soroban_sdk::contract;

/// Core contract for X-Barter's zero-knowledge Stellar asset exchange.
///
/// Interfaces (trade lifecycle, ZK-proof verification, settlement, etc.)
/// are intentionally left unimplemented for future contributors to define.
#[contract]
pub struct XBarterCore;
