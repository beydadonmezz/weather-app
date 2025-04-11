// app/layout.js
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';

export const metadata = {
  title: 'Hava Durumu Uygulaması',
  description: 'Next.js ve Tailwind CSS ile geliştirilmiş hava durumu uygulaması',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}