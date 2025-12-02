// 完整的文章数据，包含详细内容
// 定义网站内部链接变量
const siteLinks = {
  softwareShare: 'software-share.html',
  sitesShare: 'sites-share.html'
};

const articlesData = [
  {
    id: 1,
    title: "Windows 系统全新安装教程",
    date: "2023-11-15",
    description: "详细介绍Windows 11最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "images/article/1/封面.png",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326,
    content: `
      <!-- 可复用文章模板结构 -->
      <div class="article-content article-template" style="
        /* 基础样式变量 */
        --primary-color: #2563eb;
        --secondary-color: #6366f1;
        --success-color: #16a34a;
        --warning-color: #eab308;
        --danger-color: #dc2626;
        --text-primary: #1f2937;
        --text-secondary: #4b5563;
        --bg-primary: #ffffff;
        --bg-secondary: #f9fafb;
        --border-color: #e5e7eb;
        
        /* 基础排版 */
        font-size: 16px;
        line-height: 1.7;
        letter-spacing: 0.02em;
        word-spacing: 0.05em;
        color: var(--text-primary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      ">
        <!-- 可复用组件：文章介绍 -->
        <div class="article-intro" style="margin-bottom: 2.5rem;">
          <p class="template-lead-text" style="
            font-size: 18px;
            line-height: 1.8;
            font-weight: 400;
            color: var(--text-primary);
            margin-bottom: 1rem;
          ">本安装教程仅适用于<strong class="text-red-700">可以正常开机并可以正常进入系统桌面的电脑</strong>，主要是为了给系统运行卡顿的电脑给一次重生的机会，请参照本教程救活您的爱机吧！</p>
        </div>

        <!-- 目录已移至左侧侧边栏 -->

        <!-- 第1节：准备工作 -->
        <!-- 可复用组件：文章章节 -->
          <section id="1" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">1. 准备工作</h2>
          <p class="mb-4" style="margin-bottom: 1.5rem;">在开始Windows安装前，请确保您已完成以下准备工作：</p>
          <ul class="list-disc pl-6 space-y-2 mb-4" style="margin-bottom: 1.5rem; line-height: 1.7;">
            <li>备份所有重要数据到外部存储设备<strong>（尤其是系统盘文件，以及桌面文件）</strong></li>
            <li>下载Windows系统安装镜像（系统包）</li>
            <li>下载PE系统制作工具</li>
            <li>下载windows系统激活工具</li>
          </ul>
          <p class="mb-4" style="margin-bottom: 1.5rem;">您将得到下列文件，<strong>请将这些文件存放在系统盘以外的盘符内：</strong></p>

          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg transition-transform duration-300" style="box-shadow: 0 0px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
              <img src="images/article/1/001.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <figcaption class="image-caption text-sm text-gray-600 mt-3 text-center">图1: 文件列表</figcaption>
          </figure>
        </section>

        <!-- 第2节：制作本地PE系统 -->
        <section id="2" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">2. 制作本地PE系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>点击屏幕右下角小箭头，打开windows安全中心</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/002.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/004.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“病毒和威胁防护”进入子页面，然后点击“管理设置”"</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/003.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/005.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>关闭“实时保护”功能</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/006.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>接下来<strong>以管理员权限运行</strong>“FirPE”软件，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/007.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/008.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>等待软件加载完毕后，直接点击“本地安装”，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/009.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/010.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>然后等待进度条加载完毕，弹出如图所示窗口则表示PE系统安装成功，点击“确定”后关闭“FirPE”软件即可</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/011.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/012.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          </ol>
        </section>

        <!-- 第3节：进入本地PE系统 -->
        <section id="3" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">3. 进入本地PE系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>关闭电脑上打开的所有软件后，打开开始菜单中的“电源”选项，<strong>按住键盘上的“Shift”键并单击“重启”按钮</strong>，等待电脑进入“恢复选项”界面</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/013.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/014.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“使用其他操作系统”，进入子页面后再点击“FirPE维护系统”，然后等待电脑进入PE系统</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/015.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/016.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          </ol>
        </section>

        <!-- 第4节：进行windows系统重装 -->
        <section id="4" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">4. 进行windows系统重装</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>进入PE系统后，打开“EasyRC一键重装”软件</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/017.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/018.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>在软件中，首先“选择镜像”<strong>（此处以windows11系统包为例，其他系统安装只需要选择您所下载的系统包即可）</strong></li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/019.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/020.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>接下来选择您电脑的系统盘符（通常为C盘，如图所示），以及选择您要安装的系统版本（此处选择“专业版”）</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/021.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li><strong>其他设置不动</strong>，然后点击“开始安装”，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/022.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>然后等待进度条加载完毕，提示“系统安装完成”后，点击“立即重启”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/023.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/024.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

          <div class="template-info-box" style="background-color: #eff6ff; border-left: 4px solid var(--primary-color); padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h4 class="template-info-title" style="color: #1e40af; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem; font-family: inherit;">重要提示</h4>
            <p style="color: #1e40af; line-height: 1.7; margin: 0;">接下来<strong>请勿操作电脑</strong>，电脑会重启多次，请耐心等待</p>
          </div>
          </ol>
        </section>

        <!-- 第5节： 完成Windows系统安装 -->
        <section id="5" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">5. 完成Windows系统安装</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>当出现如下界面时，表示系统已安装完成，正在进行最后的部署</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/026.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/027.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>当系统自动进入桌面时则表示系统已经安装与部署完成，您现在以及可以使用您的电脑了</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/028.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

          </ol>
        </section>

        <!-- 第6节： 激活Windows系统 -->
        <section id="6" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">6. 激活Windows系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>1.	进入“此电脑”，右键以管理员权限运行“HEU KMS Activator”软件署</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/030.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/031.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“开始”，然后等待进度条加载完毕</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/032.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
         <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/033.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>当出现如图所示弹窗，则表示激活成功，点击“确定”即可</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/034.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <div class="info-box" style="background-color: #f0fdf4; border-left: 4px solid var(--success-color); padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h4 style="color: #166534; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">🎉恭喜🎉</h4>
            <p style="color: #166534; line-height: 1.7; margin: 0;">至此，Windows系统重装已全部完成，您现在可以正常使用您的电脑了。</p>
            <p style="color: #166534; line-height: 1.7; margin: 0;">您可以访问本网站的 <a href="${siteLinks.softwareShare}" style="color: #166534; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#0e7490';" onmouseout="this.style.color='#166534';">好软分享</a> 以及 <a href="${siteLinks.sitesShare}" style="color: #166534; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#0e7490';" onmouseout="this.style.color='#166534';">好站分享</a> 页面，获取更多有用的软件和网站推荐。</p>
          </div>
          </ol>
        </section>



        <section style="margin-bottom: 3rem; transition: all 0.3s;">
          <!-- 可复用组件：提示框 -->
          <div class="template-callout-box p-5" style="
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          ">
            <h4 class="template-callout-title" style="
              font-weight: 600;
              color: var(--text-primary);
              margin-bottom: 0.5rem;
              font-size: 1.1rem;
              font-family: inherit;
            ">后续工作</h4>
            <p class="text-purple-700 mb-3" style="margin-bottom: 1.2rem; line-height: 1.7;">如果您想深入了解Windows 11的更多功能，请查看我们的其他教程：</p>
            <ul class="list-disc pl-6 space-y-1 text-purple-700" style="line-height: 1.7;">
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11新功能详解</a></li>
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11安全设置最佳实践</a></li>
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11性能优化指南</a></li>
            </ul>
          </div>
        </section>

        <!-- 可复用组件：安装提示框 -->
        <div class="template-tips-box bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 class="template-tips-title text-lg font-semibold text-amber-800 mb-3">安装过程中的常见问题</h3>
          <p class="mb-4 text-amber-700" style="margin-bottom: 1.5rem; line-height: 1.7;">如果您在安装过程中遇到问题，请参考<a href="#" class="underline hover:text-amber-900">Windows 11安装常见问题解答</a>或在下方评论区提问。</p>
        </div>
      </div>`
  },

  {
    id: 2,
    title: "Windows 625654系统全新安装教程",
    date: "2023-11-15",
    description: "详细介绍Windows 11最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "images/article/1/封面.png",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326,
    content: `
      <!-- 可复用文章模板结构 -->
      <div class="article-content article-template" style="
        /* 基础样式变量 */
        --primary-color: #2563eb;
        --secondary-color: #6366f1;
        --success-color: #16a34a;
        --warning-color: #eab308;
        --danger-color: #dc2626;
        --text-primary: #1f2937;
        --text-secondary: #4b5563;
        --bg-primary: #ffffff;
        --bg-secondary: #f9fafb;
        --border-color: #e5e7eb;
        
        /* 基础排版 */
        font-size: 16px;
        line-height: 1.7;
        letter-spacing: 0.02em;
        word-spacing: 0.05em;
        color: var(--text-primary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      ">
        <!-- 可复用组件：文章介绍 -->
        <div class="article-intro" style="margin-bottom: 2.5rem;">
          <p class="template-lead-text" style="
            font-size: 18px;
            line-height: 1.8;
            font-weight: 400;
            color: var(--text-primary);
            margin-bottom: 1rem;
          ">本安装教程仅适用于<strong class="text-red-700">可以正常开机并可以正常进入系统桌面的电脑</strong>，主要是为了给系统运行卡顿的电脑给一次重生的机会，请参照本教程救活您的爱机吧！</p>
        </div>

        <!-- 目录已移至左侧侧边栏 -->

        <!-- 第1节：准备工作 -->
        <!-- 可复用组件：文章章节 -->
          <section id="1" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">1. 准备</h2>
          <p class="mb-4" style="margin-bottom: 1.5rem;">在开始Windows安装前，请确保您已完成以下准备工作：</p>
          <ul class="list-disc pl-6 space-y-2 mb-4" style="margin-bottom: 1.5rem; line-height: 1.7;">
            <li>备份所有重要数据到外部存储设备<strong>（尤其是系统盘文件，以及桌面文件）</strong></li>
            <li>下载Windows系统安装镜像（系统包）</li>
            <li>下载PE系统制作工具</li>
            <li>下载windows系统激活工具</li>
          </ul>
          <p class="mb-4" style="margin-bottom: 1.5rem;">您将得到下列文件，<strong>请将这些文件存放在系统盘以外的盘符内：</strong></p>

          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg transition-transform duration-300" style="box-shadow: 0 0px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
              <img src="images/article/1/001.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <figcaption class="image-caption text-sm text-gray-600 mt-3 text-center">图1: 文件列表</figcaption>
          </figure>
        </section>

        <!-- 第2节：制作本地PE系统 -->
        <section id="2" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">2. 制作本地PE系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>点击屏幕右下角小箭头，打开windows安全中心</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/002.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/004.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“病毒和威胁防护”进入子页面，然后点击“管理设置”"</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/003.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/005.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>关闭“实时保护”功能</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/006.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>接下来<strong>以管理员权限运行</strong>“FirPE”软件，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/007.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/008.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>等待软件加载完毕后，直接点击“本地安装”，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/009.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/010.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>然后等待进度条加载完毕，弹出如图所示窗口则表示PE系统安装成功，点击“确定”后关闭“FirPE”软件即可</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/011.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/012.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          </ol>
        </section>

        <!-- 第3节：进入本地PE系统 -->
        <section id="3" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">3. 进入本地PE系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>关闭电脑上打开的所有软件后，打开开始菜单中的“电源”选项，<strong>按住键盘上的“Shift”键并单击“重启”按钮</strong>，等待电脑进入“恢复选项”界面</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/013.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/014.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“使用其他操作系统”，进入子页面后再点击“FirPE维护系统”，然后等待电脑进入PE系统</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/015.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/016.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          </ol>
        </section>

        <!-- 第4节：进行windows系统重装 -->
        <section id="4" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">4. 进行windows系统重装</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>进入PE系统后，打开“EasyRC一键重装”软件</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/017.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/018.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>在软件中，首先“选择镜像”<strong>（此处以windows11系统包为例，其他系统安装只需要选择您所下载的系统包即可）</strong></li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/019.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/020.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>接下来选择您电脑的系统盘符（通常为C盘，如图所示），以及选择您要安装的系统版本（此处选择“专业版”）</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/021.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li><strong>其他设置不动</strong>，然后点击“开始安装”，在弹出的窗口中点击“确定”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/022.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>然后等待进度条加载完毕，提示“系统安装完成”后，点击“立即重启”</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/023.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/024.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

          <div class="template-info-box" style="background-color: #eff6ff; border-left: 4px solid var(--primary-color); padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h4 class="template-info-title" style="color: #1e40af; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem; font-family: inherit;">重要提示</h4>
            <p style="color: #1e40af; line-height: 1.7; margin: 0;">接下来<strong>请勿操作电脑</strong>，电脑会重启多次，请耐心等待</p>
          </div>
          </ol>
        </section>

        <!-- 第5节： 完成Windows系统安装 -->
        <section id="5" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">5. 完成Windows系统安装</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>当出现如下界面时，表示系统已安装完成，正在进行最后的部署</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/026.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/027.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>当系统自动进入桌面时则表示系统已经安装与部署完成，您现在以及可以使用您的电脑了</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/028.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

          </ol>
        </section>

        <!-- 第6节： 激活Windows系统 -->
        <section id="6" style="margin-bottom: 3rem; transition: all 0.3s;">
            <h2 class="template-section-title" style="
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid var(--primary-color);
              display: inline-block;
              font-family: inherit;
            ">6. 激活Windows系统</h2>
          <ol class="list-decimal pl-6 space-y-2 mb-6" style="margin-bottom: 2rem; line-height: 1.7;">
            <li>1.	进入“此电脑”，右键以管理员权限运行“HEU KMS Activator”软件署</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/030.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/031.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>点击“开始”，然后等待进度条加载完毕</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/032.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
         <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/033.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>

            <li>当出现如图所示弹窗，则表示激活成功，点击“确定”即可</li>
          <figure class="image-container my-8">
            <div class="image-wrapper overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img src="images/article/1/034.png" alt="Windows 11 Media Creation Tool" class="featured-image w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>
          </figure>
          <div class="info-box" style="background-color: #f0fdf4; border-left: 4px solid var(--success-color); padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h4 style="color: #166534; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">🎉恭喜🎉</h4>
            <p style="color: #166534; line-height: 1.7; margin: 0;">至此，Windows系统重装已全部完成，您现在可以正常使用您的电脑了。</p>
            <p style="color: #166534; line-height: 1.7; margin: 0;">您可以访问本网站的 <a href="${siteLinks.softwareShare}" style="color: #166534; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#0e7490';" onmouseout="this.style.color='#166534';">好软分享</a> 以及 <a href="${siteLinks.sitesShare}" style="color: #166534; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#0e7490';" onmouseout="this.style.color='#166534';">好站分享</a> 页面，获取更多有用的软件和网站推荐。</p>
          </div>
          </ol>
        </section>



        <section style="margin-bottom: 3rem; transition: all 0.3s;">
          <!-- 可复用组件：提示框 -->
          <div class="template-callout-box p-5" style="
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          ">
            <h4 class="template-callout-title" style="
              font-weight: 600;
              color: var(--text-primary);
              margin-bottom: 0.5rem;
              font-size: 1.1rem;
              font-family: inherit;
            ">后续工作</h4>
            <p class="text-purple-700 mb-3" style="margin-bottom: 1.2rem; line-height: 1.7;">如果您想深入了解Windows 11的更多功能，请查看我们的其他教程：</p>
            <ul class="list-disc pl-6 space-y-1 text-purple-700" style="line-height: 1.7;">
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11新功能详解</a></li>
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11安全设置最佳实践</a></li>
              <li><a href="#" style="color: var(--secondary-color); text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color='#312e81';" onmouseout="this.style.color='var(--secondary-color)';">Windows 11性能优化指南</a></li>
            </ul>
          </div>
        </section>

        <!-- 可复用组件：安装提示框 -->
        <div class="template-tips-box bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 class="template-tips-title text-lg font-semibold text-amber-800 mb-3">安装过程中的常见问题</h3>
          <p class="mb-4 text-amber-700" style="margin-bottom: 1.5rem; line-height: 1.7;">如果您在安装过程中遇到问题，请参考<a href="#" class="underline hover:text-amber-900">Windows 11安装常见问题解答</a>或在下方评论区提问。</p>
        </div>
      </div>`
  },
];

// 格式化日期为中文显示格式
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

// 格式化数字显示（添加千分位）
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 从URL获取参数
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 根据ID查找文章
function getArticleById(id) {
  return articlesData.find(article => article.id === parseInt(id));
}

// 获取上一篇文章
function getPreviousArticle(currentId) {
  const index = articlesData.findIndex(article => article.id === parseInt(currentId));
  return index > 0 ? articlesData[index - 1] : null;
}

// 获取下一篇文章
function getNextArticle(currentId) {
  const index = articlesData.findIndex(article => article.id === parseInt(currentId));
  return index < articlesData.length - 1 ? articlesData[index + 1] : null;
}

// 获取相关推荐文章（基于类别）
function getRelatedArticles(currentId, category, limit = 3) {
  return articlesData
    .filter(article => article.id !== parseInt(currentId) && article.category === category)
    .slice(0, limit);
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 动态生成文章目录
function generateTableOfContents(articleContent) {
  try {
    // 参数验证
    if (!articleContent || typeof articleContent !== 'string') {
      console.error('无效的文章内容参数');
      return false;
    }
    
    // 创建一个临时容器来解析HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = articleContent;
    
    // 获取所有带ID的section元素
    const sections = tempContainer.querySelectorAll('section[id]');
    const tocList = document.querySelector('.toc-list');
    
    if (!tocList) {
      console.error('找不到目录容器 .toc-list');
      return false;
    }
    
    // 清空现有的目录项
    tocList.innerHTML = '';
    
    // 遍历所有section元素，生成目录项
    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const sectionTitle = section.querySelector('h2')?.textContent?.trim() || '未命名章节';
      
      if (sectionId) {
        // 创建目录项链接
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + sectionId;
        a.className = 'toc-item block py-1.5 px-2 rounded hover:bg-gray-50 transition-colors';
        a.textContent = sectionTitle;
        
        // 添加到目录列表
        li.appendChild(a);
        tocList.appendChild(li);
      }
    });
    
    console.log(`目录生成成功，包含 ${sections.length} 个章节`);
    return true;
  } catch (error) {
    console.error('生成目录时发生错误:', error);
    return false;
  }
}

// 存储之前的滚动事件监听器引用和最后激活的章节索引
let previousScrollHandler = null;
let lastActiveSectionIndex = -1;

// 确保元素在其父容器中可见
function ensureElementVisible(element) {
  if (!element) return;
  
  const parent = element.parentElement;
  if (!parent) return;
  
  const parentTop = parent.scrollTop;
  const parentHeight = parent.clientHeight;
  const elementTop = element.offsetTop;
  const elementHeight = element.offsetHeight;
  
  // 元素在视口上方
  if (elementTop < parentTop) {
    parent.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }
  // 元素在视口下方
  else if (elementTop + elementHeight > parentTop + parentHeight) {
    parent.scrollTo({
      top: elementTop + elementHeight - parentHeight,
      behavior: 'smooth'
    });
  }
}

// 初始化目录交互功能
function initTableOfContents() {
  try {
    // 移除之前的滚动事件监听器（如果存在）
    if (previousScrollHandler) {
      window.removeEventListener('scroll', previousScrollHandler);
    }
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.toc-item');
    
    if (sections.length === 0) {
      console.warn('未找到文章章节，无法初始化目录');
      return;
    }
    
    // 预计算并缓存section信息
    const sectionData = Array.from(sections).map((section, index) => ({
      id: section.getAttribute('id'),
      element: section,
      index
    }));
    
    // 使用防抖优化的滚动事件处理函数
    const updateActiveLink = debounce(() => {
      const scrollPosition = window.scrollY;
      let activeIndex = -1;
      
      // 从下往上查找当前可见的章节（更符合用户阅读体验）
      for (let i = sectionData.length - 1; i >= 0; i--) {
        const section = sectionData[i].element;
        const sectionTop = section.offsetTop - 100; // 偏移量，提前高亮
        
        if (scrollPosition >= sectionTop) {
          activeIndex = i;
          break;
        }
      }
      
      // 只有当活动章节发生变化时才更新DOM，减少不必要的操作
      if (activeIndex !== lastActiveSectionIndex) {
        // 移除所有链接的活动类
        navLinks.forEach(link => link.classList.remove('active'));
        
        // 为当前活动章节添加活动类
        if (activeIndex >= 0) {
          const activeSectionId = sectionData[activeIndex].id;
          const activeLink = document.querySelector(`.toc-item[href="#${activeSectionId}"]`);
          
          if (activeLink) {
            activeLink.classList.add('active');
            // 确保活动的目录项在其容器中可见
            ensureElementVisible(activeLink);
          }
        }
        
        lastActiveSectionIndex = activeIndex;
      }
    }, 100); // 100ms防抖延迟
    
    // 为锚点链接添加平滑滚动，使用事件委托优化
    const tocList = document.querySelector('.toc-list');
    if (tocList) {
      // 移除所有子元素的事件监听器
      const newTocList = tocList.cloneNode(true);
      tocList.parentNode.replaceChild(newTocList, tocList);
      
      // 使用事件委托处理点击
      newTocList.addEventListener('click', function(e) {
        const link = e.target.closest('.toc-item');
        if (link) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // 禁用滚动监听器，防止滚动时触发不必要的更新
            window.removeEventListener('scroll', updateActiveLink);
            
            // 滚动到目标位置
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            
            // 滚动结束后重新启用滚动监听器
            setTimeout(() => {
              window.addEventListener('scroll', updateActiveLink);
              updateActiveLink(); // 更新活动状态
            }, 1000);
          }
        }
      });
    }
    
    // 保存滚动事件处理函数的引用
    previousScrollHandler = updateActiveLink;
    
    // 重置最后活动章节索引
    lastActiveSectionIndex = -1;
    
    // 监听滚动事件
    window.addEventListener('scroll', updateActiveLink);
    
    // 初始调用一次，根据页面滚动位置设置正确的激活状态
    setTimeout(updateActiveLink, 200); // 使用稍长的延迟确保DOM完全加载
    
    console.log('目录交互功能初始化完成');
  } catch (error) {
    console.error('初始化目录交互功能时发生错误:', error);
  }
}

// 测试函数：验证不同图文切换时目录的更新功能
function testTableOfContentsUpdate() {
  console.log('开始测试目录更新功能...');
  
  // 获取所有可用的文章ID
  const allArticleIds = articlesData.map(article => article.id);
  
  // 如果文章数量少于2，无法进行切换测试
  if (allArticleIds.length < 2) {
    console.warn('文章数量不足，无法进行切换测试');
    return;
  }
  
  // 记录测试结果
  const testResults = [];
  
  // 测试函数：切换到指定文章ID并验证目录
  function testArticleSwitch(articleId, expectedSectionCount) {
    console.log(`测试切换到文章ID: ${articleId}`);
    
    // 切换文章
    const article = getArticleById(articleId);
    if (!article) {
      testResults.push({ articleId, passed: false, error: '找不到指定文章' });
      return;
    }
    
    // 渲染文章
    renderArticle(article);
    
    // 等待目录生成完成
    setTimeout(() => {
      // 验证目录项数量是否与文章章节数量匹配
      const renderedSections = document.querySelectorAll('section[id]');
      const tocItems = document.querySelectorAll('.toc-item');
      
      const actualSectionCount = renderedSections.length;
      const tocItemCount = tocItems.length;
      
      console.log(`文章章节数量: ${actualSectionCount}`);
      console.log(`目录项数量: ${tocItemCount}`);
      
      // 验证每个章节ID是否在目录中有对应项
      let allSectionsLinked = true;
      renderedSections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const matchingTocItem = document.querySelector(`.toc-item[href="#${sectionId}"]`);
        if (!matchingTocItem) {
          console.warn(`章节 ${sectionId} 没有在目录中找到对应项`);
          allSectionsLinked = false;
        }
      });
      
      const testPassed = tocItemCount === actualSectionCount && allSectionsLinked;
      testResults.push({
        articleId,
        passed: testPassed,
        details: {
          expectedSectionCount,
          actualSectionCount,
          tocItemCount,
          allSectionsLinked
        }
      });
      
      console.log(`测试结果: ${testPassed ? '通过' : '失败'}`);
      
      // 如果还有更多文章要测试，继续下一个
      const nextIndex = allArticleIds.indexOf(articleId) + 1;
      if (nextIndex < allArticleIds.length) {
        setTimeout(() => {
          testArticleSwitch(allArticleIds[nextIndex], 0);
        }, 1000); // 等待1秒后测试下一篇文章
      } else {
        // 所有测试完成，显示总结
        console.log('\n测试完成！总结:');
        const passedCount = testResults.filter(result => result.passed).length;
        console.log(`通过: ${passedCount}/${testResults.length}`);
        
        testResults.forEach(result => {
          console.log(`文章ID ${result.articleId}: ${result.passed ? '通过' : '失败'}`);
          if (!result.passed && result.error) {
            console.log(`  错误: ${result.error}`);
          }
        });
      }
    }, 500); // 等待目录生成
  }
  
  // 开始测试第一篇文章
  testArticleSwitch(allArticleIds[0], 0);
  
  // 返回测试结果函数
  return {
    getResults: () => testResults,
    runTest: () => testArticleSwitch(allArticleIds[0], 0)
  };
}

// 提示：在控制台中调用 testTableOfContentsUpdate() 开始测试目录更新功能

// 渲染文章内容
function renderArticle(article) {
  if (!article) {
    document.getElementById('article-content').innerHTML = `
      <div class="text-center py-12">
        <h2 class="text-2xl font-bold mb-4">文章不存在</h2>
        <p class="text-gray-500 mb-6">很抱歉，您访问的文章不存在或已被删除。</p>
        <a href="guides.html" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <i class="fa fa-arrow-left mr-2"></i>
          返回安装指南列表
        </a>
      </div>
    `;
    return;
  }

  // 更新页面标题
  document.title = `${article.title} - 系统安装一站式网站`;

  // 更新文章标题和元数据
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-date').textContent = formatDate(article.date);
  document.getElementById('article-read-count').textContent = formatNumber(article.readCount);
  document.getElementById('article-comments-count').textContent = formatNumber(article.commentsCount);
  document.getElementById('article-category').textContent = article.category;
  document.getElementById('article-thumbnail').src = article.thumbnail;
  document.getElementById('article-thumbnail').alt = article.title;

  // 更新面包屑导航
  document.getElementById('breadcrumb-category').textContent = article.category;
  document.getElementById('breadcrumb-title').textContent = article.title;

  // 渲染文章内容
  document.getElementById('article-content').innerHTML = article.content;
  
  // 动态生成文章目录
  generateTableOfContents(article.content);
  
  // 初始化目录交互功能
  setTimeout(initTableOfContents, 200); // 使用稍长的延迟确保目录DOM元素已生成

  // 渲染上一篇/下一篇链接
  const prevArticle = getPreviousArticle(article.id);
  const nextArticle = getNextArticle(article.id);
  
  const prevArticleElement = document.getElementById('prev-article');
  if (prevArticle) {
    prevArticleElement.href = `article.html?id=${prevArticle.id}`;
    prevArticleElement.innerHTML = `<i class="fa fa-angle-left mr-2"></i>
      <span class="text-sm line-clamp-1">${prevArticle.title}</span>`;
  } else {
    prevArticleElement.classList.add('opacity-50', 'cursor-not-allowed');
    prevArticleElement.href = '#';
    prevArticleElement.innerHTML = `<i class="fa fa-angle-left mr-2"></i>
      <span class="text-sm line-clamp-1">没有上一篇了</span>`;
  }
  
  const nextArticleElement = document.getElementById('next-article');
  if (nextArticle) {
    nextArticleElement.href = `article.html?id=${nextArticle.id}`;
    nextArticleElement.innerHTML = `<span class="text-sm line-clamp-1">${nextArticle.title}</span>
      <i class="fa fa-angle-right ml-2"></i>`;
  } else {
    nextArticleElement.classList.add('opacity-50', 'cursor-not-allowed');
    nextArticleElement.href = '#';
    nextArticleElement.innerHTML = `<span class="text-sm line-clamp-1">没有下一篇了</span>
      <i class="fa fa-angle-right ml-2"></i>`;
  }

  // 渲染相关推荐
  const relatedGuidesContainer = document.getElementById('related-guides');
  relatedGuidesContainer.innerHTML = '';
  
  const relatedArticles = getRelatedArticles(article.id, article.category);
  if (relatedArticles.length > 0) {
    relatedArticles.forEach(relatedArticle => {
      const relatedItem = document.createElement('div');
      relatedItem.className = 'flex items-start group';
      relatedItem.innerHTML = `
        <img src="${relatedArticle.thumbnail}" alt="${relatedArticle.title}" class="w-20 h-20 object-cover rounded-lg mr-3 group-hover:opacity-90 transition-opacity">
        <div>
          <a href="article.html?id=${relatedArticle.id}" class="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">${relatedArticle.title}</a>
          <p class="text-xs text-gray-500 mt-1">${formatDate(relatedArticle.date)}</p>
        </div>
      `;
      relatedGuidesContainer.appendChild(relatedItem);
    });
  } else {
    relatedGuidesContainer.innerHTML = `<p class="text-sm text-gray-500 text-center py-2">暂无相关文章推荐</p>`;
  }

  // 添加文章加载完成的动画效果
  const articleContent = document.getElementById('article-content');
  articleContent.style.opacity = '0';
  articleContent.style.transform = 'translateY(20px)';
  articleContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  setTimeout(() => {
    articleContent.style.opacity = '1';
    articleContent.style.transform = 'translateY(0)';
  }, 100);

  // 增加阅读次数（模拟）
  article.readCount += 1;
  document.getElementById('article-read-count').textContent = formatNumber(article.readCount);
}

// 初始化页面
function initPage() {
  // 从URL获取文章ID
  const articleId = getUrlParameter('id');
  
  if (articleId) {
    // 获取并渲染文章
    const article = getArticleById(articleId);
    renderArticle(article);
  } else {
    // 如果没有ID参数，显示错误信息
    renderArticle(null);
  }
}

// 当页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initPage);

// 导出函数供其他模块使用（如果需要）
window.articleModule = {
  getArticleById,
  renderArticle
};