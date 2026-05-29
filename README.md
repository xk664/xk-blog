# XK's Blogs

个人技术博客，用于展示技术笔记、面试经历、GitHub 项目和个人介绍。

## 技术栈

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Vue Router

## 项目结构

```
xk-blogs/
├── public/
│   ├── note/          # 笔记 Markdown 文件
│   ├── review/        # 面经 Markdown 文件
│   └── images/        # 图片资源
├── src/
│   ├── components/    # 组件
│   ├── composables/   # 组合式函数
│   ├── views/         # 页面
│   ├── data/          # 静态数据
│   ├── utils/         # 工具函数
│   └── router/        # 路由配置
├── scripts/           # 构建脚本
└── doc/               # 项目文档
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

## 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## Docker 部署

```bash
# 构建前端
npm run build

# 构建 Docker 镜像
docker build -t xk-blogs .

# 运行容器
docker run -d -p 80:80 xk-blogs
```

访问 http://localhost

## 功能模块

| 模块 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | Hero + 笔记预览 + 面经预览 + 项目预览 |
| 笔记 | `/notes` | 技术笔记列表 |
| 笔记详情 | `/notes/:id` | Markdown 渲染 + TOC 目录 |
| 面经 | `/reviews` | 面试经历列表 |
| 面经详情 | `/reviews/:id` | 面经内容展示 |
| 项目 | `/projects` | GitHub 项目展示 |
| 关于我 | `/about` | 技能栈 + 个人经历 |
