// 动态加载搜索功能脚本
function loadSearchScript() {
  const script = document.createElement('script');
  script.src = 'js/search.js';
  script.async = true;
  script.onload = function() {
    console.log('搜索功能脚本已加载');
  };
  script.onerror = function() {
    console.error('搜索功能脚本加载失败');
  };
  document.body.appendChild(script);
}

// 加载搜索功能
loadSearchScript();

// 移动端菜单切换
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('py-2', 'shadow');
    navbar.classList.remove('py-3');
  } else {
    navbar.classList.add('py-3');
    navbar.classList.remove('py-2', 'shadow');
  }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // 如果是移动端，点击后关闭菜单
      const mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// 图片懒加载
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img");
  
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.classList.add('opacity-100');
          image.classList.remove('opacity-0');
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  }
});