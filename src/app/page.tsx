'use client'

import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          href="/anime"
          className="inline-block px-6 py-3 bg-slate-100 text-black font-semibold rounded-xl shadow hover:bg-slate-300 transition"
        >
          Voir la liste d&apos;animés
        </Link>
      </motion.div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1>&copy; Wael Chatoui. All rights reserved</h1>
      </footer>
    </div>
  );
}
