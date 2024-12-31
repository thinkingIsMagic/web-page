import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  }
}

interface RegisterResponse {
  message: string;
}

interface ResetPasswordResponse {
  message: string;
  token?: string;  // 仅在开发环境返回
}

export const authService = {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    });
    
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    return response.data;
  },

  async register(username: string, password: string, email: string): Promise<RegisterResponse> {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
      email
    });
    return response.data;
  },

  async resetPassword(email: string): Promise<ResetPasswordResponse> {
    const response = await axios.post(`${API_URL}/reset-password`, {
      email
    });
    return response.data;
  },

  logout(): void {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}; 