import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';
import HomeBanner from '@/components/HomeBanner/HomeBanner';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <HomeBanner />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Qurilish chiqindilarini boshqarish</h1>
          <p className="text-lg">
            Biz qurilish chiqindilarini samarali boshqarish va utilizatsiya qilish bo‘yicha xizmatlar taqdim etamiz. Ekologik toza yechimlar va zamonaviy transport vositalari bilan ishlashni taklif qilamiz.
          </p>
          <a href="/contacts" className="btn mt-4 inline-block">Biz bilan bog‘laning</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;