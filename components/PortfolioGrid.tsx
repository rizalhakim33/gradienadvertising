import Image from "next/image";
import { PORTFOLIO } from "@/lib/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
      {PORTFOLIO.map((item, i) => (
        <div key={i} className="mb-4 break-inside-avoid overflow-hidden border border-ink/10 bg-paper-dark">
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}