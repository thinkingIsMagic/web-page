# 前后端对接文档

## 基础信息

- 基础URL: `http://localhost:3000/api/auth`
- Content-Type: `application/json`
- 认证方式: Bearer Token

## 接口规范

### 1. 用户认证

#### 1.1 注册
- 请求方式：`POST /register`
- 请求体：
```json
{
    "username": "string",     // 用户名，长度3-50
    "password": "string",     // 密码，长度6-20
    "email": "string"        // 有效的邮箱地址
}
```
- 响应体：
```json
{
    "message": "注册成功"
}
```

#### 1.2 登录
- 请求方式：`POST /login`
- 请求体：
```json
{
    "username": "string",
    "password": "string"
}
```
- 响应体：
```json
{
    "message": "登录成功",
    "token": "string",
    "user": {
        "id": "number",
        "username": "string",
        "email": "string"
    }
}
```

#### 1.3 登出
- 请求方式：`POST /logout`
- 请求头：`Authorization: Bearer <token>`
- 响应体：
```json
{
    "message": "登出成功"
}
```

### 2. 用户信息

#### 2.1 获取用户信息
- 请求方式：`GET /user`
- 请求头：`Authorization: Bearer <token>`
- 响应体：
```json
{
    "user": {
        "id": "number",
        "username": "string",
        "email": "string",
        "status": "number",
        "createdAt": "string"
    }
}
```

### 3. 密码重置

#### 3.1 发送重置密码邮件
- 请求方式：`POST /reset-password`
- 请求体：
```json
{
    "email": "string"
}
```
- 响应体：
```json
{
    "message": "重置密码链接已发送到您的邮箱",
    "token": "string"  // 仅在开发环境返回
}
```

## 错误处理

### 错误响应格式
```json
{
    "message": "错误信息描述"
}
```

### 常见状态码
- 200: 请求成功
- 201: 创建成功
- 400: 请求参数错误
- 401: 未授权或token无效
- 404: 资源不存在
- 500: 服务器错误

### 特定错误信息
1. 登录相关：
   - "用户名或密码错误"
   - "用户已在其他地方登录"
   - "用户未登录，请重新登录"

2. 注册相关：
   - "用户名或邮箱已存在"

3. Token相关：
   - "未提供认证令牌"
   - "无效的认证令牌"
   - "无效的认证令牌格式"

## 安全建议

1. 所有请求都应使用 HTTPS
2. 密码传输前进行加密或哈希处理
3. 定期刷新 token
4. 敏感操作增加二次验证
5. 注意 XSS 和 CSRF 防护