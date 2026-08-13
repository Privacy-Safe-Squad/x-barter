const features = [
  {
    title: "Zero-knowledge trades",
    description:
      "ZK-proofs verify every trade without exposing amounts or counterparties.",
  },
  {
    title: "Stellar-native",
    description: "Trade XLM, USDC, and other Stellar tokens directly.",
  },
  {
    title: "Confidential settlement",
    description:
      "Built for private barter and secure settlements on Stellar.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-16 py-32 px-16 bg-white text-center dark:bg-black">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Trade Stellar assets, reveal nothing.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            X-Barter is a zero-knowledge exchange for Stellar assets — trade
            with complete privacy, backed by proofs instead of trust.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-base font-semibold text-black dark:text-zinc-50">
                {feature.title}
              </h2>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
