import Link from 'next/link';
import { FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-responsive py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold text-slate-900 mb-2">????? ??</div>
          <p className="text-slate-600">
            ???? ????? ???? ? ??????? ?????????? ?? ????? ????? ???? ? ????? ????
            ?? ?????.
          </p>
        </div>
        <div>
          <div className="font-bold mb-3">????</div>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <FiPhone className="text-primary-600" />
              <Link href="tel:09215447396">09215447396</Link>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-primary-600" />
              <Link href="tel:09105783592">09105783592</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">????</div>
          <div className="flex items-start gap-2 text-slate-700">
            <FiMapPin className="mt-1 text-primary-600" />
            <p>?????? ?????? ?????? ??????? ?????? ???? ???? ???? ??</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        ? {new Date().getFullYear()} ????? ?? ? ????? ???? ????? ???.
      </div>
    </footer>
  );
}

