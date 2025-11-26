import Link from 'next/link';

type Props = {
  title: string;
  desc: string;
  href?: string;
};

export default function ProductCard({ title, desc, href = '/contact' }: Props) {
  return (
    <div className="card p-5 hover:shadow-md transition">
      <div className="h-28 rounded-xl bg-gradient-to-tr from-white to-primary-50 border border-slate-100" />
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
      <div className="mt-4">
        <Link href={href} className="text-primary-700 hover:text-primary-800 underline">
          ??????? ????
        </Link>
      </div>
    </div>
  );
}

