import type { Metadata } from 'next'

import '@/shared/styles/common/index.scss'
import { Suspense } from 'react'
import { Metrika } from '@/widgets/metrics'

export const metadata: Metadata = {
  title: 'Vitame',
  description: 'Vitame website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body>
        <Suspense>
          <Metrika />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
