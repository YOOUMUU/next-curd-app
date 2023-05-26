import NavBar from '@/components/NavBar';
import Footer from '@components/Footer';
import '@styles/globals.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: 'Simple CURD App',
  description: 'A simple CURD app built with Next.js and TypeScript.',
};

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <NavBar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default layout;
