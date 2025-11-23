import React from 'react';
import { Helmet } from 'react-helmet-async';
import posts from '../data/posts';

type PostPageProps = {
  slug: string;
  navigate?: (path: string) => void;
};

const PostPage: React.FC<PostPageProps> = ({ slug }) => {
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return <div className="max-w-4xl mx-auto py-12"><h1>المقال غير موجود</h1></div>;
  }

  const canonical = `https://www.athath-jeddah-sa.com/blog/${post.slug}`;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "url": canonical,
    "image": [post.image],
    "thumbnailUrl": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "أثاث جدة",
      "url": "https://www.athath-jeddah-sa.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.athath-jeddah-sa.com/favicon-192x192.png",
        "width": 192,
        "height": 192
      }
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "keywords": post.keywords.join(', '),
    "articleSection": post.category,
    "inLanguage": "ar-SA"
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>{post.titleTag} - أثاث جدة</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        
        <meta property="og:title" content={post.titleTag} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="أثاث جدة" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:image" content={post.image} />
        <meta property="og:image:alt" content={post.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@athath_jeddah" />
        <meta name="twitter:title" content={post.titleTag} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:image:alt" content={post.imageAlt} />
        
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        
        <link rel="canonical" href={canonical} />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <article className="bg-white rounded-lg shadow-sm p-8">
        <header className="mb-8 border-b pb-6">
          <div className="text-emerald-600 font-medium text-sm mb-2">{post.category}</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-600 space-x-reverse space-x-4">
            <span>بواسطة {post.author}</span>
            <span>•</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('ar-SA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:list-disc prose-ul:mr-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:mr-6 prose-ol:mb-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <footer className="mt-12 pt-8 border-t">
          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              هل تريد بيع أثاثك المستعمل؟
            </h3>
            <p className="text-gray-700 mb-4">
              احصل على أفضل سعر لأثاثك المستعمل في جدة مع خدمة تقييم مجانية ونقل مجاني
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label="تواصل معنا عبر واتساب"
              >
                واتساب: 0559781023
              </a>
              <a
                href="tel:+966559781023"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label="اتصل بنا"
              >
                اتصل الآن
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PostPage;