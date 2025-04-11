// components/Layout.js
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Hava Durumu Uygulaması</title>
        <meta name="description" content="React ve Next.js ile geliştirilmiş hava durumu uygulaması" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="text-yellow-300">Weather</span>App
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {children}
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} WeatherApp - GitHub Portfolyo Projesi</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;