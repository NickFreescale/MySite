# MES项目 Drawio 文件使用说明

本目录用于存放 MES 项目的 `.drawio` 架构图文件。

---

## 📁 文件列表

请将以下 `.drawio` 文件放入此目录：

### 1. **architecture.drawio** - 系统架构图
- **内容**：MES 系统的完整技术架构
- **应包含模块**：
  - 前端层：Next.js 14 + TypeScript
  - API层：FastAPI + RESTful
  - 数据层：PostgreSQL + Redis
  - 实时通信：Socket.io
  - 任务队列：Celery Worker
  - 外部系统：打印机设备接口

### 2. **docker-deployment.drawio** - Docker部署架构
- **内容**：容器化部署方案
- **应包含容器**：
  - Frontend 容器（Next.js）- 端口 3333
  - Backend 容器（FastAPI）- 端口 8000
  - PostgreSQL 容器 - 端口 5432
  - Redis 容器 - 端口 6379
  - 容器间网络连接
  - 数据卷挂载

---

## 🎨 绘制建议

### 推荐工具
使用 **draw.io** (diagrams.net) 在线版或桌面版：
- 在线版：https://app.diagrams.net/
- 桌面版：https://github.com/jgraph/drawio-desktop/releases

### 设计规范

#### 1. 颜色主题
```
- 前端层：蓝色系 (#3B82F6)
- 后端层：绿色系 (#10B981)
- 数据层：紫色系 (#8B5CF6)
- 外部系统：橙色系 (#F59E0B)
- 连接线：灰色 (#6B7280)
```

#### 2. 字体设置
- **标题**：16-18pt，加粗
- **正文**：12-14pt，常规
- **注释**：10pt，斜体
- **字体**：推荐使用 Arial 或 Microsoft YaHei

#### 3. 布局建议
- **从上到下**：用户 → 前端 → 后端 → 数据库
- **从左到右**：请求流 → 处理流 → 响应流
- **模块间距**：至少 50px 间距
- **对齐方式**：使用网格对齐（Grid: 10px）

#### 4. 图形选择
- **系统/服务**：圆角矩形
- **数据库**：圆柱体
- **外部系统**：云形状
- **连接关系**：箭头（单向/双向）
- **分组**：虚线矩形框

---

## 🔧 在 draw.io 中创建文件

### 系统架构图步骤

1. **打开 draw.io**
   - 访问 https://app.diagrams.net/
   - 选择 "Create New Diagram"

2. **选择模板**
   - 推荐选择 "Network" 或 "Software" 模板
   - 或从空白画布开始

3. **绘制前端层**
   ```
   [浏览器客户端]
         ↓
   [Next.js 14 应用]
   - TypeScript
   - Tailwind CSS
   - TanStack Query
   ```

4. **绘制API层**
   ```
   [FastAPI 服务]
   - RESTful API
   - WebSocket (Socket.io)
   - JWT 认证
   ```

5. **绘制数据层**
   ```
   [PostgreSQL]          [Redis]
   - 业务数据           - 缓存
   - 用户信息           - 会话
   - 设备记录           - 消息队列
   ```

6. **添加箭头连接**
   - HTTP/HTTPS 请求
   - WebSocket 连接
   - 数据库查询
   - 缓存读写

7. **保存文件**
   - File → Save As
   - 文件名：`architecture.drawio`
   - 保存到本地

### Docker 部署架构图步骤

1. **使用 Docker 模板**
   - 选择 "Container" 图形库
   
2. **绘制容器**
   ```
   ┌─────────────────┐
   │  Frontend       │
   │  (Next.js)      │
   │  Port: 3333     │
   └─────────────────┘
          ↓
   ┌─────────────────┐
   │  Backend        │
   │  (FastAPI)      │
   │  Port: 8000     │
   └─────────────────┘
      ↓         ↓
   ┌────────┐ ┌────────┐
   │ DB     │ │ Redis  │
   │ :5432  │ │ :6379  │
   └────────┘ └────────┘
   ```

3. **添加网络**
   - 使用虚线框表示 Docker 网络
   - 标注网络名称（如：mes-network）

4. **添加数据卷**
   - 使用圆柱体图形
   - 连接到对应容器

---

## 📤 导出与放置

### 方法1：直接使用 .drawio 文件（推荐）

1. **保存文件**
   - 在 draw.io 中：File → Save
   - 保存为 `architecture.drawio`

2. **放置文件**
   - 将文件复制到：`front/public/files/mes/`
   - 确保文件名匹配：
     - `architecture.drawio`
     - `docker-deployment.drawio`

3. **验证访问**
   - 启动项目：`npm run dev`
   - 访问：`http://localhost:1275/files/mes/architecture.drawio`
   - 应该能下载到文件

### 方法2：如果 drawio 显示有问题，导出为 SVG

1. **导出 SVG**
   - File → Export as → SVG
   - ✅ 勾选 "Embed Images"
   - ✅ 勾选 "Transparent Background"
   - 保存为 `architecture.svg`

2. **修改代码**
   - 将 `ProjectDetail.tsx` 中的 `DrawioViewer` 改回 `Image` 组件
   - 路径改为 `/images/projects/mes/architecture.svg`

---

## 🎯 最终效果

### 在网页中的显示
- ✅ 矢量图形，无论怎么放大都不会模糊
- ✅ 文字清晰可读，支持 4K 显示器
- ✅ 支持缩放和平移（如果使用 drawio viewer）
- ✅ 加载速度快
- ✅ 支持触摸和鼠标滚轮缩放

### 交互功能
- 🔍 双击放大
- 👆 拖动平移
- 🖱️ 鼠标滚轮缩放
- 📱 触摸手势支持

---

## 🐛 故障排查

### 问题1：drawio 文件无法加载

**原因**：文件路径不正确或文件不存在

**解决**：
1. 检查文件是否在 `front/public/files/mes/` 目录
2. 检查文件名是否完全匹配（区分大小写）
3. 在浏览器中直接访问文件 URL 测试

### 问题2：显示空白或报错

**原因**：CORS 跨域问题或 iframe 加载失败

**解决方案1**：使用 SVG 导出
```bash
# 在 draw.io 中导出为 SVG
File → Export as → SVG
# 保存到 front/public/images/projects/mes/architecture.svg
```

**解决方案2**：修改代码使用本地渲染
```tsx
// 使用 Image 组件显示 SVG
<Image
  src="/images/projects/mes/architecture.svg"
  alt="MES系统架构图"
  fill
  className="object-contain"
/>
```

### 问题3：文字太小看不清

**原因**：drawio 图形尺寸太小

**解决**：
1. 在 draw.io 中放大画布：View → Zoom → 200%
2. 重新绘制，使用更大的字体（16pt+）
3. 导出时选择更高的 DPI

---

## 📊 示例架构图内容

### architecture.drawio 应包含：

```
┌─────────────────────────────────────────┐
│         用户浏览器 (Browser)             │
│      http://localhost:3333              │
└──────────────┬──────────────────────────┘
               │ HTTPS
               ↓
┌─────────────────────────────────────────┐
│      Next.js 14 前端应用                │
│  - TypeScript                           │
│  - Tailwind CSS                         │
│  - TanStack Query (数据获取)            │
│  - Zustand (状态管理)                   │
└──────────────┬──────────────────────────┘
               │ REST API / WebSocket
               ↓
┌─────────────────────────────────────────┐
│        FastAPI 后端服务                 │
│  - RESTful API (CRUD操作)               │
│  - WebSocket (实时数据推送)             │
│  - JWT 认证                             │
│  - SQLAlchemy ORM                       │
└───────┬──────────────┬──────────────────┘
        │              │
        ↓              ↓
  ┌──────────┐   ┌──────────┐
  │PostgreSQL│   │  Redis   │
  │  数据库  │   │  缓存    │
  │  :5432   │   │  :6379   │
  └──────────┘   └──────────┘
        ↓
  ┌──────────┐
  │  Celery  │
  │ 异步任务 │
  └──────────┘
```

---

## ✅ 完成检查

使用完成后，请确认：

- [ ] 已创建 `architecture.drawio` 文件
- [ ] 已创建 `docker-deployment.drawio` 文件
- [ ] 文件已放置在 `front/public/files/mes/` 目录
- [ ] 在浏览器中访问 URL 可以下载文件
- [ ] 在项目详情页中可以正常显示
- [ ] 文字清晰可读，不模糊
- [ ] 支持缩放和平移交互

---

## 💡 额外提示

1. **文件大小**：尽量控制在 500KB 以内
2. **版本控制**：drawio 文件是 XML 格式，可以提交到 Git
3. **备份**：保留源文件，方便后续修改
4. **更新**：修改后直接替换文件即可，无需重启服务

---

祝使用愉快！🎉




