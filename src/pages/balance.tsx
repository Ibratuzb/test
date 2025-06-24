import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Balance: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Balans va to‘lovlar</h1>
          <p className="text-lg">Joriy balans: 500,000 UZS</p>
          <button className="btn mt-4">Balansni to‘ldirish</button>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">To‘lovlar tarixi</h2>
            <ul className="mt-2 space-y-2">
              <li className="border p-2 rounded">To‘lov #1 - 100,000 UZS - 01/01/2025</li>
              <li className="border p-2 rounded">To‘lov #2 - 200,000 UZS - 02/01/2025</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Balance;