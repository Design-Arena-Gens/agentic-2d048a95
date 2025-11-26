import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-responsive py-16 sm:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="inline-block mb-4 rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs">
            ????? ???? ? ????? ???? ????? ? ?????? ?????
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] text-slate-900">
            ????? ??
            <span className="text-primary-600"> ? </span>
            ???? ? ??????? ??????????
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            ????? ??????? ???? ??????? ????? ??????? ????????????? ? ???????? ?? ????
            ?????? ? ???????? ?????.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary">
              ?????? ???????
            </Link>
            <Link href="/contact" className="btn btn-outline">
              ?????? ? ??????
            </Link>
          </div>
          <div className="mt-6 text-slate-600 text-sm">
            ????: <a className="underline" href="tel:09215447396">09215447396</a> ?{' '}
            <a className="underline" href="tel:09105783592">09105783592</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-200 via-white to-primary-100 border border-primary-200 shadow-inner" />
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-primary-500/20 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-sky-400/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

