// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import Chat from '@/components/Chat';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Chat />
        <main className="bg-black">{children}</main>
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
