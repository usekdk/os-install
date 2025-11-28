// 动态加载最新教程功能

// 导入guides.js中的数据（由于是静态文件，我们将复制必要的数据结构和函数）
// 教程数据 - 按发布时间倒序排列
const guidesData = [
  {
    id: 1,
    title: "Windows 11 2023 更新版本全新安装教程",
    date: "2023-11-15",
    description: "详细介绍Windows 11最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "https://picsum.photos/id/26/600/400",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326
  },
  {
    id: 2,
    title: "macOS Sonoma 升级与全新安装完整指南",
    date: "2023-11-10",
    description: "苹果最新macOS Sonoma系统的升级方法和全新安装教程，包含兼容性检查、数据备份、安装过程和常见问题解决方案。",
    thumbnail: "https://picsum.photos/id/27/600/400",
    category: "macOS",
    readCount: 8921,
    commentsCount: 189
  },
  {
    id: 3,
    title: "Ubuntu 22.04 LTS 长期支持版安装详解",
    date: "2023-11-05",
    description: "从制作启动盘到系统分区，再到软件配置的完整Ubuntu 22.04 LTS安装教程，让Linux新手也能轻松上手。",
    thumbnail: "https://picsum.photos/id/28/600/400",
    category: "Linux",
    readCount: 6754,
    commentsCount: 234
  }
];

// 格式化日期为中文显示格式
function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  } catch (error) {
    console.error('日期格式化错误:', error);
    return dateStr;
  }
}

// 格式化数字显示（添加千分位）
function formatNumber(num) {
  try {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    console.error('数字格式化错误:', error);
    return num;
  }
}

// 加载最新教程
function loadFeaturedGuides() {
  // 获取最新教程容器
  const guidesContainer = document.getElementById('featured-guides-container');
  
  // 检查容器是否存在
  if (!guidesContainer) {
    console.error('未找到featured-guides-container容器');
    return;
  }
  
  // 显示加载状态
  guidesContainer.innerHTML = '<div class="text-center py-12 text-gray-500">正在加载最新教程...</div>';
  
  try {
    // 确保数据存在且有内容
    if (!guidesData || guidesData.length === 0) {
      guidesContainer.innerHTML = '<div class="text-center py-12 text-gray-500">暂无教程数据</div>';
      return;
    }
    
    // 清空容器
    guidesContainer.innerHTML = '';
    
    // 只显示前三个教程
    const featuredGuides = guidesData.slice(0, 3);
    
    // 创建网格容器
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    
    // 渲染教程卡片
    featuredGuides.forEach((guide, index) => {
      const guideCard = document.createElement('article');
      guideCard.className = 'bg-white rounded-xl overflow-hidden shadow-sm hover-scale opacity-0 transform translate-y-4 transition-all duration-300';
      
      guideCard.innerHTML = `
        <div class="relative">
          <img src="${guide.thumbnail}" alt="${guide.title}" class="w-full h-48 object-cover">
          <span class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">${guide.category}</span>
        </div>
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-3">
            <span class="flex items-center"><i class="fa fa-calendar-o mr-2"></i>${formatDate(guide.date)}</span>
            <span class="flex items-center ml-4"><i class="fa fa-eye mr-2"></i>${formatNumber(guide.readCount)}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">${guide.title}</h3>
          <p class="text-gray-600 mb-4 line-clamp-3">${guide.description}</p>
          <a href="article.html?id=${guide.id}" class="inline-flex items-center text-primary font-medium hover:underline">
            阅读更多 <i class="fa fa-long-arrow-right ml-1"></i>
          </a>
        </div>
      `;
      
      gridContainer.appendChild(guideCard);
      
      // 添加淡入动画
      setTimeout(() => {
        guideCard.style.opacity = '1';
        guideCard.style.transform = 'translateY(0)';
      }, 150 * (index + 1));
    });
    
    // 添加查看全部按钮
    const viewAllButton = document.createElement('div');
    viewAllButton.className = 'lg:col-span-3 mt-2';
    viewAllButton.innerHTML = `
      <a href="guides.html" class="block text-center py-3 px-6 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors duration-300 w-full md:w-auto mx-auto">
        查看全部教程 <i class="fa fa-arrow-right ml-1"></i>
      </a>
    `;
    
    // 为查看全部按钮添加平滑滚动效果
    viewAllButton.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.location.href = href;
    });
    
    gridContainer.appendChild(viewAllButton);
    guidesContainer.appendChild(gridContainer);
    
  } catch (error) {
    console.error('加载教程失败:', error);
    guidesContainer.innerHTML = '<div class="text-center py-12 text-gray-500">加载教程时出错，请稍后重试</div>';
  }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFeaturedGuides);
} else {
  loadFeaturedGuides();
}