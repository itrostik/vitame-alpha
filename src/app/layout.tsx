import type { Metadata } from 'next'

import '@/shared/styles/common/index.scss'

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
            <body>{children}</body>
        </html>
    )
}
