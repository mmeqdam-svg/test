import React from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Company Info & NAP */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">أثاث جدة</h3>
            <p className="text-gray-400 mb-4">
              متخصصون في شراء الأثاث المستعمل والأجهزة الكهربائية في جدة بأعلى الأسعار
            </p>
            
            {/* NAP - Name, Area, Phone */}
            <div className="space-y-3">
              <div className="flex items-start space-x-reverse space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">المنطقة</p>
                  <p className="text-gray-400">جدة، المملكة العربية السعودية</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-reverse space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">الهاتف</p>
                  <a 
                    href="tel:+966559781023" 
                    className="text-emerald-400 hover:text-emerald-300 transition"
                    aria-label="اتصل بنا على 0559781023"
                  >
                    0559781023
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">الصفحات</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => { e.preventDefault(); navigate('/'); }}
                  className="hover:text-emerald-400 transition"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                  className="hover:text-emerald-400 transition"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a 
                  href="/bedroom" 
                  onClick={(e) => { e.preventDefault(); navigate('/bedroom'); }}
                  className="hover:text-emerald-400 transition"
                >
                  غرف النوم
                </a>
              </li>
              <li>
                <a 
                  href="/kitchen" 
                  onClick={(e) => { e.preventDefault(); navigate('/kitchen'); }}
                  className="hover:text-emerald-400 transition"
                >
                  المطبخ والأجهزة
                </a>
              </li>
              <li>
                <a 
                  href="/livingroom" 
                  onClick={(e) => { e.preventDefault(); navigate('/livingroom'); }}
                  className="hover:text-emerald-400 transition"
                >
                  الكنب والصالة
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
                  className="hover:text-emerald-400 transition"
                >
                  المدونة
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  onClick={(e) => { e.preventDefault(); navigate('/faq'); }}
                  className="hover:text-emerald-400 transition"
                >
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-4 mb-6">
              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-3 text-emerald-400 hover:text-emerald-300 transition"
                aria-label="تواصل معنا عبر واتساب"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واتساب</span>
              </a>
              
              <a
                href="tel:+966559781023"
                className="flex items-center space-x-reverse space-x-3 text-emerald-400 hover:text-emerald-300 transition"
                aria-label="اتصل بنا على 0559781023"
              >
                <Phone className="h-5 w-5" />
                <span>مكالمة هاتفية</span>
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-2">روابط مهمة</p>
              <div className="space-y-2">
                <a 
                  href="/privacy" 
                  onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}
                  className="block text-sm hover:text-emerald-400 transition"
                >
                  سياسة الخصوصية
                </a>
                <a 
                  href="/terms" 
                  onClick={(e) => { e.preventDefault(); navigate('/terms'); }}
                  className="block text-sm hover:text-emerald-400 transition"
                >
                  شروط الخدمة
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} أثاث جدة. جميع الحقوق محفوظة - متخصصون في شراء الأثاث المستعمل في جدة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
