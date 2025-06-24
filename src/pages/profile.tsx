import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

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
            <a href="/profile/edit" className="btn block">Profilni tahrirlash</a>
            <a href="/contracts" className="btn block">Shartnomalar</a>
            <a href="/balance" className="btn block">Balans va to‘lovlar</a>
            <a href="/disposal-tickets" className="btn block">Utilizatsiya talonlari</a>
            <a href="/vehicles" className="btn block">Transport vositalari</a>
            <a href="/pickup-requests" className="btn block">Chiqindilarni olib ketish</a>
            <a href="/admin" className="btn block">Admin paneli (Adminlar uchun)</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;