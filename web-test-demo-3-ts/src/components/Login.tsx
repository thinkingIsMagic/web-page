import React, { useState } from 'react';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.login(username, password);
      navigate('/dashboard'); // 登录成功后跳转到仪表板
    } catch (err: any) {
      setError(err.response?.data?.message || '登录失败，请重试');
    }
  };

  return (
    <div className="auth-container">
      <h2>用户登录</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">登录</button>
      </form>
      
      <div className="auth-links">
        <p>还没有账号? <a href="/register">立即注册</a></p>
        <p><a href="/reset-password">忘记密码?</a></p>
      </div>
    </div>
  );
}; 