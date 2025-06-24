import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const ConstructionWaste: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Qurilish chiqindilari</h1>
          <p className="text-lg">
            Qurilish chiqindilarini yig‘ish, tashish va utilizatsiya qilish bo‘yicha professional xizmatlar. Biz atrof-muhitga zarar yetkazmasdan chiqindilarni qayta ishlashni ta'minlaymiz.
          </p>
          <a href="/contacts" className="btn mt-4 inline-block">Batafsil ma'lumot</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConstructionWaste;