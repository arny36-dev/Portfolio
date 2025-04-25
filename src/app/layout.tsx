import './globals.css';
import Navbar from '@/app/shared-components/navbar';
import MuiThemeProvider from '@/app/shared-components/mui-theme-provider'; // <== pridané
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio Arny',
  description: 'Portfólio frontend developera Arny',
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
