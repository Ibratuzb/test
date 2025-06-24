import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';
import Link from 'next/link';

const Sitemap: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Sayt xaritasi</h1>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Bosh sahifa</Link></li>
            <li><Link href="/construction-waste" className="text-blue-600 hover:underline">Qurilish chiqindilari</Link></li>
            <li><Link href="/profile" className="text-blue-600 hover:underline">Lichniy kabinet</Link></li>
            <li><Link href="/profile/edit" className="text-blue-600 hover:underline">Profilni tahrirlash</Link></li>
            <li><Link href="/contracts" className="text-blue-600 hover:underline">Shartnomalar</Link></li>
            <li><Link href="/documents" className="text-blue-600 hover:underline">Hujjatlar</Link></li>
            <li><Link href="/balance" className="text-blue-600 hover:underline">Balans va to'lovlar</Link></li>
            <li><Link href="/disposal-tickets" className="text-blue-600 hover:underline">Utilizatsiya talonlari</Link></li>
            <li><Link href="/vehicles" className="text-blue-600 hover:underline">Transport vositalari</Link></li>
            <li><Link href="/pickup-requests" className="text-blue-600 hover:underline">Chiqindilarni olib ketish</Link></li>
            <li><Link href="/equipment-rental" className="text-blue-600 hover:underline">Maxsus texnika ijarasi</Link></li>
            <li><Link href="/licenses" className="text-blue-600 hover:underline">Litsenziyalar</Link></li>
            <li><Link href="/pricelist" className="text-blue-600 hover:underline">Narxlar ro'yxati</Link></li>
            <li><Link href="/contacts" className="text-blue-600 hover:underline">Kontaktlar</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
