// 完整的文章数据，包含详细内容
const articlesData = [
  {
    id: 1,
    title: "Windows 11 2023 更新版本全新安装教程",
    date: "2023-11-15",
    description: "详细介绍Windows 11最新版本的系统安装步骤，包括UEFI设置、分区方案、驱动安装和系统优化，适合初学者和进阶用户。",
    thumbnail: "https://picsum.photos/id/26/1200/600",
    category: "Windows",
    readCount: 12543,
    commentsCount: 326,
    content: `
      <h2>准备工作</h2>
      <p>在开始Windows 11安装前，请确保您已完成以下准备工作：</p>
      <ul>
        <li>备份所有重要数据到外部存储设备</li>
        <li>确保您的电脑符合Windows 11的系统要求</li>
        <li>下载最新版Windows 11安装镜像</li>
        <li>准备一个至少8GB的U盘作为启动盘</li>
      </ul>
      
      <h2>制作Windows 11启动盘</h2>
      <p>使用Media Creation Tool或Rufus制作Windows 11启动盘：</p>
      <ol>
        <li>下载并安装<a href="#" class="text-primary hover:underline">Media Creation Tool</a></li>
        <li>运行工具，选择"创建安装媒体(USB闪存驱动器、DVD或ISO文件)"</li>
        <li>按照提示选择语言、版本和架构</li>
        <li>选择"USB闪存驱动器"并指定您的U盘</li>
        <li>等待工具完成启动盘创建</li>
      </ol>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/48/1200/600" alt="Windows 11 Media Creation Tool" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图1: 使用Media Creation Tool制作启动盘</p>
      </div>
      
      <h2>进入BIOS/UEFI设置</h2>
      <p>重启电脑并进入BIOS/UEFI设置，更改启动顺序：</p>
      <ul>
        <li>重启电脑，在开机时按下对应的BIOS/UEFI快捷键（通常是F2、F10、F12、Delete等）</li>
        <li>在BIOS/UEFI中，找到启动选项（Boot Options）</li>
        <li>将U盘设置为第一启动设备</li>
        <li>启用UEFI启动模式（如果您的电脑支持）</li>
        <li>保存设置并退出</li>
      </ul>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/49/1200/600" alt="BIOS启动设置" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图2: 配置BIOS启动顺序</p>
      </div>
      
      <h2>开始安装Windows 11</h2>
      <p>电脑将从U盘启动，进入Windows 11安装界面：</p>
      <ol>
        <li>选择语言、时间和键盘输入方式，点击"下一步"</li>
        <li>点击"现在安装"开始安装过程</li>
        <li>输入您的Windows产品密钥（如果没有，可以选择"我没有产品密钥"）</li>
        <li>选择您想要安装的Windows 11版本</li>
        <li>接受许可条款</li>
        <li>选择"自定义：仅安装Windows（高级）"选项</li>
      </ol>
      
      <h2>硬盘分区</h2>
      <p>在分区界面，您可以创建、删除或格式化分区：</p>
      <pre class="bg-gray-100 p-4 rounded-lg text-sm">
          1. 选择您想要安装Windows的硬盘
          2. 根据需要删除现有分区
          3. 点击"新建"创建新分区
          4. 输入分区大小（建议至少100GB）
          5. 点击"应用"确认分区创建
          6. Windows会自动创建必要的系统分区
          7. 选择主分区并点击"下一步"
      </pre>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/60/1200/600" alt="Windows 11分区界面" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图3: Windows 11安装时的分区界面</p>
      </div>
      
      <h2>等待安装完成</h2>
      <p>Windows 11将开始安装，这个过程可能需要一段时间：</p>
      <ul>
        <li>电脑可能会自动重启多次，这是正常现象</li>
        <li>安装过程中请勿关闭电源或断开U盘</li>
        <li>耐心等待安装完成，直到出现设置界面</li>
      </ul>
      
      <h2>初始设置</h2>
      <p>安装完成后，您需要进行一些初始设置：</p>
      <ol>
        <li>选择您的地区和键盘布局</li>
        <li>连接到Wi-Fi网络</li>
        <li>设置您的Microsoft账户或创建本地账户</li>
        <li>选择隐私设置</li>
        <li>等待系统完成最终设置</li>
      </ol>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/61/1200/600" alt="Windows 11初始设置" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图4: Windows 11的初始设置界面</p>
      </div>
      
      <h2>安装驱动程序</h2>
      <p>Windows 11安装完成后，您应该确保所有驱动程序都是最新的：</p>
      <ul>
        <li>使用Windows更新检查并安装驱动更新</li>
        <li>访问电脑制造商的官方网站下载最新驱动</li>
        <li>特别是显卡、声卡和网卡驱动</li>
      </ul>
      
      <h2>系统优化</h2>
      <p>以下是一些Windows 11系统优化建议：</p>
      <ol>
        <li>禁用不必要的启动项</li>
        <li>调整电源选项以获得最佳性能或电池寿命</li>
        <li>设置Windows安全中心的实时保护</li>
        <li>创建系统还原点，以备将来需要</li>
        <li>考虑使用<a href="#" class="text-primary hover:underline">磁盘清理</a>和<a href="#" class="text-primary hover:underline">磁盘碎片整理</a></li>
      </ol>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <h4 class="text-blue-700 font-medium mb-1">提示</h4>
        <p class="text-blue-700">如果您在安装过程中遇到问题，请参考<a href="#" class="underline">Windows 11安装常见问题解答</a>或在下方评论区提问。</p>
      </div>
      
      <h2>结论</h2>
      <p>恭喜您成功安装了Windows 11！这个最新版本带来了全新的界面设计、更好的性能和新的功能。随着您继续使用，您会发现更多Windows 11的特性和优势。</p>
    `
  },
  {
    id: 2,
    title: "macOS Sonoma 升级与全新安装完整指南",
    date: "2023-11-10",
    description: "苹果最新macOS Sonoma系统的升级方法和全新安装教程，包含兼容性检查、数据备份、安装过程和常见问题解决方案。",
    thumbnail: "https://picsum.photos/id/27/1200/600",
    category: "macOS",
    readCount: 8921,
    commentsCount: 189,
    content: `
      <h2>macOS Sonoma 概述</h2>
      <p>macOS Sonoma是苹果公司最新的桌面操作系统，带来了全新的功能和性能改进。在开始安装前，让我们先了解一下这篇指南将涵盖的内容。</p>
      
      <h2>兼容性检查</h2>
      <p>首先，您需要确认您的Mac是否兼容macOS Sonoma：</p>
      <ul>
        <li>MacBook Pro (2018年及更新机型)</li>
        <li>MacBook Air (2018年及更新机型)</li>
        <li>Mac mini (2018年及更新机型)</li>
        <li>iMac (2019年及更新机型)</li>
        <li>iMac Pro (2017年)</li>
        <li>Mac Pro (2019年及更新机型)</li>
        <li>Mac Studio (2022年及更新机型)</li>
      </ul>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/160/1200/600" alt="macOS Sonoma" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图1: macOS Sonoma主界面</p>
      </div>
      
      <h2>升级前准备工作</h2>
      <p>在升级到macOS Sonoma之前，请完成以下准备工作：</p>
      <ol>
        <li><strong>备份数据</strong>：使用Time Machine或其他备份方法备份您的所有重要数据</li>
        <li><strong>检查可用空间</strong>：确保您的Mac至少有20GB的可用存储空间</li>
        <li><strong>更新应用程序</strong>：确保所有已安装的应用程序都是最新版本</li>
        <li><strong>检查第三方软件兼容性</strong>：确认您使用的关键软件与macOS Sonoma兼容</li>
      </ol>
      
      <h2>升级安装方法</h2>
      <p>如果您当前运行的是较新版本的macOS，可以直接升级：</p>
      <ol>
        <li>打开App Store</li>
        <li>搜索"macOS Sonoma"</li>
        <li>点击"获取"按钮开始下载</li>
        <li>下载完成后，安装程序将自动启动</li>
        <li>按照屏幕上的提示完成安装过程</li>
        <li>Mac将重启并完成安装</li>
      </ol>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/161/1200/600" alt="macOS升级安装" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图2: macOS Sonoma下载页面</p>
      </div>
      
      <h2>全新安装方法</h2>
      <p>如果您想要进行全新安装，按照以下步骤操作：</p>
      
      <h3>1. 创建可引导安装器</h3>
      <ol>
        <li>从App Store下载macOS Sonoma（但不要运行安装）</li>
        <li>准备一个至少16GB的USB驱动器</li>
        <li>打开终端应用程序</li>
        <li>输入以下命令（将"MyVolume"替换为您的USB驱动器名称）：</li>
      </ol>
      
      <pre class="bg-gray-100 p-4 rounded-lg text-sm">
        sudo /Applications/Install\ macOS\ Sonoma.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
      </pre>
      
      <h3>2. 使用可引导安装器安装</h3>
      <ol>
        <li>将创建好的可引导安装器连接到Mac</li>
        <li>关闭Mac</li>
        <li>按住特定的启动键启动到恢复模式（Intel Mac按住Option键，Apple Silicon Mac按住电源按钮）</li>
        <li>选择从USB驱动器启动</li>
        <li>在macOS实用工具中，选择"磁盘工具"</li>
        <li>选择您的Mac主驱动器并点击"抹掉"，选择APFS格式</li>
        <li>退出磁盘工具，选择"安装macOS Sonoma"</li>
        <li>按照屏幕提示完成安装</li>
      </ol>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/162/1200/600" alt="macOS全新安装" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图3: macOS实用工具界面</p>
      </div>
      
      <h2>安装后设置</h2>
      <p>安装完成后，您需要完成以下设置：</p>
      <ul>
        <li>登录您的Apple ID</li>
        <li>设置Touch ID或密码</li>
        <li>选择隐私设置</li>
        <li>从备份恢复数据（如果您之前进行了备份）</li>
      </ul>
      
      <h2>macOS Sonoma新功能</h2>
      <p>macOS Sonoma带来了许多新功能，包括：</p>
      <ul>
        <li>桌面小部件</li>
        <li>游戏模式，提供更好的游戏性能</li>
        <li>视频会议增强功能</li>
        <li>新的Safari功能</li>
        <li>改进的系统性能和电池寿命</li>
      </ul>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/163/1200/600" alt="macOS Sonoma新功能" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图4: macOS Sonoma的桌面小部件功能</p>
      </div>
      
      <h2>常见问题解答</h2>
      <p>以下是安装过程中可能遇到的一些常见问题：</p>
      
      <h3>1. 安装过程卡住或失败怎么办？</h3>
      <p>如果安装过程卡住或失败，您可以尝试：</p>
      <ul>
        <li>重新启动Mac并再次尝试</li>
        <li>确保您的Mac连接到稳定的网络</li>
        <li>检查Mac的存储空间是否充足</li>
      </ul>
      
      <h3>2. 升级后应用程序不兼容怎么办？</h3>
      <p>如果某些应用程序在升级后不兼容，您可以：</p>
      <ul>
        <li>检查应用程序开发者的网站获取更新</li>
        <li>尝试使用Rosetta 2运行不兼容的应用程序</li>
        <li>考虑使用替代应用程序</li>
      </ul>
      
      <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
        <h4 class="text-green-700 font-medium mb-1">成功提示</h4>
        <p class="text-green-700">恭喜您成功安装了macOS Sonoma！享受新系统带来的功能和改进吧。</p>
      </div>
    `
  },
  {
    id: 3,
    title: "Ubuntu 22.04 LTS 长期支持版安装详解",
    date: "2023-11-05",
    description: "从制作启动盘到系统分区，再到软件配置的完整Ubuntu 22.04 LTS安装教程，让Linux新手也能轻松上手。",
    thumbnail: "https://picsum.photos/id/28/1200/600",
    category: "Linux",
    readCount: 6754,
    commentsCount: 234,
    content: `
      <h2>Ubuntu 22.04 LTS 简介</h2>
      <p>Ubuntu 22.04 LTS（Jammy Jellyfish）是一个长期支持版本，提供5年的安全更新和技术支持，非常适合桌面用户和服务器环境。本教程将指导您完成从准备到安装的全过程。</p>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/180/1200/600" alt="Ubuntu 22.04 LTS桌面" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图1: Ubuntu 22.04 LTS桌面环境</p>
      </div>
      
      <h2>系统要求</h2>
      <p>在安装Ubuntu 22.04 LTS之前，请确保您的计算机满足以下最低系统要求：</p>
      <ul>
        <li>2 GHz双核处理器或更高</li>
        <li>4 GB内存（推荐8 GB）</li>
        <li>25 GB的硬盘空间（推荐50 GB）</li>
        <li>支持1024x768分辨率的显卡和显示器</li>
        <li>互联网连接（用于下载更新和安装额外软件）</li>
        <li>可启动的USB驱动器或DVD</li>
      </ul>
      
      <h2>准备工作</h2>
      
      <h3>1. 下载Ubuntu 22.04 LTS ISO镜像</h3>
      <ol>
        <li>访问<a href="https://ubuntu.com/download/desktop" class="text-primary hover:underline">Ubuntu官方下载页面</a></li>
        <li>下载Ubuntu 22.04 LTS桌面版ISO镜像</li>
        <li>下载完成后，验证ISO文件的完整性（可选）</li>
      </ol>
      
      <h3>2. 创建Ubuntu安装U盘</h3>
      <p>您可以使用以下工具创建可启动的Ubuntu安装U盘：</p>
      
      <h4>在Windows上：</h4>
      <ol>
        <li>下载并安装<a href="https://rufus.ie/" class="text-primary hover:underline">Rufus</a>工具</li>
        <li>插入您的USB驱动器（至少4GB）</li>
        <li>打开Rufus，选择您的USB驱动器</li>
        <li>点击"选择"并浏览到您下载的Ubuntu ISO文件</li>
        <li>保持默认设置，点击"开始"</li>
        <li>等待Rufus完成U盘创建</li>
      </ol>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/181/1200/600" alt="使用Rufus创建Ubuntu安装U盘" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图2: 使用Rufus创建Ubuntu安装U盘</p>
      </div>
      
      <h4>在macOS上：</h4>
      <ol>
        <li>打开终端应用程序</li>
        <li>使用diskutil命令查找您的USB驱动器</li>
        <li>使用dd命令将ISO镜像写入USB驱动器</li>
      </ol>
      
      <h2>开始安装</h2>
      
      <h3>1. 从USB启动</h3>
      <ol>
        <li>将Ubuntu安装U盘插入您的计算机</li>
        <li>重新启动计算机</li>
        <li>在启动过程中，按下对应的键进入启动菜单（通常是F12、F10、F2或Delete键，具体取决于您的计算机型号）</li>
        <li>从启动菜单中选择您的USB驱动器</li>
      </ol>
      
      <h3>2. 选择安装选项</h3>
      <p>当Ubuntu启动菜单出现时，您有以下选项：</p>
      <ul>
        <li><strong>Try Ubuntu</strong>：在安装前先体验Ubuntu</li>
        <li><strong>Install Ubuntu</strong>：直接开始安装过程</li>
      </ul>
      <p>选择"Install Ubuntu"开始安装。</p>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/182/1200/600" alt="Ubuntu安装选项" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图3: Ubuntu安装选项界面</p>
      </div>
      
      <h3>3. 选择语言和键盘布局</h3>
      <ol>
        <li>选择您的首选语言（推荐选择中文简体）</li>
        <li>选择您的键盘布局（默认通常是正确的）</li>
      </ol>
      
      <h3>4. 连接到网络</h3>
      <p>如果您有可用的无线网络，选择并连接到它。这将允许Ubuntu在安装过程中下载更新和第三方软件。</p>
      
      <h3>5. 选择安装类型</h3>
      <p>您有几个安装选项：</p>
      
      <h4>选项1: 与Windows一起安装Ubuntu</h4>
      <p>如果您想在保留Windows的同时安装Ubuntu（双系统），选择此选项。安装程序将自动为Ubuntu分配空间。</p>
      
      <h4>选项2: 清除整个磁盘并安装Ubuntu</h4>
      <p>如果您想完全替换当前的操作系统，选择此选项。<strong>注意：这将删除所有数据，请确保已备份重要文件！</strong></p>
      
      <h4>选项3: 其他选项</h4>
      <p>如果您想手动分区，请选择此选项。这适合高级用户。</p>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/183/1200/600" alt="Ubuntu安装类型" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图4: Ubuntu安装类型选择</p>
      </div>
      
      <h3>6. 手动分区（高级选项）</h3>
      <p>如果您选择了"其他选项"，您需要手动创建分区：</p>
      <ol>
        <li>选择空闲空间，点击"+"按钮</li>
        <li>创建以下分区：</li>
      </ol>
      
      <ul>
        <li><strong>根分区 (/)</strong>：建议至少20GB，使用Ext4文件系统</li>
        <li><strong>交换分区</strong>：建议与您的内存大小相同，用于休眠功能</li>
        <li><strong>/home分区</strong>：剩余空间，用于存储用户数据，使用Ext4文件系统</li>
      </ul>
      
      <h3>7. 设置您的身份</h3>
      <ol>
        <li>输入您的姓名</li>
        <li>输入您的计算机名称</li>
        <li>创建用户名</li>
        <li>设置密码</li>
        <li>选择是否自动登录或需要密码登录</li>
      </ol>
      
      <h3>8. 等待安装完成</h3>
      <p>安装过程将开始，这可能需要一些时间，具体取决于您的计算机性能和网络速度。安装完成后，您将被提示重新启动计算机。</p>
      
      <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
        <h4 class="text-amber-700 font-medium mb-1">重要提示</h4>
        <p class="text-amber-700">安装完成并重启时，请确保移除安装U盘，以免再次从U盘启动。</p>
      </div>
      
      <h2>安装后的设置</h2>
      
      <h3>1. 安装更新</h3>
      <p>首次登录后，建议更新您的系统：</p>
      <ol>
        <li>打开"软件更新器"</li>
        <li>检查可用更新</li>
        <li>安装所有更新</li>
      </ol>
      
      <h3>2. 安装额外的驱动程序</h3>
      <p>Ubuntu可能需要一些额外的驱动程序，特别是对于显卡：</p>
      <ol>
        <li>打开"软件和更新"</li>
        <li>切换到"附加驱动"选项卡</li>
        <li>选择推荐的驱动程序</li>
        <li>点击"应用更改"</li>
      </ol>
      
      <h3>3. 安装常用软件</h3>
      <p>您可以使用Ubuntu软件中心安装常用软件，如：</p>
      <ul>
        <li>Firefox（已预装）</li>
        <li>Google Chrome</li>
        <li>LibreOffice（已预装）</li>
        <li>VLC媒体播放器</li>
        <li>GIMP图像编辑器</li>
      </ul>
      
      <div class="my-6">
        <img src="https://picsum.photos/id/184/1200/600" alt="Ubuntu软件中心" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">图5: Ubuntu软件中心</p>
      </div>
      
      <h2>基本的Ubuntu命令</h2>
      <p>作为初学者，以下是一些基本的Ubuntu终端命令：</p>
      
      <pre class="bg-gray-100 p-4 rounded-lg text-sm">
        sudo apt update          # 更新软件包列表
        sudo apt upgrade         # 升级已安装的软件包
        sudo apt install 软件名   # 安装软件
        sudo apt remove 软件名    # 卸载软件
        cd 目录路径              # 切换目录
        ls                      # 列出文件和目录
        mkdir 目录名             # 创建新目录
        rm 文件名                # 删除文件
        rm -r 目录名             # 删除目录及其内容
      </pre>
      
      <h2>获取帮助</h2>
      <p>如果您在使用Ubuntu过程中遇到问题，可以通过以下途径获取帮助：</p>
      <ul>
        <li><a href="https://help.ubuntu.com/" class="text-primary hover:underline">Ubuntu官方帮助文档</a></li>
        <li><a href="https://askubuntu.com/" class="text-primary hover:underline">Ask Ubuntu社区</a></li>
        <li>Ubuntu中文社区论坛</li>
        <li>Ubuntu IRC频道</li>
      </ul>
      
      <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
        <h4 class="text-green-700 font-medium mb-1">恭喜您！</h4>
        <p class="text-green-700">您已成功安装了Ubuntu 22.04 LTS。随着使用，您将发现Linux系统的强大功能和灵活性。</p>
      </div>
    `
  }
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