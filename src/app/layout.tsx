import './globals.css';
import Navbar from '@/app/shared-components/navbar';
import MuiThemeProvider from '@/app/shared-components/mui-theme-provider';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio Arny',
  description: 'Portfólio frontend developera Arny',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <body>
        <MuiThemeProvider>
          <Navbar />
          <main className='min-h-[calc(100vh-100px)] flex flex-col'>{children}</main>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
