// 系统详情数据管理和渲染模块

// 所有系统的详细数据
const systemDetails = {
  'windows-11': {
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
    },
    introduction: `<p>Windows 11 是微软公司最新发布的桌面操作系统，于2021年10月5日正式发布。</p>
    <p class="mt-4">Windows 11 引入了全新的设计语言，包括居中的任务栏、圆角窗口、新的开始菜单和现代化的设置界面。系统还增强了多任务处理能力，支持Snap布局、虚拟桌面等功能，并优化了对触摸屏设备的支持。</p>
    <p class="mt-4">23H2版本带来了一系列功能更新和性能改进，包括改进的文件资源管理器、增强的语音识别功能以及更好的游戏体验支持。</p>`,
    features: [
      {
        title: '全新用户界面',
        description: '现代化的视觉设计，包括居中任务栏、圆角窗口和新的开始菜单布局。'
      },
      {
        title: '增强的多任务处理',
        description: 'Snap布局、Snap群组和虚拟桌面功能，让您更高效地组织工作空间。'
      },
      {
        title: 'Microsoft Store改进',
        description: '全新设计的应用商店，支持更多类型的应用，包括Android应用。'
      },
      {
        title: '游戏体验优化',
        description: '支持Auto HDR、DirectStorage和Xbox Game Bar，提升游戏性能和体验。'
      },
      {
        title: 'Teams集成',
        description: '直接集成Microsoft Teams，方便进行视频会议和聊天。'
      }
    ],
    requirements: {
      minimum: [
        '处理器：1GHz或更快的处理器，支持64位架构，至少2个核心',
        '内存：4GB RAM',
        '存储空间：64GB或更大的存储设备',
        '系统固件：UEFI，支持安全启动',
        'TPM：受信任的平台模块(TPM)2.0版本',
        '显卡：支持DirectX 12或更高版本，支持WDDM 2.0驱动程序',
        '显示器：720p分辨率(1280×720)，9英寸或更大的显示器'
      ],
      recommended: [
        '处理器：Intel Core i5或AMD Ryzen 5及以上',
        '内存：8GB RAM或更多',
        '存储空间：128GB SSD或更大的存储设备',
        '显卡：支持DirectX 12 Ultimate的独立显卡',
        '显示器：1080p(1920×1080)或更高分辨率的显示器',
        '网络：Wi-Fi 6或有线以太网连接'
      ]
    },
    relatedSystems: [
      {
        id: 'windows-10',
        name: 'Windows 10',
        description: '长期支持版',
        image: 'https://via.placeholder.com/40x40'
      },
      {
        id: 'windows-11-enterprise',
        name: 'Windows 11 企业版',
        description: '商业用户首选',
        image: 'https://via.placeholder.com/40x40'
      }
    ],
    guides: [
      {
        title: 'Windows 11安装完整教程',
        url: 'guides.html?id=windows11-install'
      },
      {
        title: '从Windows 10升级到Windows 11',
        url: 'guides.html?id=upgrade-to-windows11'
      },
      {
        title: 'Windows 11系统激活方法',
        url: 'guides.html?id=windows11-activation'
      }
    ],
    faq: [
      {
        question: '如何验证下载的Windows 11镜像文件?',
        answer: '可以通过Microsoft官方提供的SHA-256哈希值进行验证，确保下载文件的完整性。在PowerShell中使用Get-FileHash命令计算文件哈希值，然后与官方提供的值进行比对。'
      },
      {
        question: '我的电脑不满足Windows 11的系统要求怎么办?',
        answer: '如果您的电脑不满足TPM 2.0或安全启动等要求，可以尝试使用官方提供的ISO文件进行安装，或考虑使用Windows 10，它将获得支持直到2025年10月。'
      },
      {
        question: 'Windows 11与Windows 10相比有哪些主要改进?',
        answer: '除了全新的用户界面外，Windows 11还改进了多任务处理能力，增强了游戏功能，更新了Microsoft Store，并对触摸设备提供了更好的支持。'
      }
    ]
  },
  'windows-10': {
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
      download: 'https://www.microsoft.com/zh-cn/software-download/windows10',
      details: 'system-detail.html?id=windows-10'
    },
    // 其他详细信息可以后续添加
    introduction: '<p>Windows 10是微软公司发布的操作系统，提供长期支持服务。</p>',
    features: [],
    requirements: {
      minimum: [],
      recommended: []
    },
    relatedSystems: [],
    guides: [],
    faq: []
  },
  'windows-11-enterprise': {
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
      details: 'system-detail.html?id=windows-11-enterprise'
    },
    // 其他详细信息可以后续添加
    introduction: '<p>Windows 11 企业版专为商业和企业用户设计，提供高级安全和管理功能。</p>',
    features: [],
    requirements: {
      minimum: [],
      recommended: []
    },
    relatedSystems: [],
    guides: [],
    faq: []
  },
  'windows-server': {
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
      details: 'system-detail.html?id=windows-server'
    },
    // 其他详细信息可以后续添加
    introduction: '<p>Windows Server 2022是微软最新的服务器操作系统，提供企业级安全性和性能。</p>',
    features: [],
    requirements: {
      minimum: [],
      recommended: []
    },
    relatedSystems: [],
    guides: [],
    faq: []
  }
};

/**
 * 从URL获取查询参数
 * @param {string} param - 要获取的参数名
 * @returns {string|null} - 参数值或null
 */
function getUrlParameter(param) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  } catch (error) {
    console.error('Error getting URL parameter:', error);
    return null;
  }
}

/**
 * 安全地获取DOM元素并设置内容
 * @param {string} selector - CSS选择器
 * @param {string} content - 要设置的内容
 * @param {string} fallback - 当内容无效时的回退值
 * @returns {boolean} - 设置是否成功
 */
function setElementContent(selector, content, fallback = '') {
  try {
    const element = document.querySelector(selector);
    if (element && content !== undefined && content !== null) {
      element.textContent = content;
      return true;
    } else if (element && fallback !== undefined) {
      element.textContent = fallback;
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error setting content for ${selector}:`, error);
    return false;
  }
}

/**
 * 安全地设置元素属性
 * @param {string} selector - CSS选择器
 * @param {string} attribute - 属性名
 * @param {string} value - 属性值
 * @param {string} fallback - 当值无效时的回退值
 * @returns {boolean} - 设置是否成功
 */
function setElementAttribute(selector, attribute, value, fallback = '') {
  try {
    const element = document.querySelector(selector);
    if (element && value !== undefined && value !== null) {
      element[attribute] = value;
      return true;
    } else if (element && fallback !== undefined) {
      element[attribute] = fallback;
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error setting attribute for ${selector}:`, error);
    return false;
  }
}

/**
 * 渲染系统基本信息
 * @param {Object} systemData - 系统数据对象
 */
function renderSystemBasicInfo(systemData) {
  try {
    // 验证输入参数
    if (!systemData || typeof systemData !== 'object') {
      console.error('Invalid system data provided');
      return;
    }
    
    // 更新标题和面包屑
    document.title = `${systemData.name || '未知系统'} - 系统详情 - 系统安装一站式网站`;
    setElementContent('#page-title', systemData.name, '未知系统');
    setElementContent('#breadcrumb-system-name', systemData.name, '系统详情');
    setElementContent('#page-subtitle', systemData.description, '暂无描述');
    
    // 更新系统图标和名称
    setElementAttribute('#system-icon', 'src', systemData.image, 'https://via.placeholder.com/60x60');
    setElementAttribute('#system-icon', 'alt', systemData.name, '系统图标');
    setElementContent('#system-name', systemData.name, '未知系统');
    setElementContent('#system-description', systemData.description, '暂无描述');
    
    // 更新系统详细信息（添加嵌套属性安全检查）
    const details = systemData.details || {};
    setElementContent('#system-version', details.version, '未知版本');
    setElementContent('#system-size', details.size, '未知大小');
    setElementContent('#system-language', details.language, '未知语言');
    setElementContent('#system-architecture', details.architecture, '未知架构');
    
    // 更新下载按钮链接
    const links = systemData.links || {};
    if (links.download) {
      setElementAttribute('#download-button', 'href', links.download, '#');
    } else {
      const downloadBtn = document.querySelector('#download-button');
      if (downloadBtn) {
        downloadBtn.classList.add('opacity-70', 'cursor-not-allowed');
        downloadBtn.removeAttribute('href');
      }
    }
  } catch (error) {
    console.error('Error rendering system basic info:', error);
  }
}

/**
 * 渲染系统介绍
 * @param {Object} systemData - 系统数据对象
 */
function renderSystemIntroduction(systemData) {
  try {
    const introContainer = document.getElementById('system-intro');
    if (!introContainer) {
      console.error('System intro container not found');
      return;
    }
    
    if (systemData && systemData.introduction && typeof systemData.introduction === 'string') {
      introContainer.innerHTML = systemData.introduction;
    } else {
      introContainer.innerHTML = '<p>暂无详细介绍。</p>';
    }
  } catch (error) {
    console.error('Error rendering system introduction:', error);
  }
}

/**
 * 渲染系统特性
 * @param {Object} systemData - 系统数据对象
 */
function renderSystemFeatures(systemData) {
  try {
    const featuresContainer = document.getElementById('system-features');
    if (!featuresContainer) {
      console.error('System features container not found');
      return;
    }
    
    if (!systemData || !systemData.features || !Array.isArray(systemData.features) || systemData.features.length === 0) {
      featuresContainer.innerHTML = '<p class="text-gray-500">暂无特性信息。</p>';
      return;
    }
    
    let featuresHtml = '';
    systemData.features.forEach(feature => {
      if (feature && typeof feature === 'object') {
        featuresHtml += `
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-primary/10 p-2 rounded-full mr-4 mt-1">
              <i class="fa fa-check text-primary"></i>
            </div>
            <div>
              <h4 class="font-semibold">${feature.title || '特性'}</h4>
              <p class="text-gray-600 mt-1">${feature.description || '暂无描述'}</p>
            </div>
          </div>
        `;
      }
    });
    
    featuresContainer.innerHTML = featuresHtml;
  } catch (error) {
    console.error('Error rendering system features:', error);
  }
}

/**
 * 安全地渲染配置列表项
 * @param {string} title - 配置标题
 * @param {Array} configItems - 配置项数组
 * @returns {string} - 生成的HTML字符串
 */
function generateConfigHtml(title, configItems) {
  let html = `<h4 class="font-semibold mb-3">${title}</h4><ul class="space-y-2 text-gray-700">`;
  
  if (Array.isArray(configItems) && configItems.length > 0) {
    configItems.forEach(item => {
      if (typeof item === 'string') {
        html += `
          <li class="flex items-start">
            <i class="fa fa-circle text-xs text-gray-400 mt-1.5 mr-2"></i>
            <span>${item}</span>
          </li>
        `;
      }
    });
  } else {
    html += '<li class="text-gray-500">暂无配置信息</li>';
  }
  
  return html + '</ul>';
}

/**
 * 渲染系统要求
 * @param {Object} systemData - 系统数据对象
 */
function renderSystemRequirements(systemData) {
  try {
    const requirementsContainer = document.getElementById('system-requirements');
    if (!requirementsContainer) {
      console.error('System requirements container not found');
      return;
    }
    
    // 生成最低配置HTML
    const minRequirementsHtml = generateConfigHtml(
      '最低配置',
      systemData && systemData.requirements && Array.isArray(systemData.requirements.minimum) ? systemData.requirements.minimum : null
    );
    
    // 生成推荐配置HTML
    const recRequirementsHtml = generateConfigHtml(
      '推荐配置',
      systemData && systemData.requirements && Array.isArray(systemData.requirements.recommended) ? systemData.requirements.recommended : null
    );
    
    requirementsContainer.innerHTML = `
      <div>${minRequirementsHtml}</div>
      <div>${recRequirementsHtml}</div>
    `;
  } catch (error) {
    console.error('Error rendering system requirements:', error);
  }
}

/**
 * 渲染相关系统
 * @param {Object} systemData - 系统数据对象
 */
function renderRelatedSystems(systemData) {
  const relatedContainer = document.getElementById('related-systems');
  
  if (!systemData.relatedSystems || systemData.relatedSystems.length === 0) {
    relatedContainer.innerHTML = '<p class="text-gray-500">暂无相关系统推荐。</p>';
    return;
  }
  
  let relatedHtml = '';
  systemData.relatedSystems.forEach(related => {
    relatedHtml += `
      <a href="system-detail.html?id=${related.id}" class="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
        <img src="${related.image}" alt="${related.name}" class="w-10 h-10 rounded mr-3">
        <div class="flex-1">
          <h4 class="font-medium">${related.name}</h4>
          <p class="text-sm text-gray-500">${related.description}</p>
        </div>
        <i class="fa fa-angle-right text-gray-400"></i>
      </a>
    `;
  });
  
  relatedContainer.innerHTML = relatedHtml;
}

/**
 * 渲染安装指南
 * @param {Object} systemData - 系统数据对象
 */
function renderInstallationGuides(systemData) {
  const guidesContainer = document.getElementById('installation-guides');
  
  if (!systemData.guides || systemData.guides.length === 0) {
    guidesContainer.innerHTML = '<p class="text-gray-500">暂无相关安装指南。</p>';
    return;
  }
  
  let guidesHtml = '';
  systemData.guides.forEach(guide => {
    guidesHtml += `
      <a href="${guide.url}" class="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
        <i class="fa fa-book text-primary mr-3"></i>
        <span>${guide.title}</span>
        <i class="fa fa-angle-right text-gray-400 ml-auto"></i>
      </a>
    `;
  });
  
  guidesContainer.innerHTML = guidesHtml;
}

/**
 * 渲染常见问题
 * @param {Object} systemData - 系统数据对象
 */
function renderFAQ(systemData) {
  const faqContainer = document.getElementById('faq-section');
  
  if (!systemData.faq || systemData.faq.length === 0) {
    faqContainer.innerHTML = '<p class="text-gray-500">暂无常见问题。</p>';
    return;
  }
  
  let faqHtml = '';
  systemData.faq.forEach((item, index) => {
    faqHtml += `
      <div class="${index < systemData.faq.length - 1 ? 'border-b border-gray-100 pb-3' : ''} mb-3 last:mb-0">
        <h4 class="font-medium mb-1">${item.question}</h4>
        <p class="text-sm text-gray-600">${item.answer}</p>
      </div>
    `;
  });
  
  faqContainer.innerHTML = faqHtml;
}

/**
 * 渲染整个系统详情页面
 * @param {string} systemId - 系统ID
 */
function renderSystemDetail(systemId) {
  const systemData = systemDetails[systemId];
  
  // 如果找不到对应系统，显示错误信息
  if (!systemData) {
    const mainContent = document.querySelector('.container.mx-auto.px-4');
    mainContent.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <i class="fa fa-exclamation-circle text-5xl text-gray-300 mb-4"></i>
        <h2 class="text-2xl font-bold mb-2">系统信息未找到</h2>
        <p class="text-gray-600 mb-6">抱歉，您请求的系统详情信息不存在。</p>
        <a href="system-download.html" class="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors">
          返回系统列表
        </a>
      </div>
    `;
    return;
  }
  
  // 渲染各个部分
  renderSystemBasicInfo(systemData);
  renderSystemIntroduction(systemData);
  renderSystemFeatures(systemData);
  renderSystemRequirements(systemData);
  renderRelatedSystems(systemData);
  renderInstallationGuides(systemData);
  renderFAQ(systemData);
}

/**
 * 初始化系统详情页
 */
function initSystemDetail() {
  // 从URL获取系统ID，如果没有指定则默认显示第一个系统
  const systemId = getUrlParameter('id') || 'windows-11';
  
  // 渲染系统详情
  renderSystemDetail(systemId);
  
  // 为导航栏中的"系统下载"链接添加高亮状态
  const systemDownloadLinks = document.querySelectorAll('a[href="system-download.html"]');
  
  // 移除所有导航项的高亮
  document.querySelectorAll('nav a').forEach(link => {
    // 桌面导航
    if (!link.closest('.md\:hidden')) {
      link.classList.remove('text-primary', 'border-b-2', 'border-primary', 'pb-1');
      link.classList.add('text-gray-700');
    } 
    // 移动导航
    else {
      link.classList.remove('text-primary');
      link.classList.add('text-gray-700');
    }
  });
  
  // 为所有"系统下载"链接添加高亮
  systemDownloadLinks.forEach(link => {
    link.classList.remove('text-gray-700');
    link.classList.add('text-primary');
    // 对于桌面导航，添加边框效果
    if (!link.closest('.md\:hidden')) {
      link.classList.add('border-b-2', 'border-primary', 'pb-1');
    }
  });
  
  // 确保返回顶部按钮正常工作
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // 监听滚动事件以显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initSystemDetail);

// 导出函数供其他模块使用（如果需要的话）
// 注意：由于移除了type="module"，这些函数将作为全局函数可用