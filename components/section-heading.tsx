interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
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