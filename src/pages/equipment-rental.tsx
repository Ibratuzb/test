import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const EquipmentRental: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Maxsus texnika ijarasi</h1>
          <p className="text-lg">Bu sahifa hozircha ishlanmoqda. Tez orada maxsus texnika ijarasi xizmatlari qo‘shiladi.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EquipmentRental;