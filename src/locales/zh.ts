// 中文语言配置
export const zh = {
  // 导航
  nav: {
    home: "首页",
    projects: "项目作品",
    blog: "技术笔记",
    about: "关于我",
  },

  // 首页
  home: {
    greeting: "你好，我是",
    quote: "人生是一道 NP-hard，我们难以找到全局最优解，但只要方向正确，每一步都有意义。",
    awards: {
      first: "全国智能车竞赛一等奖",
      second: "全国智能车竞赛二等奖",
      provincial: "省电子设计大赛获奖",
    }
  },

  // 技术栈
  techStack: {
    title: "技术栈",
    coreExpertise: "核心专精",
    algorithmSkills: "算法能力",
    devExperience: "开发经验",
    platforms: "开发平台",
    algorithms: {
      computationalGeometry: "计算几何",
      collisionDetection: "碰撞检测",
      kinematics: "运动学算法",
      control: "控制算法",
      planning: "规划算法",
    },
    experience: {
      python: "Python",
      ai: "人工智能",
      embedded: "嵌入式开发",
      android: "Android",
      pcb: "PCB设计",
    },
    platformsList: {
      windows: "Windows",
      linux: "Linux",
      android: "Android",
    }
  },

  // 项目
  projects: {
    title: "代表性项目",
    viewAll: "查看所有项目",
    featured: "精选项目",
    viewDetails: "了解更多",
    status: {
      completed: "已完成",
      inProgress: "进行中",
    },
    detail: {
      backToProjects: "返回项目列表",
      projectIntro: "项目简介",
      coreFeatures: "核心功能",
      technicalChallenges: "技术挑战",
      solutions: "解决方案",
      outcomes: "项目成果",
      productShowcase: "打印成品展示",
      wireShowcase: "弓丝成品展示",
      clickToExpand: "点击查看详情",
      clickToCollapse: "点击收起",
    }
  },

  // 联系
  contact: {
    title: "让我们一起创造点什么",
    subtitle: "有项目想法或合作意向？随时联系我",
    email: "邮箱",
    wechat: "微信",
    sendMessage: "发送消息",
  },

  // 关于
  about: {
    title: "关于我",
    greeting: "你好！我是",
    intro: "我的故事",
    goals: "我的职业目标",
    timeline: "职业历程",
    skills: "技能专长",
    contact: "联系方式",
  },

  // 页脚
  footer: {
    rights: "版权所有",
    builtWith: "使用 Next.js 构建",
  },

  // 通用
  common: {
    readMore: "了解更多",
    loading: "加载中...",
    notFound: "未找到",
  }
}

export type Translations = typeof zh

