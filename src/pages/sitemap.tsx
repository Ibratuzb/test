import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const Sitemap: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Sayt xaritasi</h1>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="text-blue-600 hover:underline">Bosh sahifa</a></li>
            <li><a href="/construction-waste" className="text-blue-600 hover:underline">Qurilish chiqindilari</a></li>
            <li><a href="/profile" className="text-blue-600 hover:underline">Lichniy kabinet</a></li>
            <li><a href="/profile/edit" className="text-blue-600 hover:underline">Profilni tahrirlash</a></li>
            <li><a href="/contracts" className="text-blue-600 hover:underline">Shartnomalar</a></li>
            <li><a href="/documents" className="text-blue-600 hover:underline">Hujjatlar</a></li>
            <li><a href="/balance" className="text-blue-600 hover:underline">Balans va to‘lovlar</a></li>
            <li><a href="/disposal-tickets" className="text-blue-600 hover:underline">Utilizatsiya talonlari</a></li>
            <li><a href="/vehicles" className="text-blue-600 hover:underline">Transport vositalari</a></li>
            <li><a href="/pickup-requests" className="text-blue-600 hover:underline">Chiqindilarni olib ketish</a></li>
            <li><a href="/equipment-rental" className="text-blue-600 hover:underline">Maxsus texnika ijarasi</a></li>
            <li><a href="/licenses" className="text-blue-600 hover:underline">Litsenziyalar</a></li>
            <li><a href="/pricelist" className="text-blue-600 hover:underline">Narxlar ro‘yxati</a></li>
            <li><a href="/contacts" className="text-blue-600 hover:underline">Kontaktlar</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;