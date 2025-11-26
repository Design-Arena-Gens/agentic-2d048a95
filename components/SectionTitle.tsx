type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

