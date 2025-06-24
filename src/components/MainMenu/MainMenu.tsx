import { FC } from 'react';
import Link from 'next/link';

const MainMenu: FC = () => {
  return (
    <nav className="main-menu">
      <Link href="/" className="hover:underline">Bosh sahifa</Link>
      <Link href="/construction-waste" className="hover:underline">Qurilish chiqindilari</Link>
      <Link href="/pricelist" className="hover:underline">Narxlar ro‘yxati</Link>
      <Link href="/licenses" className="hover:underline">Litsenziyalar</Link>
      <Link href="/contacts" className="hover:underline">Kontaktlar</Link>
    </nav>
  );
};

export default MainMenu;