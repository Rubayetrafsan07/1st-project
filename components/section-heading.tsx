interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-3 text-center">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
        Portfolio
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-sm text-text-secondary sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}