// 好软分享页面的JavaScript逻辑

// 软件数据结构
const softwareData = [
  // Windows软件
  {
    id: 1,
    name: "Google Chrome",
    version: "120.0.6099.199",
    description: "快速、安全的浏览器，支持扩展插件，提供丰富的功能和良好的兼容性。",
    downloadUrl: "software/google-chrome.html",
    icon: "https://picsum.photos/id/50/60/60",
    os: "windows"
  },
  {
    id: 2,
    name: "7-Zip",
    version: "23.01",
    description: "免费开源的文件压缩解压工具，支持多种压缩格式，压缩率高。",
    downloadUrl: "software/7-zip.html",
    icon: "https://picsum.photos/id/51/60/60",
    os: "windows"
  },
  {
    id: 3,
    name: "PotPlayer",
    version: "230807",
    description: "强大的视频播放器，支持几乎所有视频格式，界面简洁，功能丰富。",
    downloadUrl: "software/potplayer.html",
    icon: "https://picsum.photos/id/52/60/60",
    os: "windows"
  },
  {
    id: 4,
    name: "Everything",
    version: "1.4.1.1024",
    description: "快速文件搜索工具，基于文件名进行索引，搜索速度极快。",
    downloadUrl: "software/everything.html",
    icon: "https://picsum.photos/id/53/60/60",
    os: "windows"
  },
  
  // macOS软件
  {
    id: 5,
    name: "Alfred",
    version: "5.1.2",
    description: "macOS上的效率工具，提供快速启动、搜索、计算等多种功能。",
    downloadUrl: "software/alfred.html",
    icon: "https://picsum.photos/id/70/60/60",
    os: "macos"
  },
  {
    id: 6,
    name: "CleanMyMac X",
    version: "4.14.6",
    description: "macOS系统清理和优化工具，帮助释放存储空间，提高系统性能。",
    downloadUrl: "software/cleanmymac.html",
    icon: "https://picsum.photos/id/71/60/60",
    os: "macos"
  },
  {
    id: 7,
    name: "IINA",
    version: "1.3.3",
    description: "基于mpv的开源视频播放器，专为macOS设计，支持多种视频格式。",
    downloadUrl: "software/iina.html",
    icon: "https://picsum.photos/id/72/60/60",
    os: "macos"
  },
  
  // Linux软件
  {
    id: 8,
    name: "VLC Media Player",
    version: "3.0.18",
    description: "开源跨平台媒体播放器，支持几乎所有音频和视频格式。",
    downloadUrl: "software/vlc.html",
    icon: "https://picsum.photos/id/90/60/60",
    os: "linux"
  },
  {
    id: 9,
    name: "GIMP",
    version: "2.10.34",
    description: "免费开源的图像处理软件，功能强大，可与Photoshop相媲美。",
    downloadUrl: "software/gimp.html",
    icon: "https://picsum.photos/id/91/60/60",
    os: "linux"
  },
  
  // 跨平台软件
  {
    id: 10,
    name: "Visual Studio Code",
    version: "1.85.2",
    description: "轻量级但功能强大的代码编辑器，支持多种编程语言和扩展。",
    downloadUrl: "software/vscode.html",
    icon: "https://picsum.photos/id/100/60/60",
    os: "crossplatform"
  },
  {
    id: 11,
    name: "LibreOffice",
    version: "7.5.8",
    description: "免费开源的办公套件，包含Writer、Calc、Impress等组件。",
    downloadUrl: "software/libreoffice.html",
    icon: "https://picsum.photos/id/101/60/60",
    os: "crossplatform"
  },
  {
    id: 12,
    name: "Thunderbird",
    version: "115.6.0",
    description: "免费开源的电子邮件客户端，支持多个账户和日历功能。",
    downloadUrl: "software/thunderbird.html",
    icon: "https://picsum.photos/id/102/60/60",
    os: "crossplatform"
  }
];

// DOM元素
let softwareListContainer = null;
let osTabs = null;

// 初始化函数
function initSoftwareSharePage() {
  console.log('初始化好软分享页面...');
  
  // 获取DOM元素
  softwareListContainer = document.getElementById('software-list');
  osTabs = document.querySelectorAll('.os-tab');
  
  if (!softwareListContainer || !osTabs.length) {
    console.error('无法找到必要的DOM元素');
    return;
  }
  
  // 绑定选项卡点击事件
  osTabs.forEach(tab => {
    tab.addEventListener('click', handleOsTabClick);
  });
  
  // 初始渲染所有软件
  renderSoftwareByOs('all');
}

// 处理操作系统选项卡点击
function handleOsTabClick(event) {
  const selectedOs = event.target.getAttribute('data-os');
  
  // 更新选项卡样式
  osTabs.forEach(tab => {
    tab.classList.remove('active', 'bg-primary', 'text-white');
    tab.classList.add('bg-gray-100', 'text-gray-700');
  });
  
  event.target.classList.add('active', 'bg-primary', 'text-white');
  event.target.classList.remove('bg-gray-100', 'text-gray-700');
  
  // 渲染对应操作系统的软件
  renderSoftwareByOs(selectedOs);
}

// 按操作系统渲染软件列表
function renderSoftwareByOs(osType) {
  console.log(`渲染${osType}软件`);
  
  // 过滤软件数据
  let filteredSoftware = [];
  
  if (osType === 'all') {
    filteredSoftware = softwareData;
  } else {
    filteredSoftware = softwareData.filter(software => software.os === osType);
  }
  
  // 生成HTML
  let html = '';
  
  if (filteredSoftware.length === 0) {
    html = generateNoSoftwareHtml();
  } else {
    html = generateSoftwareListHtml(filteredSoftware);
  }
  
  // 添加淡入效果
  softwareListContainer.style.opacity = '0';
  
  setTimeout(() => {
    softwareListContainer.innerHTML = html;
    softwareListContainer.style.transition = 'opacity 0.3s ease-in-out';
    softwareListContainer.style.opacity = '1';
    
    // 为刚渲染的下载按钮添加动画效果
    const downloadButtons = softwareListContainer.querySelectorAll('.download-btn');
    downloadButtons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.opacity = '1';
      }, 100 * index);
    });
  }, 200);
}

// 生成没有软件时的HTML
function generateNoSoftwareHtml() {
  return `
    <div class="text-center py-16">
      <i class="fa fa-folder-open-o text-5xl text-gray-300 mb-4"></i>
      <h3 class="text-xl font-medium text-gray-500">暂无相关软件</h3>
      <p class="text-gray-400 mt-2">该分类下暂时没有推荐的软件</p>
    </div>
  `;
}

// 生成软件列表HTML
function generateSoftwareListHtml(softwareList) {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      ${softwareList.map(software => generateSoftwareCardHtml(software)).join('')}
    </div>
  `;
}

// 生成软件卡片HTML
function generateSoftwareCardHtml(software) {
  const osBadge = generateOsBadge(software.os);
  
  return `
    <div class="software-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
      <div class="p-5">
        <div class="flex items-start mb-4">
          <img src="${software.icon}" alt="${software.name}" class="w-14 h-14 rounded-lg mr-4 object-cover">
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold text-lg">${software.name}</h3>
              ${osBadge}
            </div>
            <p class="text-sm text-gray-500 mt-1">版本 ${software.version}</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm mb-4">${software.description}</p>
        <div class="flex justify-between items-center">
          <span class="text-xs text-gray-500">${getOsName(software.os)}</span>
          <a href="${software.downloadUrl}" class="download-btn inline-flex items-center justify-center py-1.5 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-all duration-300 opacity-0">
            查看详情
          </a>
        </div>
      </div>
    </div>
  `;
}

// 生成操作系统徽章
function generateOsBadge(osType) {
  const badges = {
    windows: '<span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Windows</span>',
    macos: '<span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">macOS</span>',
    linux: '<span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Linux</span>',
    crossplatform: '<span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">跨平台</span>'
  };
  
  return badges[osType] || '';
}

// 获取操作系统名称
function getOsName(osType) {
  const osNames = {
    windows: 'Windows系统',
    macos: 'macOS系统',
    linux: 'Linux系统',
    crossplatform: '全平台支持'
  };
  
  return osNames[osType] || '未知平台';
}

// 移动端菜单切换
function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // 更改图标
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });
  }
}

// 滚动效果 - 导航栏
function setupNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
      } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('shadow-sm');
      }
    });
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initSoftwareSharePage();
    setupMobileMenu();
    setupNavbarScrollEffect();
  });
} else {
  initSoftwareSharePage();
  setupMobileMenu();
  setupNavbarScrollEffect();
}