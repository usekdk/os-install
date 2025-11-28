# 系统安装一站式网站

这是一个提供详细操作系统安装教程、必备工具和优质软件推荐的网站，旨在让系统安装变得简单易懂。

## 项目功能

- 📚 详细的操作系统安装教程（Windows、macOS、Ubuntu等）
- 🛠️ 必备装机工具推荐和下载链接
- 💻 优质软件分享，包括系统必备和办公效率软件
- 📱 响应式设计，支持移动端和桌面端
- 🔍 搜索功能，方便快速查找内容

## 技术栈

- HTML5
- Tailwind CSS v3
- JavaScript
- Font Awesome
- Google Fonts

## 项目结构

```
/
├── index.html           # 首页
├── js/tailwind.config.js   # Tailwind配置文件
├── css/
│   └── custom-utilities.css  # 自定义工具类
├── js/
│   └── main.js          # JavaScript代码
├── images/              # 图片资源（预留目录）
└── README.md            # 项目说明
```

## 快速开始

### 本地开发

1. 克隆仓库
   ```bash
   git clone [仓库地址]
   cd [仓库名称]
   ```

2. 启动本地服务器（推荐使用VS Code的Live Server插件或Python简易服务器）
   ```bash
   # 使用Python 3
   python -m http.server 8000
   ```

3. 在浏览器中访问 `http://localhost:8000`

## GitHub Pages部署

1. 将代码推送到GitHub仓库

2. 开启GitHub Pages功能：
   - 进入仓库 → Settings → Pages
   - 选择 `main` 分支（或 `master` 分支）
   - 选择根目录 (`/ (root)`) 或 `docs` 文件夹
   - 点击 Save

3. 等待几分钟，GitHub Pages会自动构建并部署你的网站

4. 访问分配的URL（通常是 `https://[用户名].github.io/[仓库名]/`）

## 自定义配置

### 修改网站内容

1. 编辑 `index.html` 文件修改网站主要内容
2. 在 `js/tailwind.config.js` 中修改颜色方案和字体设置
3. 在 `css/custom-utilities.css` 中添加自定义工具类
4. 在 `js/main.js` 中修改交互逻辑

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进这个项目！

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

## 联系方式

如有问题或建议，请通过以下方式联系我们：
- GitHub: [github.com/sysinstall](https://github.com/sysinstall)
- 邮箱: contact@sysinstall.com