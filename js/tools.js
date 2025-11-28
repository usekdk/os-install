// 装机工具数据
const toolsData = [
  {
    id: 1,
    name: "Rufus",
    version: "4.4",
    description: "轻量级、高性能的启动盘创建工具，支持多种操作系统ISO镜像",
    downloadLink: "https://rufus.ie/zh/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-usb",
    category: "启动盘制作",
    step: 1,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Ventoy",
    version: "1.0.97",
    description: "多系统启动U盘解决方案，支持同时放置多个不同的ISO镜像",
    downloadLink: "https://www.ventoy.net/cn/index.html",
    compatibility: "Windows/Linux/macOS",
    icon: "fa-server",
    category: "启动盘制作",
    step: 1,
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    name: "Win32 Disk Imager",
    version: "1.0.0",
    description: "简单易用的镜像写入工具，适合写入各种系统镜像到U盘或SD卡",
    downloadLink: "https://win32diskimager.org/",
    compatibility: "Windows XP/Vista/7/8/10",
    icon: "fa-hdd-o",
    category: "启动盘制作",
    step: 1,
    rating: 4.5,
    featured: false
  },
  {
    id: 4,
    name: "DiskGenius",
    version: "5.4.6",
    description: "专业的磁盘分区与数据恢复软件，支持各种分区格式和系统环境",
    downloadLink: "https://www.diskgenius.cn/",
    compatibility: "Windows/Linux/WinPE",
    icon: "fa-pie-chart",
    category: "磁盘分区",
    step: 2,
    rating: 4.9,
    featured: true
  },
  {
    id: 5,
    name: "GParted",
    version: "1.5.0",
    description: "强大的分区编辑器，支持多种文件系统，可通过Live CD使用",
    downloadLink: "https://gparted.org/",
    compatibility: "Linux/Windows（通过Live CD）",
    icon: "fa-sliders",
    category: "磁盘分区",
    step: 2,
    rating: 4.6,
    featured: false
  },
  {
    id: 6,
    name: "MiniTool Partition Wizard",
    version: "12.7",
    description: "功能全面的分区管理工具，支持无损分区调整和数据迁移",
    downloadLink: "https://www.partitionwizard.com/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-th-large",
    category: "磁盘分区",
    step: 2,
    rating: 4.5,
    featured: false
  },
  {
    id: 7,
    name: "AOMEI Backupper",
    version: "7.3.0",
    description: "全面的备份和恢复解决方案，支持系统克隆、分区备份等功能",
    downloadLink: "https://www.aomeitech.com/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-database",
    category: "系统备份/恢复",
    step: 3,
    rating: 4.7,
    featured: true
  },
  {
    id: 8,
    name: "Macrium Reflect",
    version: "8.1.7053",
    description: "可靠的磁盘镜像和克隆工具，提供免费版和专业版",
    downloadLink: "https://www.macrium.com/reflectfree",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-refresh",
    category: "系统备份/恢复",
    step: 3,
    rating: 4.6,
    featured: false
  },
  {
    id: 9,
    name: "Driver Booster",
    version: "10.6",
    description: "自动扫描并更新过期驱动，支持离线驱动备份和恢复",
    downloadLink: "https://www.iobit.com/zh/driver-booster.php",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-car",
    category: "驱动管理",
    step: 4,
    rating: 4.5,
    featured: true
  },
  {
    id: 10,
    name: "Snappy Driver Installer",
    version: "1.20.3",
    description: "开源的驱动管理工具，可离线使用，支持大量硬件设备",
    downloadLink: "https://sdi-tool.org/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-cogs",
    category: "驱动管理",
    step: 4,
    rating: 4.4,
    featured: false
  },
  {
    id: 11,
    name: "CCleaner",
    version: "6.21",
    description: "经典的系统清理和优化工具，安全删除垃圾文件和注册表项",
    downloadLink: "https://www.ccleaner.com/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-broom",
    category: "系统优化",
    step: 5,
    rating: 4.3,
    featured: true
  },
  {
    id: 12,
    name: "Windows 优化大师",
    version: "9.78",
    description: "国产专业系统优化工具，提供全面的系统设置和优化选项",
    downloadLink: "https://www.wopti.net/",
    compatibility: "Windows 7/8/10/11",
    icon: "fa-tachometer",
    category: "系统优化",
    step: 5,
    rating: 4.4,
    featured: false
  }
];

// 生成评分星星
function generateRatingStars(rating) {
  console.log('生成评分星星:', rating);
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // 全星
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fa fa-star text-yellow-400"></i>';
  }
  
  // 半星
  if (hasHalfStar) {
    stars += '<i class="fa fa-star-half-o text-yellow-400"></i>';
  }
  
  // 空星
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="fa fa-star-o text-yellow-400"></i>';
  }
  
  return stars;
}

// 渲染单个工具卡片
function renderToolCard(tool) {
  console.log('渲染工具卡片:', tool.name);
  return '<div class="tool-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">' +
    '<div class="p-5">' +
    '<div class="flex items-center mb-4">' +
    '<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl mr-4">' +
    '<i class="fa ' + tool.icon + '"></i>' +
    '</div>' +
    '<div>' +
    '<h3 class="font-bold text-lg text-gray-800">' + tool.name + '</h3>' +
    '<span class="text-sm text-gray-500">v' + tool.version + '</span>' +
    '</div>' +
    '</div>' +
    '<div class="mb-3 flex items-center text-sm">' +
    generateRatingStars(tool.rating) +
    '<span class="ml-2 text-gray-600">' + tool.rating + '</span>' +
    '</div>' +
    '<p class="text-gray-600 text-sm mb-4 line-clamp-2">' + tool.description + '</p>' +
    '<div class="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">' +
    '<span class="bg-gray-100 px-2 py-1 rounded-full">' + tool.compatibility + '</span>' +
    '<span class="bg-gray-100 px-2 py-1 rounded-full">步骤 ' + tool.step + '</span>' +
    (tool.featured ? '<span class="bg-primary/10 text-primary px-2 py-1 rounded-full">推荐</span>' : '') +
    '</div>' +
    '<a href="' + tool.downloadLink + '" target="_blank" class="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">下载</a>' +
    '</div>' +
    '</div>';
}

// 按步骤分组渲染工具
function renderToolsByStep(tools) {
  console.log('按步骤分组渲染工具，工具数量:', tools.length);
  // 按步骤分组
  const toolsByStep = tools.reduce((acc, tool) => {
    if (!acc[tool.step]) {
      acc[tool.step] = [];
    }
    acc[tool.step].push(tool);
    return acc;
  }, {});
  
  // 获取步骤顺序
  const steps = Object.keys(toolsByStep).sort((a, b) => parseInt(a) - parseInt(b));
  
  let html = '';
  
  // 为每个步骤渲染工具列表
  steps.forEach(step => {
    console.log('渲染步骤:', step);
    // 获取该步骤的分类
    const category = toolsByStep[step][0].category;
    
    html += '<div class="mb-12">' +
      '<div class="flex items-center mb-4">' +
      '<div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-2">' + step + '</div>' +
      '<h2 class="text-xl font-bold text-gray-800">' + category + '工具</h2>' +
      '</div>' +
      '<div class="h-1 w-full bg-gradient-to-r from-primary/30 to-transparent mb-6"></div>' +
      '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">';
    
    // 渲染该步骤的工具卡片
    toolsByStep[step].forEach(tool => {
      html += renderToolCard(tool);
    });
    
    html += '</div></div>';
  });
  
  return html;
}

// 初始化工具页面
function initToolsPage() {
  console.log('初始化装机工具页面...');
  
  try {
    // 先检查工具容器是否存在
    const toolsContainer = document.getElementById('tools-container');
    
    if (!toolsContainer) {
      console.error('错误: 未找到工具容器元素');
      return;
    }
    
    console.log('工具容器已找到，设置加载提示...');
    // 设置加载提示
    toolsContainer.innerHTML = '<div class="text-center py-12 text-gray-500 loading-indicator"> <i class="fa fa-spinner fa-spin text-primary mr-2"></i> 正在加载装机工具列表... </div>';
    
    // 立即执行渲染，不使用延迟
    console.log('准备渲染工具列表...');
    
    // 尝试渲染工具列表
    try {
      const toolsHtml = renderToolsByStep(toolsData);
      console.log('工具列表渲染完成，开始更新DOM...');
      // 直接更新容器内容
      toolsContainer.innerHTML = toolsHtml;
      console.log('装机工具列表加载完成并显示');
    } catch (renderError) {
      console.error('渲染工具列表时出错:', renderError);
      toolsContainer.innerHTML = '<div class="text-center py-12 text-red-500">渲染装机工具失败，请刷新页面重试</div>';
    }
    
  } catch (error) {
    console.error('初始化装机工具页面时出错:', error);
    const toolsContainer = document.getElementById('tools-container');
    if (toolsContainer) {
      toolsContainer.innerHTML = '<div class="text-center py-12 text-red-500">加载装机工具失败，请刷新页面重试</div>';
    }
  }
}

// 页面加载完成后初始化
console.log('tools.js 已加载，等待DOM完成...');
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM已加载完成，立即初始化工具页面...');
  // 立即调用，不使用延迟
  initToolsPage();
});