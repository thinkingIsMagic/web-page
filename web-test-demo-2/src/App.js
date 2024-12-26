import './App.css';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: '常用工具', links: ['文档编辑', '图片处理', '文件转换'] },
    { name: '学习资源', links: ['在线课程', '技术文档', '教程'] },
    { name: '娱乐放松', links: ['音乐', '视频', '游戏'] },
  ];

  const hotResources = [
    { 
      name: 'ChatGPT', 
      url: 'https://chat.openai.com', 
      icon: 'https://chat.openai.com/favicon.ico'
    },
    { 
      name: '掘金', 
      url: 'https://juejin.cn', 
      icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com', 
      icon: 'https://github.com/favicon.ico'
    },
    { 
      name: 'Figma', 
      url: 'https://www.figma.com', 
      icon: 'https://www.figma.com/favicon.ico'
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // 可以添加搜索逻辑
      console.log('搜索:', searchQuery);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>
          <span className="title-icon">😊</span>
          网址导航
        </h1>
      </header>
      
      <main className="main-content">
        {/* 搜索框部分 */}
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索网站..."
            className="search-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button 
            className="search-button"
            onClick={handleSearch}
          >
            搜索
          </button>
        </div>

        {/* 热门资源部分 */}
        <section className="hot-resources">
          <h2 className="section-title">热门推荐</h2>
          <div className="resources-grid">
            {hotResources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.url} 
                className="resource-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={resource.icon} 
                  alt={resource.name}
                  className="resource-icon"
                  onError={(e) => {
                    // 如果图标加载失败显示默认文本图标
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="resource-icon-fallback" style={{display: 'none'}}>
                  {resource.name[0]}
                </span>
                <span className="resource-name">{resource.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 分类导航部分 */}
        <section className="categories">
          <h2 className="section-title">分类导航</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>
                  {category.name}
                  <span className={`category-tag tag-${category.name.toLowerCase()}`}>
                    {category.links.length}
                  </span>
                </h3>
                <ul>
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button 
                        className="link-button" 
                        onClick={() => {
                          // 处理点击事件
                        }}
                      >
                        {typeof link === 'object' ? link.name : link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 网址导航 - 让网络更简单</p>
      </footer>
    </div>
  );
}

export default App;
