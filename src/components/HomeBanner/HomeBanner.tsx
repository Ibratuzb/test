import { FC } from 'react';
import Link from 'next/link';

const HomeBanner: FC = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Qurilish chiqindilarini boshqarish</h1>
        <p className="text-lg mb-6">Ekologik toza yechimlar va professional xizmatlar.</p>
        <Link href="/contacts" className="btn">Biz bilan bog‘laning</Link>
      </div>
    </section>
  );
};

export default HomeBanner;
