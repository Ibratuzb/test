import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const PickupRequests: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Chiqindilarni olib ketish uchun arizalar</h1>
          <p className="text-lg">Chiqindilarni olib ketish uchun ariza yarating.</p>
          <form className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Chiqindi turi</label>
              <select className="mt-1">
                <option>Beton</option>
                <option>G‘isht</option>
                <option>Metall</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Hajm (m³)</label>
              <input type="number" placeholder="Hajmni kiriting" className="mt-1" />
            </div>
            <button type="submit" className="btn">Ariza yuborish</button>
          </form>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Mavjud arizalar</h2>
            <ul className="mt-2 space-y-2">
              <li className="border p-2 rounded">Ariza #1 - 01/01/2025</li>
              <li className="border p-2 rounded">Ariza #2 - 02/01/2025</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PickupRequests;