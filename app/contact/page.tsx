import Link from 'next/link';
import { FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';

export const metadata = {
  title: '??????',
  description: '??????? ?????? ?? ????? ??: ????? ?????? ? ?????',
};

export default function ContactPage() {
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">?????? ?? ????? ??</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6 space-y-4">
          <div className="flex items-center gap-3 text-slate-800">
            <FiPhone className="text-primary-600" />
            <div>
              <div className="font-bold">????</div>
              <div className="space-x-2 space-x-reverse">
                <Link href="tel:09215447396" className="underline">09215447396</Link>
                <span className="text-slate-400">/</span>
                <Link href="tel:09105783592" className="underline">09105783592</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-800">
            <FiMessageCircle className="text-primary-600" />
            <div>
              <div className="font-bold">??????</div>
              <Link href="https://wa.me/989215447396" target="_blank" className="underline">
                ???? ?????
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3 text-slate-800">
            <FiMapPin className="text-primary-600 mt-1" />
            <div>
              <div className="font-bold">?????</div>
              <p>?????? ?????? ?????? ??????? ?????? ???? ???? ???? ??</p>
            </div>
          </div>
        </div>
        <div className="card p-2">
          <iframe
            title="???? ????? ??"
            className="w-full h-[320px] rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=35.701,51.373&hl=fa&z=14&output=embed"
          />
        </div>
      </div>
    </div>
  );
}

