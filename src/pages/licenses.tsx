import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Licenses: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Litsenziyalar</h1>
          <p className="text-lg">Bizning barcha faoliyatimiz litsenziyalangan.</p>
          <ul className="mt-4 space-y-2">
            <li className="border p-2 rounded">Litsenziya #123 - Chiqindilarni boshqarish</li>
            <li className="border p-2 rounded">Litsenziya #456 - Transport xizmatlari</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Licenses;