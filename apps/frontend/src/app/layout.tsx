import type { Metadata } from 'next'
import { Acme } from 'next/font/google'
import './globals.css'

const font = Acme({
    subsets: ['latin'],
    weight: '400',
})

export const metadata: Metadata = {
    title: 'Frontend Limpo',
    description: 'Aplicando Arquitetura Limpa no Frontend',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
