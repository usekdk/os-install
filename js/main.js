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

// 登录/注册浮窗功能
const loginModal = document.getElementById('login-modal');
const loginButton = document.getElementById('login-button');
const closeModal = document.getElementById('close-modal');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

// 打开浮窗
loginButton.addEventListener('click', function() {
  loginModal.classList.remove('hidden');
  loginModal.classList.add('flex');
  // 移除禁止背景滚动的设置，保持滚动条可见
});

// 关闭浮窗
function closeLoginModal() {
  loginModal.classList.add('hidden');
  loginModal.classList.remove('flex');
  // 移除恢复背景滚动的设置
}

closeModal.addEventListener('click', closeLoginModal);

// 点击遮罩层关闭浮窗
loginModal.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    closeLoginModal();
  }
});

// 切换到登录标签
loginTab.addEventListener('click', function() {
  loginTab.classList.add('text-primary', 'border-b-2', 'border-primary');
  loginTab.classList.remove('text-gray-500');
  registerTab.classList.add('text-gray-500');
  registerTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

// 切换到注册标签
registerTab.addEventListener('click', function() {
  registerTab.classList.add('text-primary', 'border-b-2', 'border-primary');
  registerTab.classList.remove('text-gray-500');
  loginTab.classList.add('text-gray-500');
  loginTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// 登录按钮点击事件
loginBtn.addEventListener('click', function() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const rememberMe = document.getElementById('remember-me').checked;
  
  // 这里可以添加登录逻辑
  console.log('登录信息:', { username, password, rememberMe });
  
  // 模拟登录成功
  alert('登录成功！');
  closeLoginModal();
});

// 注册按钮点击事件
registerBtn.addEventListener('click', function() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  
  // 这里可以添加注册逻辑
  console.log('注册信息:', { username, email, password, confirmPassword });
  
  // 模拟注册成功
  alert('注册成功！');
  closeLoginModal();
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