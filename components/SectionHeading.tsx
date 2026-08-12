type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  const lineCls = align === "center" ? "mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-ink";
  const descColor = dark ? "text-paper/70" : "text-ink-soft";

  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
        <span className={`h-2 w-2 bg-brand ${lineCls}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>}
    </div>
  );
}