import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';
import Link from 'next/link';

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Lichniy kabinet</h1>
          <p className="text-lg">Foydalanuvchi ma'lumotlari va funksiyalarni bu yerdan boshqaring.</p>
          <div className="mt-4 space-y-2">
            <Link href="/profile/edit" className="btn block">Profilni tahrirlash</Link>
            <Link href="/contracts" className="btn block">Shartnomalar</Link>
            <Link href="/balance" className="btn block">Balans va to'lovlar</Link>
            <Link href="/disposal-tickets" className="btn block">Utilizatsiya talonlari</Link>
            <Link href="/vehicles" className="btn block">Transport vositalari</Link>
            <Link href="/pickup-requests" className="btn block">Chiqindilarni olib ketish</Link>
            <Link href="/admin" className="btn block">Admin paneli (Adminlar uchun)</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
