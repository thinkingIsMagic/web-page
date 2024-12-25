import './App.css';

function App() {
  const features = [
    {
      title: "数据分析",
      description: "强大的数据分析工具，帮助您洞察业务趋势",
      icon: "📊",
      color: "#4CAF50"
    },
    {
      title: "智能助手",
      description: "AI驱动的智能助手，提供24/7服务支持",
      icon: "🤖",
      color: "#2196F3"
    },
    {
      title: "安全防护",
      description: "全方位的安全防护系统，保护您的数据安全",
      icon: "🛡️",
      color: "#FF5722"
    },
    {
      title: "云端存储",
      description: "高效可靠的云端存储解决方案",
      icon: "☁️",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>创新科技解决方案</h1>
        <p className="header-subtitle">为您的业务提供全方位的智能服务</p>
      </header>
      <main>
        <div className="features-container">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{'--card-color': feature.color}}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <button className="feature-button">了解更多</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
