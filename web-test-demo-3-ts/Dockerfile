# 使用 nginx:alpine 作为基础镜像
# alpine 版本更轻量，镜像体积更小
FROM nginx:alpine

# 将构建好的静态文件复制到 nginx 的默认网站目录
COPY build /usr/share/nginx/html

# 声明容器将监听的端口号
EXPOSE 80

# 启动 nginx
# -g 表示全局配置
# "daemon off;" 保持 nginx 在前台运行，不要作为守护进程
CMD ["nginx", "-g", "daemon off;"]
