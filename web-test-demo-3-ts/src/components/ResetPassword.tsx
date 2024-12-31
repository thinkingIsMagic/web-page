import React, { useState } from 'react';
import { authService } from '../services/authService';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Input,
  Button,
  Alert,
  AlertDescription,
  Link
} from './ui';

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
    <div className="container flex items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">重置密码</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-6">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              发送重置链接
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center">
            记起密码了？
            <Link href="/login" className="ml-1">
              返回登录
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}; 