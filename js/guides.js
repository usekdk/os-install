// 教程数据 - 按发布时间倒序排列
const guidesData = [
  {
    id: 1,
    title: "Windows 11 2023 更新版本全新安装教程",
    date: "2023-11-15",
    description: "详细介绍Windows 11最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "images/index/article/1/封面.png",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326
  },
  {
    id: 2,
    title: "Windows 10 2025 安装教程",
    date: "2023-11-20",
    description: "详细介绍Windows 10最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "images/index/article/1/封面.png",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326
  },
];

// 每页显示的教程数量
const itemsPerPage = 6;
// 当前页码
let currentPage = 1;
// 筛选类别
let currentCategory = "全部";
// 排序方式
let currentSort = "最新发布";

// 格式化日期为中文显示格式
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

// 格式化数字显示（添加千分位）
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 根据当前筛选和排序条件获取教程数据
function getFilteredAndSortedGuides() {
  let filteredGuides = guidesData;
  
  // 按类别筛选
  if (currentCategory !== "全部") {
    filteredGuides = filteredGuides.filter(guide => guide.category === currentCategory);
  }
  
  // 排序
  if (currentSort === "最新发布") {
    // 已按发布日期降序排列，无需再次排序
  } else if (currentSort === "热门教程") {
    filteredGuides.sort((a, b) => b.commentsCount - a.commentsCount);
  } else if (currentSort === "浏览最多") {
    filteredGuides.sort((a, b) => b.readCount - a.readCount);
  }
  
  return filteredGuides;
}

// 渲染教程卡片
function renderGuides() {
  const guidesContainer = document.getElementById('guides-container');
  const filteredGuides = getFilteredAndSortedGuides();
  
  // 计算当前页显示的教程范围
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGuides = filteredGuides.slice(startIndex, endIndex);
  
  // 只在第一页时清空容器，加载更多时保留现有内容
  if (currentPage === 1) {
    guidesContainer.innerHTML = '';
  }
  
  // 渲染当前页的教程卡片
  currentGuides.forEach(guide => {
    const guideCard = document.createElement('div');
    guideCard.className = 'bg-white rounded-xl shadow-md overflow-hidden hover-scale transition-all duration-300';
    guideCard.innerHTML = `
      <div class="relative">
        <img src="${guide.thumbnail}" alt="${guide.title}" class="w-full h-49 object-cover">
        <span class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">${guide.category}</span>
      </div>
      <div class="p-5">
        <div class="flex items-center text-xs text-gray-500 mb-2">
          <span><i class="fa fa-calendar-o mr-1"></i>${formatDate(guide.date)}</span>
          <span class="mx-2">•</span>
          <span><i class="fa fa-eye mr-1"></i>${formatNumber(guide.readCount)}</span>
          <span class="mx-2">•</span>
          <span><i class="fa fa-comment-o mr-1"></i>${formatNumber(guide.commentsCount)}</span>
        </div>
        <h3 class="text-lg font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">${guide.title}</h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-3">${guide.description}</p>
        <a href="article.html?id=${guide.id}" class="inline-flex items-center text-primary font-medium text-sm hover:underline">
          阅读全文
          <i class="fa fa-arrow-right ml-1"></i>
        </a>
      </div>
    `;
    guidesContainer.appendChild(guideCard);
  });
  
  // 隐藏或显示加载更多按钮
  const loadMoreBtn = document.getElementById('load-more');
  if (endIndex >= filteredGuides.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
  
  // 添加淡入动画效果
  setTimeout(() => {
    const cards = guidesContainer.querySelectorAll('.hover-scale');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, 10);
}

// 初始化页面
function initPage() {
  // 初始渲染
  renderGuides();
  
  // 绑定类别筛选按钮事件
  const categoryButtons = document.querySelectorAll('.flex-wrap button');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 更新选中状态
      categoryButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
      });
      button.classList.remove('bg-white', 'text-gray-700');
      button.classList.add('bg-primary', 'text-white');
      
      // 更新当前类别并重新渲染
      currentCategory = button.textContent;
      currentPage = 1;
      renderGuides();
    });
  });
  
  // 绑定排序下拉框事件
  const sortSelect = document.querySelector('select');
  sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    currentPage = 1;
    renderGuides();
  });
  
  // 绑定加载更多按钮事件
  const loadMoreBtn = document.getElementById('load-more');
  loadMoreBtn.addEventListener('click', () => {
    // 显示加载中状态
    loadMoreBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 加载中...';
    loadMoreBtn.disabled = true;
    
    // 模拟加载延迟
    setTimeout(() => {
      currentPage++;
      renderGuides();
      loadMoreBtn.innerHTML = '<span>加载更多</span><i class="fa fa-refresh"></i>';
      loadMoreBtn.disabled = false;
    }, 800);
  });
}

// 当页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initPage);

// 导出函数供其他模块使用（如果需要）
window.guidesModule = {
  renderGuides,
  getFilteredAndSortedGuides
};