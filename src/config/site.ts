// 网站配置文件 - 个人信息配置
export const siteConfig = {
  // 个人信息
  name: "Bill", 
  title: "图形学算法工程师", 
  description: "自中学起使用C++，聚焦算法与系统设计，覆盖图形学、控制算法与嵌入式等应用场景。", 
  location: "中国", 
  
  // 联系方式
  email: "19854814168@163.com", 
  linkedin: "", 
  wechat: "your-wechat-id", 
  
  // 网站信息
  url: "https://nickfreescale-mysite.vercel.app", 
  
  // 统计数据
  stats: {
    projects: 6, // 实际项目数量
    algorithms: 15, // 算法相关经验
    experience: 4, // 从2020年开始的项目经验
    competitions: 3 // 竞赛获奖数
  }
}

// 项目数据类型
export type Project = {
  id: number
  title: string
  description: string
  image: string // 首页使用的图片
  detailImage?: string // 可选：项目详情页和项目列表页使用的图片，如果不设置则使用 image
  topImage?: string // 可选：项目详情页顶部横幅图片
  category: 'algorithm' | 'tool'
  technologies: string[]
  demo: string
  featured: boolean
  createdAt: string
  video?: string // 可选：首页卡片可播放视频
  status?: 'completed' | 'in-progress' // 可选：项目状态，默认为 completed
}

// 项目数据
export const projects: Project[] = [
  {
    id: 1,
    title: "智能化3D打印切片软件",
    description: "面向SLM（选区激光熔融）3D打印的全流程切片软件。采用冠状体开口识别算法结合GPU编程加速，实现姿态优化、智能摆放、自动支撑生成到切片输出的完整链路。集成稳健的多边形布尔运算与高精度层片轮廓提取。",
    //image: "/images/projects/3d-slicing.jpg",
    image: "/images/projects/model.jpg",
    topImage: "/images/projects/projectSlicerTopPhoto.jpg",
    video: "/videos/projects/slicing.mp4",
    category: "tool",
    technologies: ["C++", "GPU编程", "计算机图形学", "几何算法", "CGAL"],
    demo: "#",
    featured: true,
    createdAt: "2024-03-01",
    status: "in-progress"
  },
  {
    id: 2,
    title: "活动矫治器设计软件",
    description: "专业的数字化正畸矫治器设计软件，通过先进的3D渲染技术和精确的几何计算为矫治器弓丝设计提供完整解决方案。与专用弯丝机无缝对接，实现从数字化设计到物理制造的完整工艺流程。",
    image: "/images/projects/orthodontic.jpg",
    topImage: "/images/projects/archDesign/topPhoto.jpg",
    video: "/videos/projects/arch3_low.mp4",
    category: "tool",
    technologies: ["C++", "OpenGL", "3D渲染", "几何计算", "物理仿真"],
    demo: "#",
    featured: true,
    createdAt: "2023-06-01",
    status: "in-progress"
  },
  {
    id: 3,
    title: "基于外向内追踪技术的机械臂轨迹规划系统",
    description: "手持设备在空间中移动，通过电脑软件对移动轨迹进行编辑，然后让机械臂复现设备记录的轨迹。适用于机械臂打磨、电子产品组装和医疗机器人等场景。",
    image: "/images/projects/tracker/armTracker.gif", // 首页和所有展示页面使用GIF
    topImage: "/images/projects/tracker/tracker_head.gif", // 项目详情页顶部也使用GIF
    category: "tool",
    technologies: ["Python", "TypeScript", "MuJoCo", "OpenVR", "WebSocket", "RESTful API", "卡尔曼滤波"],
    demo: "#",
    featured: true,
    createdAt: "2022-03-01"
  },
  {
    id: 4,
    title: "五轴机械臂控制系统",
    description: "低成本低负载的五轴机械臂控制系统。实现了完整的正运动学和逆运动学算法，配备人机交互界面，支持轨迹规划和实时控制。",
    image: "/images/projects/five-axis-arm.jpg",
    category: "tool",
    technologies: ["C++", "Qt", "运动学算法", "嵌入式开发", "控制算法"],
    demo: "#",
    featured: false,
    createdAt: "2022-01-01"
  },
  {
    id: 5,
    title: "全国大学生智能车竞赛 - 车道线识别系统",
    description: "第十六届全国大学生智能车竞赛全国一等奖项目。开发了高效的车道线识别算法，在硬件性能固定的情况下大大提高识别速度，使车辆行驶速度最快。算法适应性强，对不同光照条件都有高识别率。",
    image: "/images/projects/smart-car-lane.jpg",
    category: "algorithm",
    technologies: ["C++", "Python", "计算机视觉", "AI算法", "Ultra-Fast-Lane-Detection"],
    demo: "#",
    featured: false,
    createdAt: "2021-08-01"
  },
  {
    id: 6,
    title: "金属3D打印机MES制造执行系统",
    description: "用于管理多台SLM金属3D打印机的工业级制造执行系统。实现设备实时监控、任务调度管理、生产数据分析和材料库存管理，采用前后端分离架构，支持Docker容器化部署。",
    image: "/images/projects/mes/mes-dashboard.jpg",
    topImage: "/images/projects/mes/mes-top.jpg",
    category: "tool",
    technologies: ["Next.js 14", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Socket.io", "Docker"],
    demo: "#",
    featured: true,
    createdAt: "2024-01-01"
  }
]

// 算法教程数据
export const algorithms = [
  {
    id: 1,
    title: "车道线识别算法优化",
    description: "基于Ultra-Fast-Lane-Detection-V2模型的车道线识别算法。通过算法优化大大提高识别速度，增强对不同光照条件的适应性，在智能车竞赛中取得优异成绩。",
    category: "algorithm",
    difficulty: "困难",
    readTime: "15 分钟",
    publishDate: "2021-08-01",
    tags: ["计算机视觉", "深度学习", "图像处理"],
    complexity: {
      time: "O(n)",
      space: "O(1)"
    }
  },
  {
    id: 2,
    title: "PID控制算法设计与优化",
    description: "分段PID控制算法的设计与实现，减少启停时间，加快反应速度。在智能车速度控制和方向控制中的实际应用。",
    category: "control",
    difficulty: "中等",
    readTime: "12 分钟",
    publishDate: "2022-08-01",
    tags: ["控制算法", "PID", "自动控制"],
    complexity: {
      time: "O(1)",
      space: "O(1)"
    }
  },
  {
    id: 3,
    title: "机械臂运动学算法",
    description: "五轴机械臂的正运动学和逆运动学算法开发。包含轨迹规划、碰撞检测和实时控制的完整解决方案。",
    category: "robotics",
    difficulty: "困难",
    readTime: "20 分钟",
    publishDate: "2022-03-01",
    tags: ["机器人学", "运动学", "轨迹规划"],
    complexity: {
      time: "O(n)",
      space: "O(n)"
    }
  },
  {
    id: 4,
    title: "3D几何算法在切片软件中的应用",
    description: "多边形布尔运算、轮廓偏移采样与射线求交算法在3D打印切片软件中的实现。保障路径质量与工艺兼容性。",
    category: "geometry",
    difficulty: "困难",
    readTime: "18 分钟",
    publishDate: "2023-01-01",
    tags: ["计算几何", "3D打印", "图形学"],
    complexity: {
      time: "O(n log n)",
      space: "O(n)"
    }
  }
]

// 技能数据
export const skills = [
  {
    category: "编程语言",
    skills: [
      { name: "C/C++", level: 95, experience: "4年" },
      { name: "Python", level: 90, experience: "4年" },
      { name: "Qt/C++", level: 85, experience: "3年" },
      { name: "CUDA/GPU编程", level: 80, experience: "2年" }
    ]
  },
  {
    category: "计算机图形学",
    skills: [
      { name: "OpenGL", level: 90, experience: "3年" },
      { name: "3D渲染", level: 85, experience: "3年" },
      { name: "几何算法", level: 90, experience: "3年" },
      { name: "计算几何", level: 85, experience: "2年" }
    ]
  },
  {
    category: "算法与AI",
    skills: [
      { name: "计算机视觉", level: 90, experience: "3年" },
      { name: "深度学习", level: 85, experience: "3年" },
      { name: "控制算法", level: 90, experience: "4年" },
      { name: "运动学算法", level: 85, experience: "2年" }
    ]
  },
  {
    category: "嵌入式开发",
    skills: [
      { name: "STM32", level: 85, experience: "3年" },
      { name: "单片机开发", level: 85, experience: "3年" },
      { name: "TCP通信", level: 80, experience: "3年" },
      { name: "串口通信", level: 80, experience: "3年" }
    ]
  },
  {
    category: "开发工具",
    skills: [
      { name: "Git", level: 85, experience: "4年" },
      { name: "Linux系统", level: 80, experience: "3年" },
      { name: "项目管理", level: 85, experience: "3年" },
      { name: "VR开发", level: 75, experience: "2年" }
    ]
  },
  {
    category: "专业软件",
    skills: [
      { name: "百度飞桨", level: 80, experience: "2年" },
      { name: "CGAL", level: 75, experience: "2年" },
      { name: "OpenVR", level: 75, experience: "2年" },
      { name: "Clipper2", level: 70, experience: "1年" }
    ]
  }
]

// 教育与工作经历
export const timeline = [
  {
    id: 1,
    type: "education",
    title: "自动化专业 本科",
    organization: "广东技术师范大学",
    location: "广州",
    period: "2018.09 - 2022.06",
    description: "主修自动化专业，专注于控制系统、嵌入式开发和算法设计。在校期间参与多个机器人和智能车竞赛项目，积累了丰富的工程实践经验。"
  },
  {
    id: 2,
    type: "achievement",
    title: "第十六届全国大学生智能车竞赛",
    organization: "中国自动化学会",
    location: "全国",
    period: "2020.08 - 2021.08",
    description: "担任上位机算法工程师，负责车道线识别算法开发。采用Ultra-Fast-Lane-Detection-V2模型，大大提高识别速度和适应性，获得全国一等奖（20/565）。"
  },
  {
    id: 3,
    type: "achievement",
    title: "广东省电子设计大赛",
    organization: "广东省教育厅",
    location: "广东",
    period: "2021.04 - 2021.06",
    description: "基于人工智能的超市捡货机器人项目。负责模型训练和上位机开发，使用百度飞桨平台训练模型，通过TCP协议实现通信，获得省级奖项。"
  },
  {
    id: 4,
    type: "achievement",
    title: "第十七届全国大学生智能车竞赛",
    organization: "中国自动化学会",
    location: "全国",
    period: "2021.08 - 2022.08",
    description: "担任控制算法工程师，负责PID控制算法设计。采用分段PID减少启停时间，加快反应速度，获得全国二等奖。"
  },
  {
    id: 5,
    type: "work",
    title: "机械臂开发工程师",
    organization: "深圳市力安机器人有限公司",
    location: "深圳",
    period: "2022.07 - 2022.08",
    description: "负责机械臂控制系统开发和嵌入式软件开发。实现了五轴机械臂的正逆运动学算法，开发基于VR技术的机械臂轨迹规划系统，完成TCP通信协议与上位机的对接。"
  },
  {
    id: 6,
    type: "work",
    title: "图形学算法工程师",
    organization: "广州市瑞通增材科技有限公司",
    location: "广州",
    period: "2022.09 - 至今",
    description: "负责智能化3D打印切片软件和活动矫治器设计软件的算法开发。开发姿态优化、智能摆放、自动支撑生成等核心算法，集成GPU编程加速和多边形布尔运算，通过3D渲染技术和几何计算实现数字化设计与制造。"
  }
]
