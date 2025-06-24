import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Vehicles: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Transport vositalari</h1>
          <p className="text-lg">Transport vositalaringizni bu yerdan boshqaring.</p>
          <button className="btn mt-4">Yangi transport qo‘shish</button>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Mavjud transport vositalari</h2>
            <ul className="mt-2 space-y-2">
              <li className="border p-2 rounded">KamAZ #123 - Yuk mashinasi</li>
              <li className="border p-2 rounded">MAN #456 - Yuk mashinasi</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vehicles;