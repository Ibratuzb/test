import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Biz haqimizda</h3>
            <p className="mt-2">Qurilish chiqindilarini boshqarish bo‘yicha yetakchi kompaniya.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Havolalar</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="/contacts" className="hover:underline">Kontaktlar</Link></li>
              <li><Link href="/sitemap" className="hover:underline">Sayt xaritasi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bog‘lanish</h3>
            <p className="mt-2">Telefon: +998 71 123 45 67</p>
            <p>Email: info@constructionwaste.uz</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;