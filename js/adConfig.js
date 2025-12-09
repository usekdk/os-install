// 广告位配置文件
// 通过修改此文件可以轻松更改广告位模块的图片

// 广告配置对象
const adConfig = {
  // 轮播图片数组 - 支持多张图片轮播
  images: [
    {
      imageUrl: '../images/index/广告/adobe.png',
      imageAlt: 'Adobe广告图片',
      linkUrl: 'https://www.adobe.com',
      linkTarget: '_blank'
    },
    {
      imageUrl: '../images/index/广告/arcgis.png',
      imageAlt: 'ArcGIS广告图片',
      linkUrl: 'https://www.arcgis.com',
      linkTarget: '_blank'
    },
    {
      imageUrl: '../images/index/广告/Windows.png',
      imageAlt: 'Windows广告图片',
      linkUrl: 'https://www.microsoft.com',
      linkTarget: '_blank'
    }
  ],
  // 轮播间隔时间（毫秒）
  interval: 5000,
  // 淡入淡出过渡时间（毫秒）
  transitionDuration: 500
};