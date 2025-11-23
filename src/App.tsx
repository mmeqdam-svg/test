import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import BedroomPage from './pages/BedroomPage';
import KitchenPage from './pages/KitchenPage';
import LivingroomPage from './pages/LivingroomPage';
import ContactButtons from './components/ContactButtons';
import posts from './data/posts';

function parsePath(pathname: string) {
  if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return pathname;
}

function App() {
  const [currentPath, setCurrentPath] = useState(parsePath(window.location.pathname));

  const navigate = useCallback((to: string) => {
    const normalized = parsePath(to);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  useEffect(() => {
    const onPop = () => setCurrentPath(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderPage = () => {
    if (currentPath === '/' ) return <HomePage navigate={navigate} />;
    if (currentPath === '/blog') return <BlogPage navigate={navigate} />;
    if (currentPath === '/contact') return <ContactPage navigate={navigate} />;
    if (currentPath === '/about') return <AboutPage navigate={navigate} />;
    if (currentPath === '/faq') return <FAQPage navigate={navigate} />;
    if (currentPath === '/bedroom') return <BedroomPage navigate={navigate} />;
    if (currentPath === '/kitchen') return <KitchenPage navigate={navigate} />;
    if (currentPath === '/livingroom') return <LivingroomPage navigate={navigate} />;
    if (currentPath === '/privacy') return <PrivacyPage />;
    if (currentPath === '/terms') return <TermsPage />;

    const blogPrefix = '/blog/';
    if (currentPath.startsWith(blogPrefix)) {
      const slug = currentPath.slice(blogPrefix.length);
      const exists = posts.some(p => p.slug === slug);
      if (exists) return <PostPage slug={slug} navigate={navigate} />;
      return <div className="max-w-4xl mx-auto py-12"><h1>المقال غير موجود</h1></div>;
    }

    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header navigate={navigate} currentPath={currentPath} />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <ContactButtons />
    </div>
  );
}

export default App;