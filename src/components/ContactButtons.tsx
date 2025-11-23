import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const phoneNumber = '966559781023';

const ContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* زر واتساب */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-reverse space-x-2 transition-all duration-300 hover:scale-105 group"
        aria-label="تواصل معنا عبر واتساب للحصول على عرض سعر فوري"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden group-hover:inline-block whitespace-nowrap bg-green-500 px-3 py-1 rounded-lg mr-2 text-sm">
          تواصل واتساب
        </span>
      </a>
      {/* زر الاتصال */}
      <a
        href={`tel:+${phoneNumber}`}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-reverse space-x-2 transition-all duration-300 hover:scale-105 group"
        aria-label="اتصل بنا الآن على 0559781023 للتقييم المجاني"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
        <span className="hidden group-hover:inline-block whitespace-nowrap bg-emerald-500 px-3 py-1 rounded-lg mr-2 text-sm">
          اتصال مباشر
        </span>
      </a>
    </div>
  );
};

export default ContactButtons;