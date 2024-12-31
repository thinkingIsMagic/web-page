import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ResetPassword } from './components/ResetPassword';
import { authService } from './services/authService';
import { Button } from './components/ui';
import { Input } from './components/ui';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

// 定义语言包
const translations = {
  zh: {
    brand: '搜索中心',
    searchPlaceholder: '搜索内容...',
    mainSearchPlaceholder: '想找什么？',
    searchButton: '搜索',
    discoverTitle: '发现精彩内容',
    discoverSubtitle: '探索更多精彩内容，从这里开始',
    popularCategories: '热门分类',
    categories: ['技术', '设计', '商业', '教育'],
    categoryDesc: '探索',
    categoryDescSuffix: '相关的精彩内容',
    trendingNow: '热门推荐',
    trendingItem: '热门内容',
    trendingDesc: '热门内容的简要描述',
    copyright: '保留所有权利',
    about: '关于我们',
    privacy: '隐私政策',
    terms: '使用条款',
    contact: '联系我们',
    home: '首页',
    welcome: '欢迎',
    login: '登录',
    register: '注册',
    logout: '退出登录',
  },
  en: {
    brand: 'SearchHub',
    searchPlaceholder: 'Search...',
    mainSearchPlaceholder: 'What are you looking for?',
    searchButton: 'Search',
    discoverTitle: 'Discover Amazing Content',
    discoverSubtitle: 'Start exploring amazing content here',
    popularCategories: 'Popular Categories',
    categories: ['Technology', 'Design', 'Business', 'Education'],
    categoryDesc: 'Explore',
    categoryDescSuffix: 'related content',
    trendingNow: 'Trending Now',
    trendingItem: 'Trending Item',
    trendingDesc: 'Brief description of the trending item',
    copyright: 'All rights reserved',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
    home: 'Home',
    welcome: 'Welcome',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
  }
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [user, setUser] = useState(authService.getCurrentUser());
  const t = translations[language];

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    window.location.href = '/'; // 登出后重定向到首页
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* 导航栏 */}
        <header className="fixed w-full bg-white border-b z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {t.brand}
                </h1>
              </Link>
              <nav className="flex items-center space-x-6">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  {t.home}
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="bg-white text-gray-700 border hover:bg-gray-50"
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              >
                {language === 'zh' ? 'EN' : '中文'}
              </Button>
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {t.welcome}, {user.user.username}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={handleLogout}
                  >
                    {t.logout}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button size="sm" className="bg-white text-gray-700 border hover:bg-gray-50" asChild>
                    <Link to="/login">{t.login}</Link>
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/register">{t.register}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* 主要内容区域 */}
        <Routes>
          <Route path="/" element={
            <main className="flex-1 pt-16">
              {/* 搜索区域 */}
              <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {t.discoverTitle}
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    {t.discoverSubtitle}
                  </p>
                  <div className="max-w-2xl mx-auto">
                    <div className="flex gap-2 rounded-lg bg-white border">
                      <Input
                        type="text"
                        placeholder={t.mainSearchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-12 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
                        {t.searchButton}
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 分类区域 */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">{t.popularCategories}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.categories.map((category) => (
                      <Card key={category} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <CardHeader className="p-8">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {category}
                          </CardTitle>
                          <p className="mt-2 text-gray-600">
                            {t.categoryDesc} {category} {t.categoryDescSuffix}
                          </p>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* 热门推荐 */}
              <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">{t.trendingNow}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Card key={item} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {t.trendingItem} {item}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{t.trendingDesc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          } />
          
          {/* 其他路由保持不变 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>

        {/* 页脚 */}
        <footer className="bg-white border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; 2024 {t.brand}. {t.copyright}
              </p>
              <nav className="flex items-center space-x-6 text-sm">
                <Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {t.about}
                </Link>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {t.privacy}
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {t.terms}
                </Link>
                <Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {t.contact}
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
