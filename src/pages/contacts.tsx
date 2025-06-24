import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Contacts: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Kontaktlar</h1>
          <p className="text-lg">Biz bilan bog‘laning:</p>
          <ul className="mt-4 space-y-2">
            <li>Telefon: +998 71 123 45 67</li>
            <li>Email: info@constructionwaste.uz</li>
            <li>Manzil: Toshkent sh., Chilanzar tumani, 123-uy</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;