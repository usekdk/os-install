// 内容管理面板核心功能实现

// 模拟文章数据
const mockArticles = [
    {
        id: 1,
        title: 'Windows 11安装教程：从零开始设置全新系统',
        category: 'Windows',
        date: '2023-11-20',
        readCount: 3542,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/26/300/200',
        description: '详细介绍Windows 11的安装步骤，包括系统要求、启动盘制作、分区设置等关键环节。'
    },
    {
        id: 2,
        title: 'macOS Sonoma 14安装指南：升级与全新安装详解',
        category: 'macOS',
        date: '2023-11-18',
        readCount: 2756,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/27/300/200',
        description: '苹果最新操作系统macOS Sonoma的完整安装教程，包含兼容性检查和数据备份指南。'
    },
    {
        id: 3,
        title: 'Ubuntu 22.04 LTS安装步骤：新手友好的Linux入门教程',
        category: 'Linux',
        date: '2023-11-15',
        readCount: 1842,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/28/300/200',
        description: '适合初学者的Ubuntu Linux安装指南，从准备工作到系统配置的全过程详解。'
    },
    {
        id: 4,
        title: '双系统安装最佳实践：Windows与Linux共存技巧',
        category: '通用教程',
        date: '2023-11-12',
        readCount: 2105,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/29/300/200',
        description: '如何在一台电脑上同时安装Windows和Linux系统，实现无缝切换和资源共享。'
    },
    {
        id: 5,
        title: '系统备份与恢复全攻略：保护你的数据安全',
        category: '通用教程',
        date: '2023-11-10',
        readCount: 1689,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/30/300/200',
        description: '全面的系统备份与恢复教程，包括自动备份策略和数据恢复方法。'
    },
    {
        id: 6,
        title: '系统安装常见问题解答：新手必读',
        category: '常见问题',
        date: '2023-11-08',
        readCount: 1956,
        status: 'published',
        thumbnail: 'https://picsum.photos/id/31/300/200',
        description: '汇总用户在系统安装过程中最常见的问题和解决方案，帮助新手避免陷阱。'
    },
    {
        id: 7,
        title: 'Windows 10性能优化指南：让旧电脑焕发新生',
        category: 'Windows',
        date: '2023-11-05',
        readCount: 0,
        status: 'draft',
        thumbnail: 'https://picsum.photos/id/32/300/200',
        description: '详细的Windows 10性能优化教程，包括系统清理、服务优化和硬件升级建议。'
    },
    {
        id: 8,
        title: 'Linux命令行入门：掌握系统管理基础',
        category: 'Linux',
        date: '2023-11-03',
        readCount: 0,
        status: 'draft',
        thumbnail: 'https://picsum.photos/id/33/300/200',
        description: 'Linux初学者必读的命令行基础教程，从基本操作到系统管理的实用命令。'
    },
    {
        id: 9,
        title: 'macOS系统维护技巧：保持你的Mac运行如新',
        category: 'macOS',
        date: '2023-11-01',
        readCount: 0,
        status: 'draft',
        thumbnail: 'https://picsum.photos/id/34/300/200',
        description: '苹果Mac系统的日常维护和优化技巧，延长使用寿命并保持最佳性能。'
    }
];

// 当前文章列表
let currentArticles = [...mockArticles];
// 当前编辑的文章ID
let currentEditArticleId = null;
let currentStatusChangeId = null;
let currentDeleteId = null;
let currentStatusTarget = null;

// 初始化管理面板
function initAdminPanel() {
    // 渲染文章列表
    renderArticles();
    
    // 绑定筛选和搜索事件
    bindFilterEvents();
    
    // 绑定模态框事件
    bindModalEvents();
    
    // 绑定分页事件
    bindPaginationEvents();
}

// 渲染文章列表
function renderArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    
    if (currentArticles.length === 0) {
        // 显示空状态
        container.innerHTML = `
            <div class="col-span-full py-16 text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i class="fa fa-file-text-o text-gray-300 text-2xl"></i>
                </div>
                <h3 class="text-lg font-medium text-gray-700 mb-2">未找到文章</h3>
                <p class="text-gray-500 max-w-md mx-auto">没有符合当前筛选条件的文章。请尝试调整筛选条件或添加新文章。</p>
                <a href="content-editor.html" class="mt-4 inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    <i class="fa fa-plus mr-2"></i>
                    <span>新建文章</span>
                </a>
            </div>
        `;
        return;
    }
    
    // 渲染文章项
    currentArticles.forEach(article => {
        const articleItem = document.createElement('div');
        articleItem.className = 'border-b border-gray-200 last:border-0';
        articleItem.dataset.id = article.id;
        
        // 获取状态对应的样式和文本
        const statusConfig = getStatusConfig(article.status);
        
        articleItem.innerHTML = `
            <!-- 移动端 -->
            <div class="md:hidden p-4">
                <div class="flex items-start justify-between">
                    <h3 class="text-base font-medium text-dark line-clamp-2 mb-1">${article.title}</h3>
                    <span class="${statusConfig.class} text-xs px-2 py-1 rounded-full">${statusConfig.text}</span>
                </div>
                <div class="flex items-center text-xs text-gray-500 mt-2 space-x-4">
                    <span><i class="fa fa-folder-o mr-1"></i>${article.category}</span>
                    <span><i class="fa fa-calendar-o mr-1"></i>${article.date}</span>
                    <span><i class="fa fa-eye mr-1"></i>${formatNumber(article.readCount)}</span>
                </div>
                <div class="flex justify-end space-x-2 mt-3">
                    <button class="text-gray-500 hover:text-primary transition-colors text-sm edit-btn">
                        <i class="fa fa-pencil mr-1"></i>编辑
                    </button>
                    <button class="text-gray-500 hover:text-warning transition-colors text-sm status-btn" data-target="${article.status === 'published' ? 'draft' : 'published'}">
                        <i class="fa fa-refresh mr-1"></i>${article.status === 'published' ? '下线' : '发布'}
                    </button>
                    <button class="text-gray-500 hover:text-danger transition-colors text-sm delete-btn">
                        <i class="fa fa-trash-o mr-1"></i>删除
                    </button>
                </div>
            </div>
            
            <!-- 桌面端 -->
            <div class="hidden md:grid grid-cols-12 items-center py-4">
                <div class="col-span-4 px-6 flex items-center">
                    <img src="${article.thumbnail}" alt="${article.title}" class="w-16 h-10 object-cover rounded mr-4">
                    <h3 class="font-medium text-dark line-clamp-2">${article.title}</h3>
                </div>
                <div class="col-span-2 px-6 text-gray-600">${article.category}</div>
                <div class="col-span-2 px-6 text-gray-600">${article.date}</div>
                <div class="col-span-1 px-6 text-gray-600">${formatNumber(article.readCount)}</div>
                <div class="col-span-1 px-6">
                    <span class="${statusConfig.class} text-xs px-2 py-1 rounded-full">${statusConfig.text}</span>
                </div>
                <div class="col-span-2 px-6 flex justify-end space-x-2">
                    <a href="content-editor.html?id=${article.id}" class="text-gray-500 hover:text-primary transition-colors p-1.5 rounded hover:bg-gray-100">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <button class="text-gray-500 hover:text-warning transition-colors p-1.5 rounded hover:bg-gray-100 status-btn" data-target="${article.status === 'published' ? 'draft' : 'published'}">
                        <i class="fa fa-refresh"></i>
                    </button>
                    <button class="text-gray-500 hover:text-danger transition-colors p-1.5 rounded hover:bg-gray-100 delete-btn">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(articleItem);
    });
    
    // 绑定操作按钮事件
    bindArticleActions();
    
    // 更新分页信息
    updatePaginationInfo();
}

// 获取状态配置
function getStatusConfig(status) {
    switch (status) {
        case 'published':
            return { class: 'bg-success/10 text-success', text: '已发布' };
        case 'draft':
            return { class: 'bg-warning/10 text-warning', text: '草稿' };
        case 'archived':
            return { class: 'bg-gray-100 text-gray-500', text: '已归档' };
        default:
            return { class: 'bg-gray-100 text-gray-500', text: '未知' };
    }
}

// 格式化数字（添加千位分隔符）
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 绑定文章操作按钮事件
function bindArticleActions() {
    // 编辑按钮
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const articleId = parseInt(this.closest('[data-id]').dataset.id);
            window.location.href = `content-editor.html?id=${articleId}`;
        });
    });
    
    // 状态变更按钮
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const articleItem = this.closest('[data-id]');
            const articleId = parseInt(articleItem.dataset.id);
            const targetStatus = this.getAttribute('data-target');
            
            // 设置当前操作的文章ID和目标状态
            currentStatusChangeId = articleId;
            currentStatusTarget = targetStatus;
            
            // 显示状态变更确认对话框
            const article = mockArticles.find(a => a.id === articleId);
            const statusText = targetStatus === 'published' ? '发布' : '下线为草稿';
            document.getElementById('status-modal-text').textContent = 
                `确定要将文章"${article.title}"的状态更改为"${statusText}"吗？`;
            document.getElementById('status-modal').classList.remove('hidden');
        });
    });
    
    // 删除按钮
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const articleItem = this.closest('[data-id]');
            const articleId = parseInt(articleItem.dataset.id);
            
            // 设置当前删除的文章ID
            currentDeleteId = articleId;
            
            // 显示删除确认对话框
            const article = mockArticles.find(a => a.id === articleId);
            document.getElementById('delete-modal-text').textContent = 
                `确定要删除文章"${article.title}"吗？此操作不可撤销。`;
            document.getElementById('delete-modal').classList.remove('hidden');
        });
    });
}

// 绑定筛选和搜索事件
function bindFilterEvents() {
    // 状态筛选
    document.getElementById('filter-status').addEventListener('change', applyFilters);
    
    // 分类筛选
    document.getElementById('filter-category').addEventListener('change', applyFilters);
    
    // 搜索
    document.getElementById('search-content').addEventListener('input', applyFilters);
    
    // 排序
    document.getElementById('sort-options').addEventListener('change', applyFilters);
}

// 应用筛选和排序
function applyFilters() {
    const statusFilter = document.getElementById('filter-status').value;
    const categoryFilter = document.getElementById('filter-category').value;
    const searchTerm = document.getElementById('search-content').value.toLowerCase();
    const sortOption = document.getElementById('sort-options').value;
    
    // 筛选文章
    let filteredArticles = [...mockArticles];
    
    // 状态筛选
    if (statusFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.status === statusFilter);
    }
    
    // 分类筛选
    if (categoryFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.category === categoryFilter);
    }
    
    // 搜索筛选
    if (searchTerm) {
        filteredArticles = filteredArticles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // 排序文章
    switch (sortOption) {
        case 'newest':
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'most_read':
            filteredArticles.sort((a, b) => b.readCount - a.readCount);
            break;
        case 'a-z':
            filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'z-a':
            filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    
    // 更新当前文章列表
    currentArticles = filteredArticles;
    
    // 重新渲染
    renderArticles();
}

// 绑定模态框事件
function bindModalEvents() {
    // 关闭模态框
    document.querySelectorAll('.close-modal, #status-cancel, #delete-cancel').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('status-modal').classList.add('hidden');
            document.getElementById('delete-modal').classList.add('hidden');
        });
    });
    
    // 确认状态变更
    document.getElementById('status-confirm').addEventListener('click', function() {
        if (currentStatusChangeId && currentStatusTarget) {
            // 更新文章状态
            const article = mockArticles.find(a => a.id === currentStatusChangeId);
            if (article) {
                article.status = currentStatusTarget;
                
                // 如果是发布，初始化阅读量
                if (currentStatusTarget === 'published' && article.readCount === 0) {
                    article.readCount = Math.floor(Math.random() * 100) + 10; // 模拟一些初始阅读量
                }
                
                // 应用筛选和重新渲染
                applyFilters();
                
                // 显示成功提示
                showToast(`文章状态已成功更改为"${currentStatusTarget === 'published' ? '已发布' : '草稿'}"！`);
            }
        }
        
        // 关闭模态框
        document.getElementById('status-modal').classList.add('hidden');
    });
    
    // 确认删除
    document.getElementById('delete-confirm').addEventListener('click', function() {
        if (currentDeleteId) {
            // 从模拟数据中删除文章
            const index = mockArticles.findIndex(a => a.id === currentDeleteId);
            if (index !== -1) {
                mockArticles.splice(index, 1);
                
                // 应用筛选和重新渲染
                applyFilters();
                
                // 显示成功提示
                showToast('文章已成功删除！');
            }
        }
        
        // 关闭模态框
        document.getElementById('delete-modal').classList.add('hidden');
    });
    
    // 点击模态框背景关闭
    document.getElementById('status-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
    
    document.getElementById('delete-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
}

// 绑定分页事件
function bindPaginationEvents() {
    // 加载更多按钮
    document.getElementById('load-more').addEventListener('click', function() {
        // 在实际应用中，这里应该加载更多数据
        // 目前只是显示提示
        showToast('已加载全部文章！');
    });
    
    // 分页按钮事件（在实际应用中应该实现）
    document.querySelectorAll('.flex.justify-between button:not(:disabled)').forEach(btn => {
        btn.addEventListener('click', function() {
            // 模拟分页切换
            showToast('分页功能演示');
        });
    });
}

// 更新分页信息
function updatePaginationInfo() {
    document.getElementById('total-items').textContent = currentArticles.length;
    document.getElementById('showing-start').textContent = currentArticles.length > 0 ? '1' : '0';
    document.getElementById('showing-end').textContent = Math.min(currentArticles.length, 6);
}

// 显示提示消息
function showToast(message, isSuccess = true) {
    const toast = document.getElementById('success-toast');
    const toastMessage = document.getElementById('toast-message');
    
    // 设置消息内容和样式
    toastMessage.textContent = message;
    
    // 更改背景颜色（成功为绿色，失败为红色）
    if (isSuccess) {
        toast.classList.remove('bg-red-500');
        toast.classList.add('bg-green-500');
    } else {
        toast.classList.remove('bg-green-500');
        toast.classList.add('bg-red-500');
    }
    
    // 显示提示
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    // 3秒后自动隐藏
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// 获取URL参数
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    
    return params;
}

// 检查是否有编辑文章ID
function checkForEditArticle() {
    const params = getUrlParams();
    if (params.id) {
        currentEditArticleId = parseInt(params.id);
        // 在实际应用中，这里应该加载文章数据到编辑器
    }
}

// 当页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    initAdminPanel();
    checkForEditArticle();
});

// 导出函数供其他模块使用（如果需要）
window.adminModule = {
    initAdminPanel,
    applyFilters,
    showToast
};