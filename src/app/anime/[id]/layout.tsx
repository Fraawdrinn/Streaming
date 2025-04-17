import Link from 'next/link'
import type { ReactNode } from 'react'

export default function AnimeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-4">
      <Link href="/anime" className="text-blue-500 underline">
        ← Back to anime list
      </Link>

      <div className="mt-4 rounded-xl p-6 shadow-md">
        {children}
      </div>
    </div>
  )
}
