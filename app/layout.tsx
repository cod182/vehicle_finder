import { Footer, NavBar } from '@components';
import './globals.css';

export const metadata = {
  title: 'Vehicle Finder',
  description: 'Everything you could need',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
