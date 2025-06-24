import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Construction Waste
        </Link>
        <nav>
          <Link href="/profile" className="text-blue-600 hover:underline">
            Lichniy kabinet
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;