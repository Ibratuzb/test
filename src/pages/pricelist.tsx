import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Pricelist: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Narxlar ro‘yxati</h1>
          <p className="text-lg">Bizning xizmatlarimiz narxlari quyida keltirilgan.</p>
          <ul className="mt-4 space-y-2">
            <li className="border p-2 rounded">Chiqindilarni olib ketish - 50,000 UZS/m³</li>
            <li className="border p-2 rounded">Utilizatsiya - 100,000 UZS/tonna</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricelist;