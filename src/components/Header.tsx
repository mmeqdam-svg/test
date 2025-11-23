import React from 'react';

type HeaderProps = {
  navigate: (path: string) => void;
  currentPath: string;
};

const Header: React.FC<HeaderProps> = ({ navigate, currentPath }) => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); navigate('/'); }} 
            className="text-2xl font-bold text-emerald-600"
          >
            أثاث جدة
          </a>
          <nav className="flex items-center space-x-reverse space-x-6">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className={`hover:text-emerald-600 transition ${currentPath === '/' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >الرئيسية</a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigate('/about'); }}
              className={`hover:text-emerald-600 transition ${currentPath === '/about' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >من نحن</a>
            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
              className={`hover:text-emerald-600 transition ${currentPath.startsWith('/blog') ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >المدونة</a>
            <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); navigate('/faq'); }}
              className={`hover:text-emerald-600 transition ${currentPath === '/faq' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >الأسئلة الشائعة</a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className={`hover:text-emerald-600 transition ${currentPath === '/contact' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >تواصل معنا</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;