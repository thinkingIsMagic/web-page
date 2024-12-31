import React, { useState } from 'react';
import { authService } from '../services/authService';
import '../styles/auth.css';

export const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.resetPassword(email);
      setSuccess(response.message);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || '发送重置邮件失败，请重试');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <h2>重置密码</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">邮箱:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">发送重置链接</button>
      </form>
      
      <div className="auth-links">
        <p>记起密码了? <a href="/login">返回登录</a></p>
      </div>
    </div>
  );
}; 