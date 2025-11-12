# Drawio Viewer 实现总结

本文档说明如何在项目中使用 `.drawio` 文件实现矢量架构图的动态显示。

---

## ✅ 已完成的工作

### 1. 安装依赖
```bash
npm install react-drawio
```

### 2. 创建 DrawioViewer 组件
**文件位置**：`front/src/components/common/DrawioViewer.tsx`

**功能特点**：
- ✅ 支持显示 `.drawio` 文件
- ✅ 使用 diagrams.net 官方 viewer
- ✅ 支持缩放、平移交互
- ✅ 只读模式，防止误操作
- ✅ 可自定义高度和样式

**使用示例**：
```tsx
<DrawioViewer
  fileUrl="http://localhost:1275/files/mes/architecture.drawio"
  className="shadow-lg bg-gray-50"
  height="600px"
  toolbar={false}
  readOnly={true}
/>
```

### 3. 集成到项目详情页
**修改文件**：`front/src/components/projects/ProjectDetail.tsx`

**修改内容**：
- ✅ 导入 DrawioViewer 组件
- ✅ 替换系统架构图的静态图片为 drawio 查看器
- ✅ 替换 Docker 部署架构图为 drawio 查看器
- ✅ 添加提示信息，说明可交互功能

### 4. 创建文件存放目录
**目录结构**：
```
front/public/files/mes/
├── architecture.drawio      # 系统架构图（待添加）
├── docker-deployment.drawio # Docker部署图（待添加）
└── README.md                # 详细使用说明
```

### 5. 编写使用文档
- ✅ `front/public/files/mes/README.md` - Drawio 文件创建指南
- ✅ `front/public/images/projects/mes/图片需求说明.md` - 更新说明

---

## 🎨 实现效果

### 对比三种方案

| 特性 | 截图 JPG | 导出 SVG | Drawio 动态渲染 |
|------|----------|----------|-----------------|
| 清晰度 | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 文件大小 | 大 | 中 | 中 |
| 可交互 | ❌ | ❌ | ✅ |
| 易于更新 | ❌ 需重新截图 | ⚠️ 需重新导出 | ✅ 直接替换 |
| 实现复杂度 | ⭐ | ⭐ | ⭐⭐⭐ |
| 推荐度 | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### 在项目中的显示效果

#### 系统架构图
- 🔍 **支持缩放**：双击或滚轮放大，查看细节
- 👆 **支持平移**：拖动查看大图的不同部分
- 📐 **完美清晰**：矢量渲染，4K 显示器也清晰
- 💡 **智能提示**：蓝色提示框说明交互功能

#### Docker 部署架构图
- 🐳 **容器展示**：清晰显示各容器配置
- 🔗 **网络关系**：可缩放查看容器间连接
- 📊 **端口映射**：文字清晰可读
- 💚 **绿色提示**：说明部署架构特点

---

## 📁 文件准备步骤

### 步骤1：创建 drawio 文件

1. **访问 draw.io**
   - 在线版：https://app.diagrams.net/
   - 或下载桌面版

2. **创建系统架构图**
   - 绘制前后端分离架构
   - 包含：Next.js、FastAPI、PostgreSQL、Redis、Socket.io、Celery
   - 使用清晰的颜色区分不同层级
   - 字体大小至少 12pt

3. **创建 Docker 架构图**
   - 绘制容器关系
   - 标注端口号和网络连接
   - 显示数据卷挂载

4. **保存文件**
   - 文件名：`architecture.drawio`
   - 文件名：`docker-deployment.drawio`

### 步骤2：放置文件

将文件复制到：
```
D:\Mysite\front\public\files\mes\
```

### 步骤3：验证访问

启动项目后访问：
- `http://localhost:1275/files/mes/architecture.drawio`
- `http://localhost:1275/files/mes/docker-deployment.drawio`

应该能够下载或预览文件。

### 步骤4：查看效果

访问项目详情页：
- `http://localhost:1275/projects`
- 点击"金属3D打印机MES制造执行系统"
- 滚动到"系统架构设计"和"容器化部署方案"部分
- 查看 drawio 动态渲染效果

---

## 🔧 技术实现细节

### DrawioViewer 组件原理

使用 **iframe** 嵌入 diagrams.net 官方 viewer：

```tsx
const viewerUrl = `https://viewer.diagrams.net/
  ?lightbox=1           // 使用灯箱模式
  &highlight=0000ff     // 高亮颜色
  &edit=_blank          // 编辑时在新标签打开
  &layers=1             // 显示图层
  &nav=1                // 显示导航
  &page-id=0            // 第一页
  &readonly=1           // 只读模式
  &url=${fileUrl}       // drawio 文件 URL
`
```

### 为什么选择 iframe 方案

✅ **优点**：
- 无需安装重量级的 mxGraph 库（~1MB）
- 利用 diagrams.net 官方渲染引擎，稳定可靠
- 支持所有 drawio 特性（图层、链接、注释等）
- 自动适配移动端和桌面端

⚠️ **限制**：
- 需要文件可通过 HTTP/HTTPS 访问
- 依赖 diagrams.net 外部服务（可自建服务器）
- 需要网络连接（首次加载）

### 备选方案：SVG 导出

如果不想使用 iframe，可以：

1. **在 draw.io 中导出为 SVG**
   ```
   File → Export as → SVG
   ✅ Embed Images
   ✅ Transparent Background
   ```

2. **修改代码**
   ```tsx
   <Image
     src="/images/projects/mes/architecture.svg"
     alt="MES系统架构图"
     fill
     className="object-contain"
   />
   ```

---

## 🐛 故障排查

### 问题1：显示空白

**可能原因**：
- 文件路径不正确
- 文件不存在
- CORS 跨域问题

**解决方案**：
1. 检查文件是否在 `front/public/files/mes/` 目录
2. 在浏览器直接访问文件 URL 测试
3. 检查浏览器控制台错误信息

### 问题2：无法加载 viewer

**可能原因**：
- 网络连接问题
- diagrams.net 服务不可用

**解决方案**：
1. 检查网络连接
2. 尝试使用 SVG 导出方案
3. 等待 diagrams.net 服务恢复

### 问题3：文字看不清

**可能原因**：
- drawio 文件中字体太小
- 图形绘制尺寸太小

**解决方案**：
1. 在 draw.io 中放大字体（推荐 14-16pt）
2. 增加图形元素尺寸
3. 使用缩放功能查看细节

---

## 📚 相关文档

- **DrawioViewer 组件源码**：`front/src/components/common/DrawioViewer.tsx`
- **使用示例**：`front/src/components/projects/ProjectDetail.tsx`（搜索 "DrawioViewer"）
- **Drawio 文件创建指南**：`front/public/files/mes/README.md`
- **图片需求总说明**：`front/public/images/projects/mes/图片需求说明.md`

---

## 🎯 下一步操作

### 立即可以做的：

1. **创建 architecture.drawio**
   - 访问 https://app.diagrams.net/
   - 绘制 MES 系统架构图
   - 保存到 `front/public/files/mes/`

2. **创建 docker-deployment.drawio**
   - 绘制 Docker 容器部署架构
   - 保存到 `front/public/files/mes/`

3. **启动项目测试**
   ```bash
   cd front
   npm run dev
   ```
   访问：`http://localhost:1275/projects`

### 可选优化：

- 添加加载动画（loading spinner）
- 添加错误提示（文件不存在时）
- 支持全屏查看
- 添加下载按钮
- 支持多页 drawio 文件

---

## 💡 最佳实践

### Drawio 文件设计建议

1. **颜色使用**
   ```
   - 前端：蓝色系 #3B82F6
   - 后端：绿色系 #10B981
   - 数据库：紫色系 #8B5CF6
   - 外部系统：橙色系 #F59E0B
   ```

2. **字体设置**
   ```
   - 标题：16-18pt，加粗
   - 正文：12-14pt，常规
   - 注释：10pt，斜体
   ```

3. **布局原则**
   ```
   - 从上到下：用户 → 前端 → 后端 → 数据库
   - 从左到右：请求流 → 处理流 → 响应流
   - 模块间距：至少 50px
   ```

4. **命名规范**
   ```
   - 使用清晰的中英文标注
   - 标注版本号（V1.0）
   - 添加更新日期
   ```

---

## 🎊 总结

通过实现 DrawioViewer 组件，我们实现了：

✅ **更好的用户体验**
- 矢量清晰，无论怎么放大都不模糊
- 支持交互缩放和平移
- 文字始终清晰可读

✅ **更简单的维护**
- 修改 drawio 文件后直接替换
- 无需重新截图或导出
- 源文件可版本控制

✅ **更专业的展示**
- 体现项目的技术专业性
- 增加页面交互性
- 提升整体视觉效果

---

**🚀 现在就去创建你的第一个 drawio 架构图吧！**

有问题参考：`front/public/files/mes/README.md`




