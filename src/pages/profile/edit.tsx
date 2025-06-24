import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainMenu from '@/components/MainMenu/MainMenu';

const EditProfile: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainMenu />
      <main className="container">
        <section className="card">
          <h1 className="text-3xl font-bold mb-4">Profilni tahrirlash</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Ism</label>
              <input type="text" placeholder="Ismingiz" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Telefon</label>
              <input type="tel" placeholder="Telefon raqamingiz" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="Email manzilingiz" className="mt-1" />
            </div>
            <button type="submit" className="btn">Saqlash</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfile;