import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Contracts: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Shartnomalar</h1>
          <p className="text-lg">Bu yerda shartnomalaringizni ko‘rishingiz va yangi shartnoma yaratishingiz mumkin.</p>
          <button className="btn mt-4">Yangi shartnoma yaratish</button>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Mavjud shartnomalar</h2>
            <ul className="mt-2 space-y-2">
              <li className="border p-2 rounded">Shartnoma #1 - 01/01/2025</li>
              <li className="border p-2 rounded">Shartnoma #2 - 02/01/2025</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contracts;