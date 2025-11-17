# GIF 文件放置说明

所有视频已转换为 GIF 格式，以提高网页加载效率。请将 GIF 文件放置在以下位置：

## 📁 文件位置对应表

| GIF 文件名 | 放置路径 | 用途 |
|-----------|---------|------|
| `slicing.gif` | `front/public/videos/projects/slicing.gif` | 3D打印切片软件演示 |
| `arch3_low.gif` | `front/public/videos/projects/arch3_low.gif` | 活动矫治器设计软件演示 |
| `first_year.gif` | `front/public/images/projects/smartCar/first_year.gif` | 第十六届智能车竞赛（竖屏9:16） |
| `second_year.gif` | `front/public/images/projects/smartCar/second_year.gif` | 第十七届智能车竞赛（横屏16:9） |

## 📝 已修改的代码文件

1. **`front/src/config/site.ts`**
   - 项目 1 (智能化3D打印切片软件): `video: "/videos/projects/slicing.gif"`
   - 项目 2 (活动矫治器设计软件): `video: "/videos/projects/arch3_low.gif"`

2. **`front/src/components/projects/ProjectDetail.tsx`**
   - 智能车竞赛第一年: `video: "/images/projects/smartCar/first_year.gif"`
   - 智能车竞赛第二年: `video: "/images/projects/smartCar/second_year.gif"`

3. **`front/src/components/home/FeaturedProjects.tsx`**
   - 添加了 GIF 格式检测，自动使用 `<img>` 标签渲染 GIF

## ✅ 技术优势

### GIF vs MP4 对比

| 特性 | GIF | MP4 (原来) |
|-----|-----|-----------|
| 文件大小 | 较大但可控 | 较小 |
| 浏览器兼容性 | ✅ 完美支持所有浏览器 | ⚠️ 某些浏览器限制自动播放 |
| 自动播放 | ✅ 无需任何配置 | ⚠️ 需要 muted + playsInline |
| 加载性能 | ✅ 加载即播放 | ⚠️ 需要解码器 |
| 循环播放 | ✅ 原生支持 | ⚠️ 需要 loop 属性 |
| 移动端体验 | ✅ 优秀 | ⚠️ 可能触发控制条 |
| SEO 友好 | ✅ 作为图片被索引 | ⚠️ 需要特殊处理 |

## 🎯 显示效果

- **首页项目卡片**: GIF 自动循环播放，无控制条
- **项目详情页**: GIF 自动播放，用户无需点击
- **智能车竞赛页面**: 
  - 第一年（竖屏9:16）：左右布局
  - 第二年（横屏16:9）：上下布局

## 🔧 代码实现

所有 GIF 文件通过 `video.endsWith('.gif')` 自动检测，使用 `<img>` 标签渲染而非 `<video>` 标签：

```tsx
{competition.video.endsWith('.gif') ? (
  <img
    className="w-full h-full object-cover"
    src={competition.video}
    alt="比赛视频"
  />
) : (
  <video controls>
    <source src={competition.video} type="video/mp4" />
  </video>
)}
```

## 📦 部署前检查清单

- [ ] 将 4 个 GIF 文件放置到对应目录
- [ ] 确认文件名完全匹配（包括大小写）
- [ ] 测试首页项目卡片显示
- [ ] 测试项目详情页显示
- [ ] 测试智能车竞赛页面的两个视频
- [ ] 检查 GIF 文件大小（建议每个 < 10MB）
- [ ] 验证移动端显示效果

## 💡 优化建议

如果 GIF 文件过大，可以考虑：
1. 使用 [ezgif.com](https://ezgif.com/optimize) 在线压缩
2. 降低帧率（建议 10-15 FPS）
3. 减少颜色数量（建议 128-256 色）
4. 缩小分辨率（首页卡片建议 800px 宽度即可）

---

**修改日期**: 2025-11-17
**修改内容**: 将所有项目视频从 MP4 格式转换为 GIF 格式

