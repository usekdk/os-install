// 装机工具数据
const toolsData = [
  {
    id: 1,
    name: "AOMEI Backupper(傲梅轻松备份)",
    version: "8.0.0 技术师增强版",
    description: "提供极速系统、磁盘备份与一键还原，操作简便，可替代GHOST等工具。",
    downloadLink: " software/AOMEI-Backupper.html",
    compatibility: "Windows",
    icon: "images/software/傲梅轻松备份/logo.png",
    category: "备份与恢复",
    step: 1,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Perfect Backup",
    version: "3.5 官方中文版",
    description: "付费软件，可自动将重要文件备份至外部存储，支持多种备份模式，确保数据安全无虞。",
    downloadLink: "https://www.ventoy.net/cn/index.html",
    compatibility: "Windows",
    icon: "images/software/Perfect Backup/logo.png",
    category: "备份与恢复",
    step: 1,
    rating: 4.7,
    featured: false
  },
  {
    id: 3,
    name: "GoodSync",
    version: "12.6.8.8 解锁版",
    description: "凭借独特算法，实现多设备与云端间的文件实时同步与备份，确保数据一致。",
    downloadLink: "https://win32diskimager.org/",
    compatibility: "Windows",
    icon: "images/software/GoodSync/logo.png",
    category: "备份与恢复",
    step: 1,
    rating: 4.5,
    featured: false
  },
  {
    id: 4,
    name: "FirPE",
    version: "2.0.3",
    description: "一款基于U盘的便携式Windows PE工具，集成全面装机软件，系统安装维护高效便捷。",
    downloadLink: "https://www.diskgenius.cn/",
    compatibility: "Windows",
    icon: "images/software/FirPE/logo.png",
    category: "PE系统制作",
    step: 2,
    rating: 4.9,
    featured: true
  },
  {
    id: 5,
    name: "Ventoy",
    version: "1.1.07",
    description: "一款开源免费的多系统启动U盘工具，无需反复格式化，可直接通过菜单引导多个ISO镜像安装操作系统。",
    downloadLink: "https://gparted.org/",
    compatibility: "Windows",
    icon: "images/software/Ventoy/logo.png",
    category: "PE系统制作",
    step: 2,
    rating: 4.6,
    featured: false
  },
  {
    id: 6,
    name: "Rufus",
    version: "4.11 便携版",
    description: "一款免费开源的轻量级工具，能以极快速度制作USB启动盘，效率远超同类软件。",
    downloadLink: "https://www.partitionwizard.com/",
    compatibility: "Windows",
    icon: "images/software/Rufus/logo.png",
    category: "PE系统制作",
    step: 2,
    rating: 4.5,
    featured: false
  },
  {
    id: 7,
    name: "Windows 10",
    version: "22H2 官方原版",
    description: "内含版本：专业版、企业版、教育版、家庭版",
    downloadLink: "https://www.aomeitech.com/",
    compatibility: "X64",
    icon: "images/system/windows 10/logo.png",
    category: "Windows系统镜像文件",
    step: 3,
    rating: 4.7,
    featured: true
  },
  {
    id: 8,
    name: "Windows 11",
    version: "24H2 官方原版",
    description: "内含版本：专业版、企业版、教育版、家庭版",
    downloadLink: "https://www.aomeitech.com/",
    compatibility: "X64",
    icon: "images/system/windows 11/logo.png",
    category: "Windows系统镜像文件",
    step: 3,
    rating: 4.6,
    featured: true
  },
  {
    id: 9,
    name: "Windows 7",
    version: "2019 官方原版",
    description: "内含版本：旗舰版、企业版、教育版、家庭版",
    downloadLink: "https://www.aomeitech.com/",
    compatibility: "X64",
    icon: "images/system/windows 7/logo.png",
    category: "Windows系统镜像文件",
    step: 3,
    rating: 4.6,
    featured: false
  },
  {
    id: 10,
    name: "HEU KMS Activator",
    version: "63.3.0",
    description: "一款离线的绿色激活工具，可一键自动激活Windows与Office，安全无残留。",
    downloadLink: "https://sdi-tool.org/",
    compatibility: "Windows",
    icon: "images/software/HEU KMS Activator/logo.png",
    category: "系统激活",
    step: 4,
    rating: 4.7,
    featured: true
  },
  {
    id: 11,
    name: "AAct",
    version: "4.2.8 便携版",
    description: "一款绿色免费的KMS激活工具，可一键激活Windows/Office，体积小巧且无文件残留。",
    downloadLink: "https://sdi-tool.org/",
    compatibility: "Windows",
    icon: "images/software/AAct/logo.png",
    category: "系统激活",
    step: 4,
    rating: 4.5,
    featured: false
  },
  {
    id: 12,
    name: "360驱动大师（万能网卡版）",
    version: "2.0.0.2050 绿色便携版",
    description: "360驱动大师具备海量驱动库，支持一键安装与更新，并能精准识别硬件、检测假设备。",
    downloadLink: "https://www.wopti.net/",
    compatibility: "Windows",
    icon: "images/software/360驱动大师（万能网卡版）/logo.png",
    category: "驱动下载",
    step: 5,
    rating: 4.7,
    featured: true
  },
  {
    id: 13,
    name: "Driver Talent（驱动人生海外版）",
    version: "8.1.11.58 专业汉化版",
    description: "Driver Talent是驱动人生海外版，专业管理电脑驱动，纯净无广告，体验纯粹高效。",
    downloadLink: "https://www.wopti.net/",
    compatibility: "Windows",
    icon: "images/software/Driver Talent（驱动人生海外版）/logo.png",
    category: "驱动下载",
    step: 5,
    rating: 4.5,
    featured: false
  },
  {
    id: 14,
    name: "IObit Driver Booster Pro",
    version: "13.1.0.171 便携修改版",
    description: "一款免费驱动更新工具，可自动扫描并一键升级驱动程序，有效预防系统故障。",
    downloadLink: "https://www.wopti.net/",
    compatibility: "Windows",
    icon: "images/software/IObit Driver Booster Pro/logo.png",
    category: "驱动下载",
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
    (tool.icon.match(/\.(png|jpg|jpeg|gif|svg)$/) ? 
      '<img src="' + tool.icon + '" alt="' + tool.name + ' icon" class="w-full h-full object-contain rounded">' : 
      '<i class="fa ' + tool.icon + '"></i>') +
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
    '<a href="' + tool.downloadLink + '" target="_blank" class="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">查看详情</a>' +
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