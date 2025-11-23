import React from 'react';
import { Helmet } from 'react-helmet-async';
import posts from '../data/posts';

type BlogPageProps = {
  navigate: (path: string) => void;
};

const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
        <title>المدونة - نصائح ودليل شراء الأثاث المستعمل في جدة</title>
        <meta name="description" content="اقرأ أحدث المقالات والنصائح حول شراء وبيع الأثاث المستعمل في جدة. دليل شامل للأسعار، أنواع الأثاث، والمزيد من المحتوى المفيد" />
        <meta name="keywords" content="مدونة أثاث جدة، نصائح بيع الأثاث، دليل الأسعار، شراء أثاث مستعمل" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/blog" />
      </Helmet>

      <div className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">المدونة</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          نصائح، أدلة، وأحدث المعلومات حول شراء وبيع الأثاث المستعمل في جدة
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-gray-500" dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString('ar-SA', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-emerald-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">بواسطة {post.author}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.slug}`);
                  }}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-emerald-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          هل لديك أثاث مستعمل للبيع؟
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          احصل على تقييم مجاني وعرض سعر فوري لأثاثك المستعمل. نشتري جميع أنواع الأثاث بأعلى الأسعار في جدة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition"
            aria-label="تواصل معنا عبر واتساب"
          >
            واتساب: 0559781023
          </a>
          <a
            href="tel:+966559781023"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition"
            aria-label="اتصل بنا"
          >
            اتصل الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;