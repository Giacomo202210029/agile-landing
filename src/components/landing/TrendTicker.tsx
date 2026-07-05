const TICKER_ITEMS = [
  "BLAZER MUJER — EMERGENTE +23%",
  "FALDA TABLEADA — EN ASCENSO",
  "COLOR CAMEL — EN PICO",
  "CONJUNTO SASTRE +31%",
  "#MODAPERUANA — VIRAL",
];

function TickerSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center space-x-12 px-6" aria-hidden={ariaHidden}>
      {TICKER_ITEMS.map((item) => (
        <span key={item} className="flex items-center space-x-12">
          <span className="font-utility-bold text-utility-bold uppercase text-on-tertiary-container whitespace-nowrap">
            {item}
          </span>
          <span className="text-primary">•</span>
        </span>
      ))}
    </div>
  );
}

export function TrendTicker() {
  return (
    <div className="bg-inverse-surface py-4 border-y border-on-background overflow-hidden">
      <div className="animate-scroll">
        <TickerSet />
        <TickerSet ariaHidden />
      </div>
    </div>
  );
}
