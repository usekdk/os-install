// Windows系统下载数据
const windowsSystems = [
  {
    id: 'windows-11',
    name: 'Windows 11',
    description: '最新稳定版',
    image: 'https://via.placeholder.com/60x60',
    details: {
      version: '23H2',
      size: '5.2GB',
      language: '简体中文',
      architecture: 'x64'
    },
    links: {
      download: 'https://www.microsoft.com/zh-cn/software-download/windows11',
      details: 'system-detail.html?id=windows-11'
    }
  },
  {
    id: 'windows-10',
    name: 'Windows 10',
    description: '长期支持版',
    image: 'https://via.placeholder.com/60x60',
    details: {
      version: '22H2',
      size: '4.8GB',
      language: '简体中文',
      architecture: 'x64'
    },
    links: {
      download: '#',
      details: '#'
    }
  },
  {
    id: 'windows-11-enterprise',
    name: 'Windows 11 企业版',
    description: '商业用户首选',
    image: 'https://via.placeholder.com/60x60',
    details: {
      version: '23H2',
      size: '5.5GB',
      language: '简体中文',
      architecture: 'x64'
    },
    links: {
      download: '#',
      details: '#'
    }
  },
  {
    id: 'windows-server',
    name: 'Windows Server 2022',
    description: '服务器操作系统',
    image: 'https://via.placeholder.com/60x60',
    details: {
      version: '标准版',
      size: '4.2GB',
      language: '简体中文',
      architecture: 'x64'
    },
    links: {
      download: '#',
      details: '#'
    }
  }
];

// 渲染Windows系统下载列表
function renderWindowsSystems() {
  const container = document.querySelector('.windows-systems-container');
  if (!container) return;
  
  // 清空容器
  container.innerHTML = '';
  
  // 渲染每个系统项
  windowsSystems.forEach(system => {
    const systemCard = document.createElement('div');
    systemCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg';
    systemCard.innerHTML = `
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img src="${system.image}" alt="${system.name}" class="w-12 h-12 rounded-md mr-4">
          <div>
            <h3 class="text-lg font-semibold">${system.name}</h3>
            <p class="text-sm text-gray-500">${system.description}</p>
          </div>
        </div>
        <div class="space-y-2 text-sm mb-4">
          <p><span class="text-gray-500">版本：</span>${system.details.version}</p>
          <p><span class="text-gray-500">大小：</span>${system.details.size}</p>
          <p><span class="text-gray-500">语言：</span>${system.details.language}</p>
          <p><span class="text-gray-500">架构：</span>${system.details.architecture}</p>
        </div>
        <div class="flex space-x-3">
          <a href="${system.links.download}" class="flex-1 bg-primary text-white py-2 px-4 rounded-md text-center hover:bg-primary/90 transition-colors">
            <i class="fa fa-download mr-1"></i> 官方下载
          </a>
          <a href="${system.links.details}" class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-center hover:bg-gray-200 transition-colors">
            <i class="fa fa-info-circle mr-1"></i> 详情
          </a>
        </div>
      </div>
    `;
    container.appendChild(systemCard);
  });
}

// 初始化函数
document.addEventListener('DOMContentLoaded', () => {
  renderWindowsSystems();
});

// 注意：如果需要在其他JavaScript文件中使用这些数据和函数，可以通过全局变量的方式暴露
// 暂时移除export语句，因为HTML中不再使用type="module"