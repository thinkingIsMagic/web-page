import React, { useState } from 'react';
import './App.css';

// 定义语言包
const translations = {
  zh: {
    brand: '搜索中心',
    searchPlaceholder: '搜索内容...',
    mainSearchPlaceholder: '想找什么？',
    searchButton: '搜索',
    discoverTitle: '发现精彩内容',
    popularCategories: '热门分类',
    categories: ['技术', '设计', '商业', '教育'],
    trendingNow: '热门推荐',
    trendingItem: '热门内容',
    trendingDesc: '热门内容的简要描述',
    copyright: '保留所有权利',
    about: '关于我们',
    privacy: '隐私政策',
    terms: '使用条款',
    contact: '联系我们',
  },
  en: {
    brand: 'SearchHub',
    searchPlaceholder: 'Search...',
    mainSearchPlaceholder: 'What are you looking for?',
    searchButton: 'Search',
    discoverTitle: 'Discover Amazing Content',
    popularCategories: 'Popular Categories',
    categories: ['Technology', 'Design', 'Business', 'Education'],
    trendingNow: 'Trending Now',
    trendingItem: 'Trending Item',
    trendingDesc: 'Brief description of the trending item',
    copyright: 'All rights reserved',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
  }
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const t = translations[language];

  return (
    <div className="App">
      {/* 顶部导航 */}
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <h1>{t.brand}</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button 
              className="language-switch"
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容区 */}
      <main className="main-content">
        <section className="hero-section">
          <h2>{t.discoverTitle}</h2>
          <div className="main-search-container">
            <input
              type="text"
              placeholder={t.mainSearchPlaceholder}
              className="main-search-input"
            />
            <button className="search-button">{t.searchButton}</button>
          </div>
        </section>

        {/* 分类区域 */}
        <section className="categories">
          <h3>{t.popularCategories}</h3>
          <div className="category-grid">
            {t.categories.map((category) => (
              <div key={category} className="category-card">
                <h4>{category}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 热门推荐 */}
        <section className="trending">
          <h3>{t.trendingNow}</h3>
          <div className="trending-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="trending-card">
                <div className="card-content">
                  <h4>{t.trendingItem} {item}</h4>
                  <p>{t.trendingDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2024 {t.brand}. {t.copyright}</p>
          </div>
          <div className="footer-links">
            <a href="#about">{t.about}</a>
            <a href="#privacy">{t.privacy}</a>
            <a href="#terms">{t.terms}</a>
            <a href="#contact">{t.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
