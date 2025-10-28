// 网站配置文件 - 个人信息配置
export const siteConfig = {
  // 个人信息
  name: "Nick", 
  title: "算法工程师 & 软件开发者", 
  description: "专注于计算机图形学、控制算法和嵌入式开发的工程师。在智能车竞赛、3D打印软件和正畸设计软件等项目中积累了丰富的算法开发和系统设计经验。", 
  location: "中国", 
  
  // 联系方式
  email: "contact@example.com", 
  linkedin: "https://linkedin.com/in/yourprofile", 
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

// 项目数据
export const projects = [
  {
    id: 1,
    title: "智能化3D打印切片软件",
    description: "面向SLM（选区激光熔融）3D打印的全流程切片软件。采用冠状体开口识别算法结合GPU编程加速，实现姿态优化、智能摆放、自动支撑生成到切片输出的完整链路。集成稳健的多边形布尔运算与高精度层片轮廓提取。",
    image: "/images/projects/3d-slicing.jpg",
    category: "algorithm",
    technologies: ["C++", "GPU编程", "计算机图形学", "几何算法", "CGAL"],
    demo: "#",
    featured: true,
    createdAt: "2023-01-01"
  },
  {
    id: 2,
    title: "活动矫治器设计软件",
    description: "专业的数字化正畸矫治器设计软件，通过先进的3D渲染技术和精确的几何计算为矫治器弓丝设计提供完整解决方案。与专用弯丝机无缝对接，实现从数字化设计到物理制造的完整工艺流程。",
    image: "/images/projects/orthodontic.jpg",
    category: "algorithm",
    technologies: ["C++", "OpenGL", "3D渲染", "几何计算", "物理仿真"],
    demo: "#",
    featured: true,
    createdAt: "2023-06-01"
  },
  {
    id: 3,
    title: "基于外向内追踪技术的机械臂轨迹规划系统",
    description: "手持设备在空间中移动，通过电脑软件对移动轨迹进行编辑，然后让机械臂复现设备记录的轨迹。适用于机械臂打磨、电子产品组装等工业应用。",
    image: "/images/projects/robotic-arm.jpg",
    category: "tool",
    technologies: ["Qt/C++", "OpenVR", "OpenGL", "TCP通信", "VR开发"],
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
    title: "基于人工智能的超市捡货机器人",
    description: "广东省电子设计大赛项目。负责模型训练和上位机开发，使用百度飞桨平台训练模型并部署到PC端，通过TCP协议进行通信，实现图像识别和指令传输。",
    image: "/images/projects/shopping-robot.jpg",
    category: "algorithm",
    technologies: ["Python", "百度飞桨", "TCP通信", "计算机视觉", "嵌入式"],
    demo: "#",
    featured: false,
    createdAt: "2021-05-01"
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

// 工作经历
export const timeline = [
  {
    id: 1,
    type: "achievement",
    title: "第十六届全国大学生智能车竞赛",
    organization: "中国自动化学会",
    location: "全国",
    period: "2020.08 - 2021.08",
    description: "担任上位机算法工程师，负责车道线识别算法开发。采用Ultra-Fast-Lane-Detection-V2模型，大大提高识别速度和适应性，获得全国一等奖（20/565）。"
  },
  {
    id: 2,
    type: "achievement",
    title: "第十七届全国大学生智能车竞赛",
    organization: "中国自动化学会",
    location: "全国",
    period: "2021.08 - 2022.08",
    description: "担任控制算法工程师，负责PID控制算法设计。采用分段PID减少启停时间，加快反应速度，获得全国二等奖。"
  },
  {
    id: 3,
    type: "achievement",
    title: "广东省电子设计大赛",
    organization: "广东省教育厅",
    location: "广东",
    period: "2021.03 - 2021.06",
    description: "基于人工智能的超市捡货机器人项目。负责模型训练和上位机开发，使用百度飞桨平台训练模型，通过TCP协议实现通信。"
  },
  {
    id: 4,
    type: "work",
    title: "算法工程师",
    organization: "3D打印技术公司",
    location: "中国",
    period: "2022.09 - 2024.01",
    description: "负责智能化3D打印切片软件开发。开发姿态优化、智能摆放、自动支撑生成算法，集成GPU编程加速和多边形布尔运算，提升切片效率和质量。"
  },
  {
    id: 5,
    type: "work",
    title: "软件开发工程师",
    organization: "医疗器械公司",
    location: "中国",
    period: "2024.02 - 至今",
    description: "负责活动矫治器设计软件开发。通过3D渲染技术和几何计算实现数字化正畸设计，与专用弯丝机对接，实现完整的数字化制造流程。"
  }
]
