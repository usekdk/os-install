/**
 * 好站分享页面控制脚本
 * 包含站点数据和交互功能 - 修复版本
 */

// 站点数据 - 修复版本，确保与初始化函数兼容
const sites = [
    {
        name: 'Canva',
        description: '免费设计工具，轻松创建专业设计',
        url: 'https://www.canva.com',
        category: '设计素材',
        icon: 'fa-paint-brush',
        iconClass: 'fa-paint-brush',
        iconBgColor: 'bg-purple-100',
        iconColor: 'text-purple-600',
        badgeBgColor: 'bg-purple-100',
        badgeTextColor: 'text-purple-700',
        categoryName: '设计素材'
    },
    {
        name: 'Coursera',
        description: '全球顶尖大学和机构提供的在线课程',
        url: 'https://www.coursera.org',
        category: '教育学习',
        icon: 'fa-graduation-cap',
        iconClass: 'fa-graduation-cap',
        iconBgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        badgeBgColor: 'bg-yellow-100',
        badgeTextColor: 'text-yellow-700',
        categoryName: '教育学习'
    },
    {
        name: 'Unsplash',
        description: '高质量免费图片库',
        url: 'https://www.unsplash.com',
        category: '设计素材',
        icon: 'fa-camera',
        iconClass: 'fa-camera',
        iconBgColor: 'bg-purple-100',
        iconColor: 'text-purple-600',
        badgeBgColor: 'bg-purple-100',
        badgeTextColor: 'text-purple-700',
        categoryName: '设计素材'
    },
    {
        name: 'GitHub',
        description: '全球最大的代码托管平台',
        url: 'https://www.github.com',
        category: '开发资源',
        icon: 'fa-github',
        iconClass: 'fa-github',
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        badgeBgColor: 'bg-green-100',
        badgeTextColor: 'text-green-700',
        categoryName: '开发资源'
    },
    {
        name: 'Notion',
        description: '集知识库、笔记、任务管理于一体',
        url: 'https://www.notion.so',
        category: '效率工具',
        icon: 'fa-file-text-o',
        iconClass: 'fa-file-text-o',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        badgeBgColor: 'bg-blue-100',
        badgeTextColor: 'text-blue-700',
        categoryName: '效率工具'
    },
    {
        name: 'Figma',
        description: '在线设计协作工具',
        url: 'https://www.figma.com',
        category: '设计素材',
        icon: 'fa-cube',
        iconClass: 'fa-cube',
        iconBgColor: 'bg-purple-100',
        iconColor: 'text-purple-600',
        badgeBgColor: 'bg-purple-100',
        badgeTextColor: 'text-purple-700',
        categoryName: '设计素材'
    },
    {
        name: 'Google Drive',
        description: '云端存储与文件协作平台',
        url: 'https://www.drive.google.com',
        category: '效率工具',
        icon: 'fa-cloud',
        iconClass: 'fa-cloud',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        badgeBgColor: 'bg-blue-100',
        badgeTextColor: 'text-blue-700',
        categoryName: '效率工具'
    },
    {
        name: 'Stack Overflow',
        description: '程序员问答社区',
        url: 'https://stackoverflow.com',
        category: '开发资源',
        icon: 'fa-stack-overflow',
        iconClass: 'fa-stack-overflow',
        iconBgColor: 'bg-orange-100',
        iconColor: 'text-orange-600',
        badgeBgColor: 'bg-orange-100',
        badgeTextColor: 'text-orange-700',
        categoryName: '开发资源'
    },
    {
        name: 'Wikipedia',
        description: '自由的百科全书',
        url: 'https://www.wikipedia.org',
        category: '学习资源',
        icon: 'fa-wikipedia-w',
        iconClass: 'fa-wikipedia-w',
        iconBgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        badgeBgColor: 'bg-yellow-100',
        badgeTextColor: 'text-yellow-700',
        categoryName: '学习资源'
    }
];

// 导出必要的函数和数据供外部使用
window.SiteShare = {
  initialize,
  renderSiteCards,
  sites,
  initializeCategoryTabs,
  initializeLoadMore
};

// 页面加载完成后执行的主函数 - 简化版本
function initialize() {
  console.log('====== 初始化开始 ======');
  
  try {
    // 先检查站点数据
    console.log(`站点数据: ${sites && Array.isArray(sites) ? sites.length : '无效'} 个站点`);
    
    // 直接渲染站点卡片
    console.log('执行renderSiteCards...');
    renderSiteCards('all');
    
    // 尝试初始化其他功能
    try {
      if (typeof initializeCategoryTabs === 'function') {
        console.log('执行initializeCategoryTabs...');
        initializeCategoryTabs();
      }
      
      if (typeof initializeLoadMore === 'function') {
        console.log('执行initializeLoadMore...');
        initializeLoadMore();
      }
      
      if (typeof initializeNavbar === 'function') {
        console.log('执行initializeNavbar...');
        initializeNavbar();
      }
    } catch (err) {
      console.warn('初始化辅助功能出错，但不影响主要功能:', err);
    }
    
    console.log('====== 初始化完成 ======');
  } catch (error) {
    console.error('初始化出错:', error);
  }
}

// 初始化导航栏功能
function initializeNavbar() {
  // 移动端菜单切换
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }
  
  // 滚动导航栏效果
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
      } else {
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('shadow-md');
      }
    }
  });
}

function renderSiteCards(filterCategory = 'all') {
  console.log(`====== 渲染站点卡片 ======`);
  console.log(`当前分类: ${filterCategory}`);
  
  // 使用新的ID选择器获取网格容器
  const gridContainer = document.querySelector('#site-cards-grid');
  
  if (!gridContainer) {
    console.error('严重错误：未找到站点卡片网格容器！');
    return;
  }
  
  console.log('成功找到网格容器');
  
  // 检查站点数据
  console.log(`站点数据类型: ${typeof sites}, 长度: ${sites && Array.isArray(sites) ? sites.length : '无效'}`);
  
  // 清空容器
  gridContainer.innerHTML = '';
  console.log('容器已清空');
  
  // 确保sites是数组
  if (!Array.isArray(sites)) {
    console.error('站点数据不是有效的数组!');
    return;
  }
  
  // 分类映射 - 解决HTML英文分类和JS中文分类不匹配的问题
  const categoryMap = {
    'design': '设计素材',
    'education': '学习资源',
    'development': '开发资源',
    'system': '效率工具',
    'utilities': '效率工具',
    'video': '影视大全',
  };
  
  // 获取实际要筛选的分类值
  const actualCategory = categoryMap[filterCategory] || filterCategory;
  console.log(`实际筛选分类: ${actualCategory}`);
  
  // 筛选要显示的站点
  console.log(`开始筛选站点，总站点数: ${sites.length}`);
  let filteredSites = sites;
  
  if (actualCategory && actualCategory !== 'all') {
    filteredSites = sites.filter(site => {
      // 检查多种可能的分类字段
      const hasCategory = site.category === actualCategory || site.categoryName === actualCategory;
      console.log(`站点 ${site.name} 分类[${site.category}] 匹配: ${hasCategory}`);
      return hasCategory;
    });
  }
  
  console.log(`筛选出${filteredSites.length}个站点`);
  
  // 遍历筛选后的站点数据并渲染卡片
  filteredSites.forEach((site, index) => {
    try {
      const card = createSiteCardElement(site, index);
      gridContainer.appendChild(card);
      console.log(`已添加站点: ${site.name}`);
    } catch (err) {
      console.error(`添加站点 ${site.name} 失败:`, err);
    }
  });
  
  // 初始化卡片动画效果
  initializeCardAnimations();
  
  console.log('站点卡片渲染完成');
}

// 创建单个站点卡片元素 - 简化版本确保兼容性
function createSiteCardElement(site, index) {
    console.log(`创建卡片元素: ${site.name}`);
    const card = document.createElement('div');
    
    // 确保包含所有必要的类
    card.className = 'site-card bg-white rounded-xl shadow-md overflow-hidden p-6';
    
    // 使用正确的属性名称，确保属性存在
    const iconBgColor = site.iconBgColor || 'bg-blue-100';
    const iconColor = site.iconColor || 'text-blue-600';
    const iconClass = site.iconClass || site.icon || 'fa-globe';
    const badgeBgColor = site.badgeBgColor || 'bg-gray-100';
    const badgeTextColor = site.badgeTextColor || 'text-gray-600';
    const categoryName = site.categoryName || site.category || '未分类';
    
    // 设置卡片HTML内容
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center ${iconColor}">
            <i class="fa ${iconClass}"></i>
          </div>
          <h3 class="font-semibold text-lg">${site.name || '未命名站点'}</h3>
        </div>
        <span class="px-3 py-1 ${badgeBgColor} ${badgeTextColor} rounded-full text-xs">${categoryName}</span>
      </div>
      <p class="text-gray-600 mb-4">${site.description || ''}</p>
      <a href="${site.url || '#'}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
        <span>访问网站</span>
        <i class="fa fa-external-link ml-2 text-sm"></i>
      </a>
    `;
    
    // 添加索引和分类属性
    card.setAttribute('data-category', site.category || '未分类');
    card.setAttribute('data-index', index);
    
    return card;
}

// 初始化卡片动画
function initializeCardAnimations() {
  // 为所有网站卡片的链接添加平滑的悬停效果
  const siteLinks = document.querySelectorAll('.site-card a');
  siteLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
}

// 初始化分类标签切换功能
function initializeCategoryTabs() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有标签的active类
      categoryTabs.forEach(t => {
        t.classList.remove('active');
        t.classList.add('bg-gray-200');
      });

      // 为当前点击的标签添加active类
      this.classList.add('active');
      this.classList.remove('bg-gray-200');

      // 获取要显示的分类
      const category = this.getAttribute('data-category');
      
      // 调用渲染函数显示对应分类的站点
      renderSiteCards(category);
    });
  });
}

// 初始化加载更多功能
function initializeLoadMore() {
  const loadMoreButton = document.getElementById('load-more');
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function() {
      // 模拟加载更多功能
      this.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 加载中...';
      
      setTimeout(() => {
        // 这里可以添加实际的加载更多逻辑
        this.innerHTML = '加载更多网站';
        this.disabled = true;
        this.classList.add('opacity-50', 'cursor-not-allowed');
        this.innerText = '没有更多网站了';
      }, 1500);
    });
  }
}

// 导出必要的函数和数据供外部使用
window.SiteShare = {
  initialize,
  renderSiteCards,
  sites,
  initializeCategoryTabs,
  initializeLoadMore
};

// 初始化逻辑 - 简化但更可靠的方法
console.log('sites-share.js 脚本加载完成');

// 简单直接的初始化函数
function initSitesShare() {
    console.log('====== Sites Share 初始化开始 ======');
    
    try {
        // 检查站点数据
        console.log(`站点数据数量: ${sites && Array.isArray(sites) ? sites.length : '无效'}`);
        
        // 检查网格容器
        const gridContainer = document.querySelector('#site-cards-grid');
        console.log('网格容器:', gridContainer ? '找到' : '未找到');
        
        // 如果找到了网格容器，直接渲染
        if (gridContainer && sites && sites.length > 0) {
            console.log('✓ 所有必要元素都已准备好');
            
            // 直接执行关键功能
            console.log('执行initializeNavbar...');
            initializeNavbar();
            
            console.log('执行initializeCategoryTabs...');
            initializeCategoryTabs();
            
            console.log('执行initializeLoadMore...');
            initializeLoadMore();
            
            console.log('执行renderSiteCards...');
            renderSiteCards('all');
            
            console.log('====== 初始化成功完成 ======');
        } else {
            console.log('某些元素未准备好，稍后重试');
            setTimeout(initSitesShare, 100);
        }
    } catch (error) {
        console.error('初始化出错:', error);
    }
}

// 最可靠的初始化方式 - 立即执行并设置定时器重复执行几次
initSitesShare();
setTimeout(initSitesShare, 100);
setTimeout(initSitesShare, 300);
setTimeout(initSitesShare, 500);

// 同时监听事件作为保障
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded事件触发');
    initSitesShare();
});

window.addEventListener('load', () => {
    console.log('window.load事件触发');
    initSitesShare();
});