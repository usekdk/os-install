// 内容编辑器核心功能实现

// 初始化编辑器
function initEditor() {
    // 设置当前日期
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('article-date').value = today;
    document.getElementById('preview-date').textContent = today;
    
    // 绑定编辑器工具按钮
    bindEditorTools();
    
    // 绑定模态框事件
    bindModalEvents();
    
    // 绑定模板按钮
    bindTemplateButtons();
    
    // 绑定表单实时预览
    bindRealTimePreview();
    
    // 绑定保存和发布按钮
    bindActionButtons();
    
    // 绑定发布状态切换
    document.getElementById('publish-status').addEventListener('change', function() {
        updateArticleStatus();
    });
}

// 绑定编辑器工具按钮
function bindEditorTools() {
    const editor = document.getElementById('article-content-editor');
    const toolButtons = document.querySelectorAll('.editor-tool-btn');
    
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const command = this.getAttribute('data-command');
            const value = this.getAttribute('data-value');
            
            if (command) {
                document.execCommand(command, false, value);
                editor.focus();
            }
        });
    });
}

// 绑定模态框事件
function bindModalEvents() {
    // 关闭模态框
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.fixed').forEach(modal => {
                modal.classList.add('hidden');
            });
        });
    });
    
    // 插入链接按钮
    document.getElementById('insert-link-btn').addEventListener('click', function() {
        // 获取选中文本作为默认链接文本
        const selection = window.getSelection();
        if (selection.toString()) {
            document.getElementById('link-text').value = selection.toString();
        }
        document.getElementById('link-modal').classList.remove('hidden');
    });
    
    // 确认插入链接
    document.getElementById('confirm-link').addEventListener('click', function() {
        const linkText = document.getElementById('link-text').value;
        const linkUrl = document.getElementById('link-url').value;
        
        if (linkText && linkUrl) {
            const editor = document.getElementById('article-content-editor');
            editor.focus();
            document.execCommand('createLink', false, linkUrl);
            
            // 更新链接文本
            const selectedLinks = document.querySelectorAll('#article-content-editor a');
            const lastLink = selectedLinks[selectedLinks.length - 1];
            if (lastLink) {
                lastLink.textContent = linkText;
            }
            
            // 关闭模态框并清空
            document.getElementById('link-modal').classList.add('hidden');
            document.getElementById('link-text').value = '';
            document.getElementById('link-url').value = '';
            
            // 更新预览
            updatePreview();
        }
    });
    
    // 插入图片按钮
    document.getElementById('insert-image-btn').addEventListener('click', function() {
        document.getElementById('image-modal').classList.remove('hidden');
    });
    
    // 确认插入图片
    document.getElementById('confirm-image').addEventListener('click', function() {
        const imageUrl = document.getElementById('image-url').value;
        const imageAlt = document.getElementById('image-alt').value;
        
        if (imageUrl) {
            const editor = document.getElementById('article-content-editor');
            editor.focus();
            
            // 创建图片元素并插入
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = imageAlt || '图片';
            img.className = 'w-full h-auto rounded-lg shadow-md my-4';
            
            // 使用Range插入图片
            const selection = window.getSelection();
            const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
            
            if (range) {
                range.deleteContents();
                range.insertNode(img);
                
                // 移动光标到图片后
                range.setStartAfter(img);
                range.setEndAfter(img);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            
            // 关闭模态框并清空
            document.getElementById('image-modal').classList.add('hidden');
            document.getElementById('image-url').value = '';
            document.getElementById('image-alt').value = '';
            
            // 更新预览
            updatePreview();
        }
    });
    
    // 插入代码块按钮
    document.getElementById('insert-code-btn').addEventListener('click', function() {
        document.getElementById('code-modal').classList.remove('hidden');
    });
    
    // 确认插入代码块
    document.getElementById('confirm-code').addEventListener('click', function() {
        const codeContent = document.getElementById('code-content').value;
        
        if (codeContent) {
            const editor = document.getElementById('article-content-editor');
            editor.focus();
            
            // 创建代码块元素并插入
            const pre = document.createElement('pre');
            pre.className = 'bg-gray-100 p-4 rounded-lg text-sm my-4 overflow-x-auto';
            pre.textContent = codeContent;
            
            // 使用Range插入代码块
            const selection = window.getSelection();
            const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
            
            if (range) {
                range.deleteContents();
                range.insertNode(pre);
                
                // 移动光标到代码块后
                range.setStartAfter(pre);
                range.setEndAfter(pre);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            
            // 关闭模态框并清空
            document.getElementById('code-modal').classList.add('hidden');
            document.getElementById('code-content').value = '';
            
            // 更新预览
            updatePreview();
        }
    });
}

// 绑定模板按钮
function bindTemplateButtons() {
    // Windows安装模板
    document.getElementById('template-windows').addEventListener('click', function() {
        applyTemplate('windows');
    });
    
    // macOS安装模板
    document.getElementById('template-macos').addEventListener('click', function() {
        applyTemplate('macos');
    });
    
    // Linux安装模板
    document.getElementById('template-linux').addEventListener('click', function() {
        applyTemplate('linux');
    });
    
    // 通用教程模板
    document.getElementById('template-guide').addEventListener('click', function() {
        applyTemplate('guide');
    });
    
    // 常见问题模板
    document.getElementById('template-faq').addEventListener('click', function() {
        applyTemplate('faq');
    });
    
    // 技巧分享模板
    document.getElementById('template-tip').addEventListener('click', function() {
        applyTemplate('tip');
    });
}

// 应用模板
function applyTemplate(templateType) {
    let title = '';
    let category = '';
    let description = '';
    let content = '';
    let thumbnail = '';
    
    switch(templateType) {
        case 'windows':
            title = 'Windows系统安装教程';
            category = 'Windows';
            description = '详细介绍Windows系统的安装步骤，包括准备工作、启动盘制作、BIOS设置等关键步骤，适合各类用户参考。';
            thumbnail = 'https://picsum.photos/id/26/1200/600';
            content = `
                <h2>准备工作</h2>
                <p>在开始Windows安装前，请确保您已完成以下准备工作：</p>
                <ul>
                    <li>备份所有重要数据到外部存储设备</li>
                    <li>确保您的电脑符合Windows的系统要求</li>
                    <li>下载最新版Windows安装镜像</li>
                    <li>准备一个至少8GB的U盘作为启动盘</li>
                </ul>
                
                <h2>制作Windows启动盘</h2>
                <p>使用Media Creation Tool或Rufus制作Windows启动盘：</p>
                <ol>
                    <li>下载并安装Media Creation Tool</li>
                    <li>运行工具，选择"创建安装媒体(USB闪存驱动器、DVD或ISO文件)"</li>
                    <li>按照提示选择语言、版本和架构</li>
                    <li>选择"USB闪存驱动器"并指定您的U盘</li>
                    <li>等待工具完成启动盘创建</li>
                </ol>
                
                <h2>进入BIOS/UEFI设置</h2>
                <p>重启电脑并进入BIOS/UEFI设置，更改启动顺序：</p>
                <ul>
                    <li>重启电脑，在开机时按下对应的BIOS/UEFI快捷键（通常是F2、F10、F12、Delete等）</li>
                    <li>在BIOS/UEFI中，找到启动选项（Boot Options）</li>
                    <li>将U盘设置为第一启动设备</li>
                    <li>启用UEFI启动模式（如果您的电脑支持）</li>
                    <li>保存设置并退出</li>
                </ul>
                
                <h2>开始安装Windows</h2>
                <p>电脑将从U盘启动，进入Windows安装界面：</p>
                <ol>
                    <li>选择语言、时间和键盘输入方式，点击"下一步"</li>
                    <li>点击"现在安装"开始安装过程</li>
                    <li>输入您的Windows产品密钥（如果没有，可以选择"我没有产品密钥"）</li>
                    <li>选择您想要安装的Windows版本</li>
                    <li>接受许可条款</li>
                    <li>选择"自定义：仅安装Windows（高级）"选项</li>
                </ol>
                
                <h2>硬盘分区</h2>
                <p>在分区界面，您可以创建、删除或格式化分区：</p>
                
                <h2>等待安装完成</h2>
                <p>Windows将开始安装，这个过程可能需要一段时间。</p>
                
                <h2>初始设置</h2>
                <p>安装完成后，您需要进行一些初始设置：</p>
                <ol>
                    <li>选择您的地区和键盘布局</li>
                    <li>连接到Wi-Fi网络</li>
                    <li>设置您的Microsoft账户或创建本地账户</li>
                    <li>选择隐私设置</li>
                    <li>等待系统完成最终设置</li>
                </ol>
                
                <h2>安装驱动程序</h2>
                <p>Windows安装完成后，您应该确保所有驱动程序都是最新的。</p>
                
                <h2>系统优化</h2>
                <p>以下是一些Windows系统优化建议：</p>
                <ul>
                    <li>禁用不必要的启动项</li>
                    <li>调整电源选项以获得最佳性能或电池寿命</li>
                    <li>设置Windows安全中心的实时保护</li>
                    <li>创建系统还原点，以备将来需要</li>
                </ul>
            `;
            break;
            
        case 'macos':
            title = 'macOS系统升级与安装指南';
            category = 'macOS';
            description = '苹果macOS系统的升级方法和全新安装教程，包含兼容性检查、数据备份、安装过程和常见问题解决方案。';
            thumbnail = 'https://picsum.photos/id/27/1200/600';
            content = `
                <h2>macOS系统概述</h2>
                <p>macOS是苹果公司的桌面操作系统，本教程将指导您完成从准备到安装的全过程。</p>
                
                <h2>兼容性检查</h2>
                <p>首先，您需要确认您的Mac是否兼容最新版本的macOS：</p>
                <ul>
                    <li>MacBook Pro (2018年及更新机型)</li>
                    <li>MacBook Air (2018年及更新机型)</li>
                    <li>Mac mini (2018年及更新机型)</li>
                    <li>iMac (2019年及更新机型)</li>
                    <li>iMac Pro (2017年)</li>
                    <li>Mac Pro (2019年及更新机型)</li>
                    <li>Mac Studio (2022年及更新机型)</li>
                </ul>
                
                <h2>升级前准备工作</h2>
                <p>在升级到最新版macOS之前，请完成以下准备工作：</p>
                <ol>
                    <li><strong>备份数据</strong>：使用Time Machine或其他备份方法备份您的所有重要数据</li>
                    <li><strong>检查可用空间</strong>：确保您的Mac至少有20GB的可用存储空间</li>
                    <li><strong>更新应用程序</strong>：确保所有已安装的应用程序都是最新版本</li>
                    <li><strong>检查第三方软件兼容性</strong>：确认您使用的关键软件与新版本macOS兼容</li>
                </ol>
                
                <h2>升级安装方法</h2>
                <p>如果您当前运行的是较新版本的macOS，可以直接升级：</p>
                <ol>
                    <li>打开App Store</li>
                    <li>搜索最新版本的macOS</li>
                    <li>点击"获取"按钮开始下载</li>
                    <li>下载完成后，安装程序将自动启动</li>
                    <li>按照屏幕上的提示完成安装过程</li>
                    <li>Mac将重启并完成安装</li>
                </ol>
                
                <h2>全新安装方法</h2>
                <p>如果您想要进行全新安装，按照以下步骤操作：</p>
                
                <h3>1. 创建可引导安装器</h3>
                <ol>
                    <li>从App Store下载macOS安装程序</li>
                    <li>准备一个至少16GB的USB驱动器</li>
                    <li>使用终端创建可引导安装器</li>
                </ol>
                
                <h3>2. 使用可引导安装器安装</h3>
                <ol>
                    <li>将创建好的可引导安装器连接到Mac</li>
                    <li>启动到恢复模式</li>
                    <li>格式化硬盘</li>
                    <li>安装macOS</li>
                </ol>
                
                <h2>安装后设置</h2>
                <p>安装完成后，您需要完成以下设置：</p>
                <ul>
                    <li>登录您的Apple ID</li>
                    <li>设置Touch ID或密码</li>
                    <li>选择隐私设置</li>
                    <li>从备份恢复数据（如果您之前进行了备份）</li>
                </ul>
            `;
            break;
            
        case 'linux':
            title = 'Linux发行版安装详解';
            category = 'Linux';
            description = '从制作启动盘到系统分区，再到软件配置的完整Linux安装教程，让Linux新手也能轻松上手。';
            thumbnail = 'https://picsum.photos/id/28/1200/600';
            content = `
                <h2>Linux发行版简介</h2>
                <p>Linux是一种开源操作系统，有许多不同的发行版可供选择，如Ubuntu、Fedora、Debian等。</p>
                
                <h2>系统要求</h2>
                <p>在安装Linux之前，请确保您的计算机满足以下最低系统要求：</p>
                <ul>
                    <li>2 GHz双核处理器或更高</li>
                    <li>4 GB内存（推荐8 GB）</li>
                    <li>25 GB的硬盘空间（推荐50 GB）</li>
                    <li>支持1024x768分辨率的显卡和显示器</li>
                    <li>互联网连接</li>
                    <li>可启动的USB驱动器或DVD</li>
                </ul>
                
                <h2>准备工作</h2>
                
                <h3>1. 下载Linux ISO镜像</h3>
                <ol>
                    <li>访问Linux发行版的官方下载页面</li>
                    <li>下载最新的ISO镜像</li>
                    <li>下载完成后，验证ISO文件的完整性（可选）</li>
                </ol>
                
                <h3>2. 创建Linux安装U盘</h3>
                <p>您可以使用以下工具创建可启动的Linux安装U盘：</p>
                
                <h4>在Windows上：</h4>
                <ol>
                    <li>使用Rufus或BalenaEtcher工具</li>
                    <li>插入您的USB驱动器</li>
                    <li>选择您下载的Linux ISO文件</li>
                    <li>点击开始按钮，等待创建完成</li>
                </ol>
                
                <h2>开始安装</h2>
                
                <h3>1. 从USB启动</h3>
                <ol>
                    <li>将Linux安装U盘插入您的计算机</li>
                    <li>重新启动计算机</li>
                    <li>进入启动菜单，选择从USB驱动器启动</li>
                </ol>
                
                <h3>2. 选择安装选项</h3>
                <p>当Linux启动菜单出现时，您有以下选项：</p>
                <ul>
                    <li><strong>Try Linux</strong>：在安装前先体验Linux</li>
                    <li><strong>Install Linux</strong>：直接开始安装过程</li>
                </ul>
                
                <h3>3. 选择语言和键盘布局</h3>
                <ol>
                    <li>选择您的首选语言（推荐选择中文简体）</li>
                    <li>选择您的键盘布局</li>
                </ol>
                
                <h3>4. 连接到网络</h3>
                <p>如果您有可用的无线网络，选择并连接到它。</p>
                
                <h3>5. 选择安装类型</h3>
                <p>您有几个安装选项：</p>
                <ul>
                    <li><strong>与Windows一起安装</strong>：双系统安装</li>
                    <li><strong>清除整个磁盘并安装</strong>：单系统安装</li>
                    <li><strong>手动分区</strong>：自定义分区设置</li>
                </ul>
                
                <h3>6. 设置您的身份</h3>
                <ol>
                    <li>输入您的姓名</li>
                    <li>输入您的计算机名称</li>
                    <li>创建用户名</li>
                    <li>设置密码</li>
                </ol>
                
                <h3>7. 等待安装完成</h3>
                <p>安装过程将开始，完成后重启计算机。</p>
            `;
            break;
            
        case 'guide':
            title = '通用系统安装教程';
            category = '通用教程';
            description = '适用于各种操作系统的通用安装步骤指南，从准备工作到系统设置的全面介绍。';
            thumbnail = 'https://picsum.photos/id/29/1200/600';
            content = `
                <h2>简介</h2>
                <p>本教程提供了操作系统安装的通用步骤和注意事项，适用于各种常见的操作系统。</p>
                
                <h2>安装前准备</h2>
                <p>在开始安装任何操作系统前，请确保您已做好以下准备：</p>
                
                <h3>1. 数据备份</h3>
                <p>备份所有重要数据是安装系统前最重要的步骤之一：</p>
                <ul>
                    <li>个人文件（文档、照片、音乐等）</li>
                    <li>应用程序数据和设置</li>
                    <li>浏览器书签和配置</li>
                    <li>其他重要数据</li>
                </ul>
                
                <h3>2. 硬件检查</h3>
                <p>确保您的硬件符合操作系统的要求：</p>
                <ul>
                    <li>处理器（CPU）性能</li>
                    <li>内存（RAM）容量</li>
                    <li>硬盘空间</li>
                    <li>显卡兼容性</li>
                </ul>
                
                <h3>3. 准备安装媒体</h3>
                <p>根据您选择的安装方式，准备相应的安装媒体：</p>
                <ul>
                    <li>可启动U盘</li>
                    <li>安装光盘</li>
                    <li>ISO镜像文件（用于虚拟机安装）</li>
                </ul>
                
                <h2>安装流程</h2>
                
                <h3>1. 引导设置</h3>
                <p>配置您的计算机从安装媒体启动：</p>
                <ol>
                    <li>进入BIOS/UEFI设置</li>
                    <li>调整启动顺序，将安装媒体设为首选启动设备</li>
                    <li>保存设置并退出</li>
                </ol>
                
                <h3>2. 开始安装</h3>
                <p>计算机从安装媒体启动后，按照提示开始安装过程：</p>
                <ul>
                    <li>选择语言和区域设置</li>
                    <li>接受许可协议</li>
                    <li>选择安装类型（全新安装、升级等）</li>
                </ul>
                
                <h3>3. 磁盘分区</h3>
                <p>根据需要进行磁盘分区：</p>
                <ul>
                    <li>使用整个磁盘</li>
                    <li>自定义分区（高级用户）</li>
                </ul>
                
                <h3>4. 等待安装完成</h3>
                <p>安装过程可能需要一段时间，具体取决于您的计算机性能和所选操作系统。</p>
                
                <h2>安装后设置</h2>
                
                <h3>1. 初始配置</h3>
                <p>安装完成后，进行初始系统配置：</p>
                <ul>
                    <li>创建用户账户</li>
                    <li>设置密码</li>
                    <li>配置网络连接</li>
                </ul>
                
                <h3>2. 安装驱动程序</h3>
                <p>确保所有硬件驱动程序都已正确安装：</p>
                <ul>
                    <li>使用系统自带的驱动更新功能</li>
                    <li>从硬件制造商网站下载最新驱动</li>
                </ul>
                
                <h3>3. 安装必备软件</h3>
                <p>根据您的需求安装常用软件：</p>
                <ul>
                    <li>办公软件</li>
                    <li>浏览器</li>
                    <li>安全软件</li>
                    <li>多媒体工具</li>
                </ul>
                
                <h2>常见问题与解决方案</h2>
                <p>列出安装过程中可能遇到的常见问题及解决方法。</p>
            `;
            break;
            
        case 'faq':
            title = '系统安装常见问题解答';
            category = '常见问题';
            description = '收集用户在系统安装过程中最常遇到的问题和解决方案，帮助用户顺利完成安装。';
            thumbnail = 'https://picsum.photos/id/30/1200/600';
            content = `
                <h2>常见问题解答</h2>
                <p>以下是用户在系统安装过程中最常遇到的问题和解决方案。</p>
                
                <h3>安装前准备问题</h3>
                
                <h4>Q: 安装系统前需要备份哪些数据？</h4>
                <p>A: 您应该备份所有重要的个人文件，包括文档、照片、音乐、视频等。另外，别忘了备份浏览器书签、邮件和应用程序设置。</p>
                
                <h4>Q: 如何判断我的电脑是否满足系统要求？</h4>
                <p>A: 您可以在操作系统的官方网站上查看最低和推荐系统要求，然后通过系统信息工具查看您电脑的硬件配置。</p>
                
                <h4>Q: 制作启动盘时遇到问题怎么办？</h4>
                <p>A: 确保您使用的U盘没有问题，尝试使用不同的制作工具（如Rufus、BalenaEtcher等），并使用官方下载的ISO镜像文件。</p>
                
                <h3>安装过程问题</h3>
                
                <h4>Q: 电脑无法从U盘启动怎么办？</h4>
                <p>A: 检查您是否正确进入了BIOS/UEFI设置，确认启动顺序已正确调整，尝试不同的USB端口，或者尝试使用不同的U盘。</p>
                
                <h4>Q: 安装过程中系统提示磁盘空间不足怎么办？</h4>
                <p>A: 您需要释放更多的磁盘空间，或者选择安装到其他具有足够空间的磁盘分区。</p>
                
                <h4>Q: 安装过程卡住或失败怎么办？</h4>
                <p>A: 检查您的安装媒体是否有问题，确保硬件连接正常，尝试重新启动安装过程，或者尝试使用不同的安装方法。</p>
                
                <h3>安装后问题</h3>
                
                <h4>Q: 安装后某些硬件无法正常工作怎么办？</h4>
                <p>A: 这通常是驱动程序问题，您可以通过以下方法解决：</p>
                <ul>
                    <li>使用系统的自动更新功能安装驱动</li>
                    <li>从硬件制造商网站下载最新驱动</li>
                    <li>检查设备管理器中的错误提示</li>
                </ul>
                
                <h4>Q: 双系统安装后无法引导到某个系统怎么办？</h4>
                <p>A: 这可能是启动管理器配置问题，您可以使用启动修复工具，或者重新安装引导管理器。</p>
                
                <h4>Q: 安装后系统运行缓慢怎么办？</h4>
                <p>A: 检查您的硬件是否满足系统要求，关闭不必要的启动项，确保硬盘空间充足，定期清理系统垃圾文件。</p>
                
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                    <h4 class="text-blue-700 font-medium mb-1">提示</h4>
                    <p class="text-blue-700">如果您遇到的问题在这里找不到解决方案，请在下方评论区提问，我们的技术人员会尽快为您解答。</p>
                </div>
            `;
            break;
            
        case 'tip':
            title = '系统安装实用技巧分享';
            category = '通用教程';
            description = '分享系统安装过程中的实用技巧和经验，帮助用户优化安装流程，避免常见陷阱。';
            thumbnail = 'https://picsum.photos/id/31/1200/600';
            content = `
                <h2>系统安装实用技巧</h2>
                <p>本文将分享一些系统安装过程中的实用技巧和经验，帮助您更顺利地完成系统安装。</p>
                
                <h2>安装前准备技巧</h2>
                
                <h3>1. 选择合适的安装方式</h3>
                <p>根据您的情况选择最合适的安装方式：</p>
                <ul>
                    <li><strong>升级安装</strong>：保留现有系统设置和文件，但可能会保留旧系统的问题</li>
                    <li><strong>全新安装</strong>：清除所有数据，获得干净的系统，但需要重新安装软件</li>
                    <li><strong>双系统安装</strong>：保留现有系统，同时安装新系统，便于比较和切换</li>
                </ul>
                
                <h3>2. 准备详细的安装清单</h3>
                <p>在开始安装前，创建一个详细的清单：</p>
                <ul>
                    <li>需要备份的重要文件</li>
                    <li>安装后需要重新安装的软件列表</li>
                    <li>重要的用户名和密码（确保安全存储）</li>
                    <li>系统和软件的激活密钥</li>
                </ul>
                
                <h3>3. 选择合适的分区方案</h3>
                <p>根据您的使用习惯选择合适的分区方案：</p>
                <ul>
                    <li><strong>单一分区</strong>：简单，适合初学者，但数据安全性较低</li>
                    <li><strong>多分区</strong>：系统和数据分离，有利于数据保护和系统恢复</li>
                    <li><strong>根据用途分区</strong>：为不同类型的数据创建专用分区</li>
                </ul>
                
                <h2>安装过程技巧</h2>
                
                <h3>1. 优化BIOS/UEFI设置</h3>
                <p>除了设置启动顺序，还可以优化其他设置：</p>
                <ul>
                    <li>启用UEFI模式（如果支持）以获得更好的安全性和性能</li>
                    <li>开启AHCI模式以优化硬盘性能</li>
                    <li>禁用不必要的硬件设备以减少兼容性问题</li>
                </ul>
                
                <h3>2. 记录安装过程中的每一步</h3>
                <p>记录下安装过程中的重要设置和选择，这对于将来排查问题非常有帮助。</p>
                
                <h3>3. 不要着急重启</h3>
                <p>安装完成后，确保所有的更新和配置都已完成，再进行最终重启。</p>
                
                <h2>安装后优化技巧</h2>
                
                <h3>1. 立即创建系统还原点或镜像</h3>
                <p>在安装完所有必要软件和驱动后，立即创建系统还原点或完整镜像，以便在系统出现问题时快速恢复。</p>
                
                <h3>2. 优化启动项和服务</h3>
                <ul>
                    <li>禁用不必要的启动项</li>
                    <li>调整服务启动类型</li>
                    <li>关闭不需要的系统功能</li>
                </ul>
                
                <h3>3. 定期维护计划</h3>
                <p>建立定期的系统维护计划：</p>
                <ul>
                    <li>每周执行一次磁盘清理</li>
                    <li>每月检查一次系统更新</li>
                    <li>每季度更新一次备份</li>
                    <li>每半年检查一次硬件健康状态</li>
                </ul>
                
                <h3>4. 安全设置优化</h3>
                <ul>
                    <li>启用防火墙</li>
                    <li>配置杀毒软件</li>
                    <li>设置强密码和定期更换</li>
                    <li>启用双因素认证（如果支持）</li>
                </ul>
                
                <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                    <h4 class="text-amber-700 font-medium mb-1">注意事项</h4>
                    <p class="text-amber-700">在尝试任何高级设置前，请确保您了解这些更改的影响，并始终保持数据备份。</p>
                </div>
            `;
            break;
    }
    
    // 应用模板内容
    document.getElementById('article-title').value = title;
    document.getElementById('article-category').value = category;
    document.getElementById('article-description').value = description;
    document.getElementById('article-thumbnail').value = thumbnail;
    document.getElementById('article-content-editor').innerHTML = content;
    
    // 更新预览
    updatePreview();
    
    // 显示成功提示
    showToast('模板应用成功！');
}

// 绑定实时预览
function bindRealTimePreview() {
    // 标题实时预览
    document.getElementById('article-title').addEventListener('input', function() {
        document.getElementById('preview-title').textContent = this.value || '文章标题将在这里显示';
    });
    
    // 分类实时预览
    document.getElementById('article-category').addEventListener('change', function() {
        document.getElementById('preview-category').textContent = this.value || '分类';
        document.getElementById('preview-category').classList.toggle('hidden', !this.value);
    });
    
    // 日期实时预览
    document.getElementById('article-date').addEventListener('change', function() {
        document.getElementById('preview-date').textContent = this.value || '2023-00-00';
    });
    
    // 缩略图实时预览
    document.getElementById('article-thumbnail').addEventListener('input', function() {
        const previewThumbnail = document.getElementById('preview-thumbnail');
        const previewContainer = document.getElementById('preview-thumbnail-container');
        
        if (this.value) {
            previewThumbnail.src = this.value;
            previewContainer.classList.remove('hidden');
        } else {
            previewContainer.classList.add('hidden');
        }
    });
    
    // 摘要实时预览
    document.getElementById('article-description').addEventListener('input', function() {
        document.getElementById('preview-description').textContent = this.value || '文章摘要将在这里显示...';
    });
    
    // 内容实时预览
    document.getElementById('article-content-editor').addEventListener('input', function() {
        updatePreview();
    });
    
    // 预览按钮
    document.getElementById('preview-button').addEventListener('click', function() {
        updatePreview();
        showToast('预览已更新！');
    });
}

// 更新预览内容
function updatePreview() {
    const editorContent = document.getElementById('article-content-editor').innerHTML;
    document.getElementById('preview-body').innerHTML = editorContent || '<p>在编辑区输入内容后，预览将显示在这里...</p>';
    
    // 应用预览样式
    const previewImages = document.querySelectorAll('#preview-body img');
    previewImages.forEach(img => {
        img.className = 'w-full h-auto rounded-lg shadow-md my-4';
    });
    
    const previewPre = document.querySelectorAll('#preview-body pre');
    previewPre.forEach(pre => {
        pre.className = 'bg-gray-100 p-4 rounded-lg text-sm my-4 overflow-x-auto';
    });
}

// 绑定操作按钮
function bindActionButtons() {
    // 保存按钮
    document.getElementById('save-button').addEventListener('click', saveArticle);
    
    // 发布按钮
    document.getElementById('publish-button').addEventListener('click', publishArticle);
    
    // 放弃修改按钮
    document.getElementById('discard-button').addEventListener('click', function() {
        if (confirm('确定要放弃所有修改吗？此操作不可撤销！')) {
            showToast('已放弃修改！');
            // 在实际应用中，这里应该重新加载页面或恢复原始数据
        }
    });
}

// 保存文章
function saveArticle() {
    // 收集文章数据
    const articleData = collectArticleData();
    
    // 模拟保存操作
    console.log('保存文章数据:', articleData);
    
    // 更新最后保存时间
    const now = new Date();
    const formattedTime = now.toLocaleString('zh-CN');
    document.getElementById('last-saved').textContent = formattedTime;
    
    // 显示成功提示
    showToast('文章已成功保存！');
    
    // 在实际应用中，这里应该将数据发送到服务器
}

// 发布文章
function publishArticle() {
    // 检查必填字段
    if (!validateArticle()) {
        showToast('请填写所有必填字段！', false);
        return;
    }
    
    // 收集文章数据
    const articleData = collectArticleData();
    articleData.status = 'published';
    
    // 模拟发布操作
    console.log('发布文章数据:', articleData);
    
    // 更新状态
    document.getElementById('article-status').textContent = '已发布';
    document.getElementById('publish-status').checked = true;
    
    // 更新最后保存时间
    const now = new Date();
    const formattedTime = now.toLocaleString('zh-CN');
    document.getElementById('last-saved').textContent = formattedTime;
    
    // 显示成功提示
    showToast('文章已成功发布！');
    
    // 在实际应用中，这里应该将数据发送到服务器并返回文章ID
    // 然后可以跳转到文章详情页
}

// 收集文章数据
function collectArticleData() {
    return {
        title: document.getElementById('article-title').value,
        category: document.getElementById('article-category').value,
        date: document.getElementById('article-date').value,
        thumbnail: document.getElementById('article-thumbnail').value,
        description: document.getElementById('article-description').value,
        content: document.getElementById('article-content-editor').innerHTML,
        tags: document.getElementById('article-tags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: document.getElementById('article-author').value || '系统重装团队',
        status: document.getElementById('publish-status').checked ? 'published' : 'draft',
        readCount: 0,
        commentsCount: 0,
        // 在实际应用中，还需要添加其他字段如创建时间、更新时间等
    };
}

// 验证文章
function validateArticle() {
    const title = document.getElementById('article-title').value.trim();
    const category = document.getElementById('article-category').value;
    const date = document.getElementById('article-date').value;
    const thumbnail = document.getElementById('article-thumbnail').value.trim();
    const description = document.getElementById('article-description').value.trim();
    const content = document.getElementById('article-content-editor').innerHTML.trim();
    
    return title && category && date && thumbnail && description && content && content !== '<p>开始输入文章内容...</p>';
}

// 更新文章状态
function updateArticleStatus() {
    const isPublished = document.getElementById('publish-status').checked;
    document.getElementById('article-status').textContent = isPublished ? '已发布' : '草稿';
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

// 当页面加载完成后初始化编辑器
window.addEventListener('DOMContentLoaded', initEditor);

// 导出函数供其他模块使用（如果需要）
window.editorModule = {
    saveArticle,
    publishArticle,
    applyTemplate
};