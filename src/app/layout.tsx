import './globals.css'
import Navbar from '@/app/shared-components/navbar'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio Arny',
  description: 'Portfólio frontend developera Arny',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
