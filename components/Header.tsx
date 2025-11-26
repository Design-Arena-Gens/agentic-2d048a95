'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';

const NAV = [
  { href: '/', label: '????' },
  { href: '/products', label: '???????' },
  { href: '/about', label: '?????? ??' },
  { href: '/contact', label: '??????' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="container-responsive py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Link href="tel:09215447396" className="hidden sm:flex items-center gap-1 text-slate-700 hover:text-primary-700">
            <FiPhoneCall className="text-primary-600" />
            <span>09215447396</span>
          </Link>
          <span className="hidden sm:block text-slate-300">|</span>
          <Link href="tel:09105783592" className="hidden sm:flex items-center gap-1 text-slate-700 hover:text-primary-700">
            <FiPhoneCall className="text-primary-600" />
            <span>09105783592</span>
          </Link>
        </div>
        <div className="text-xs text-slate-500">
          ?????? ?????? ?????? ??????? ?????? ???? ???? ???? ??
        </div>
      </div>

      <div className="container-responsive py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary-600 text-white grid place-items-center font-bold">?</div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold text-slate-900">????? ??</div>
              <div className="text-xs text-slate-500">???? ? ??????? ??????????</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 hover:text-primary-700">
              {item.label}
            </Link>
          ))}
          <Link href="https://wa.me/989215447396" target="_blank" className="btn btn-primary">
            ??????
          </Link>
        </nav>

        <button
          className="md:hidden rounded-lg p-2 border border-slate-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="???/???? ???"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container-responsive py-3 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-slate-700 hover:text-primary-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://wa.me/989215447396" target="_blank" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              ????? ?? ??????
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
