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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
