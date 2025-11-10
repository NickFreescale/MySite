'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Code, Zap, Target, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  detailImage?: string
  topImage?: string
  category: string
  technologies: string[]
  demo?: string
  featured: boolean
  createdAt: string
  status?: 'completed' | 'in-progress'
}

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // 状态管理：被展开的功能卡片ID
  const [expandedFeatureId, setExpandedFeatureId] = useState<number | null>(null)

  // 根据项目ID匹配详细信息
  const getProjectDetails = (id: number) => {
    const details: Record<number, any> = {
      1: {
        fullDescription: "这是一款面向SLM（选区激光熔融）3D打印的自研全流程切片软件，旨在配合公司自主打印设备实现复杂工艺控制与优化。系统覆盖从模型导入、姿态优化、智能摆放、自动支撑生成到最终切片输出的完整链路。",
        // 核心功能模块
        coreFeatures: [
          {
            id: 1,
            title: "渲染引擎",
            image: "/images/projects/slicing/render-engine.jpg",
            shortDescription: "渲染引擎的作用是把三维模型和切片结果以可视化的方式展示出来，让用户能直观地看到打印对象的形状、支撑结构和每一层的切片效果。",
            detailedDescription: "基于OpenGL的高性能3D渲染引擎，实现模型的实时预览和交互操作。支持多种着色模式、光照效果和视角控制，为用户提供直观的可视化体验。"
          },
          {
            id: 2,
            title: "支撑生成",
            image: "/images/projects/slicing/support.jpg",
            shortDescription: "自动支撑负责为模型中那些悬空或容易变形的部分自动添加支撑结构。它的作用是帮助模型在打印过程中保持稳定，防止坍塌或变形。",
            detailedDescription: "智能自动支撑生成系统，通过临界角判定、种子面片合并、轮廓偏移采样与射线求交算法，自动生成立柱/网格支撑结构。支持手动编辑和优化，提供19个可调参数（如临界角、支撑密度、柱体直径等），确保打印成功率。"
          },
          {
            id: 3,
            title: "自动摆放",
            image: "/images/projects/slicing/auto-layout.jpg",
            shortDescription: "自动摆放能帮助用户将多个模型在打印平台上自动排列到合适的位置。它会根据模型的大小和形状，智能地调整它们的摆放方向和间距，避免重叠并充分利用打印空间。",
            detailedDescription: "基于动态NFP（No-Fit Polygon）结合遗传算法的智能摆放系统，实现高紧凑度、多模型智能排布。自动优化打印空间利用率，支持旋转、镜像等操作，降低打印成本,节省用户操作时间。"
          },
          {
            id: 4,
            title: "高精度切片",
            image: "/images/projects/slicing/slicing.jpg",
            shortDescription: "切片是软件的核心部分，它将三维模型“切”成一层层的平面，并根据这些层生成打印机可以识别的路径和指令。通过切片，软件把复杂的三维形状转化为打印机能逐层堆叠的路线，从而让虚拟的模型变成可以实际打印的实物。",
            detailedDescription: "集成稳健的多边形布尔运算（Clipper2/CGAL）与高精度层片轮廓提取。支持自定义切片参数（层厚、填充密度、边界处理等），生成高质量的打印路径，确保与打印设备完全兼容。（蓝色的是激光的路径）"
          }
        ],
        challenges: [
          "姿态优化：让牙冠开口向上的同时兼顾打印效率",
          "智能摆放：在有限的空间摆下更多的不规则的模型",
          "自动支撑：根据支撑参数快速找到待支撑区域并生成对应的支撑",
          "切片核心：确保切片的结果在实际的打印中符合工艺要求"
        ],
        solutions: [
          "GPU加速计算：采用冠状体开口识别算法结合GPU编程进行加速，自动寻找最优打印方向",
          "bin-packing算法：基于动态NFP（No-Fit Polygon）结合遗传算法，实现多模型高紧凑度",
          "几何算法优化：集成稳健的多边形布尔运算（Clipper2/CGAL）",
          "工艺兼容性：反复试验，不断打印不同参数的切片结果"
        ],
        outcomes: [
          "完整的切片软件系统，支持SLM 3D打印全流程",
          "显著提升了打印准备效率和成功率",
          "实现了复杂模型的自动化处理"
        ],
        skills: ["C++", "GPU编程", "计算几何", "CGAL", "Clipper2", "遗传算法", "OpenGL"]
      },
      2: {
        fullDescription: "一款专业的数字化正畸矫治器设计软件，专为口腔正畸技师和临床医生开发，旨在通过先进的3D渲染技术和精确的几何计算为矫治器弓丝设计提供完整的数字化解决方案。软件与公司专用弯丝机无缝对接，能够输出标准化的制造数据格式，实现从数字化设计到物理制造的完整工艺流程。",
        // 核心功能模块
        coreFeatures: [
          {
            id: 1,
            title: "渲染引擎",
            image: "/images/projects/archDesign/render-engine.jpg",
            shortDescription: "高性能3D渲染引擎用于展示口腔模型和矫治器设计。通过精确的可视化，医生和技师能够直观地查看牙齿排列、咬合关系以及矫治器的设计效果，为临床决策提供可靠依据。",
            detailedDescription: "基于OpenGL的专业3D渲染引擎，支持口腔模型的高质量渲染和实时交互。提供多种视图模式（正面、侧面、咬合面）、材质显示和光照效果，确保设计细节的精确呈现。（迁移自切片软件）"
          },
          {
            id: 2,
            title: "关键点编辑",
            image: "/images/projects/archDesign/keypoint-edit.jpg",
            shortDescription: "关键点编辑功能允许医生在牙齿模型上标记和调整关键位置点。这些关键点定义了弓丝的走向和矫治力的施加方向，是实现精确矫治效果的基础。",
            detailedDescription: "基于BVH快速求交的关键点编辑系统，支持在3D模型上精确标定牙齿的托槽位置、咬合接触点等关键特征。提供自动识别和手动微调功能。"
          },
          {
            id: 3,
            title: "模型挖补",
            image: "/images/projects/archDesign/model-repair.jpg",
            shortDescription: "模型挖补功能用于修复扫描模型中的缺陷和不完整区域。通过算法自动填充缺失部分或移除多余组织，确保模型的完整性和准确性，为后续设计提供可靠基础。",
            detailedDescription: "基于CGAL库研发的挖补功能，除了能够手动雕刻模型，还能实现倒凹的自动填补"
          },
          {
            id: 4,
            title: "碰撞检测",
            image: "/images/projects/archDesign/collision-detection.jpg",
            shortDescription: "碰撞检测系统实时检查弓丝设计与口腔组织之间的干涉。确保矫治器不会与牙龈、舌头或对颌牙齿产生不良接触，保证患者佩戴的舒适性和安全性。",
            detailedDescription: "使用胶囊碰撞检测算法，实时计算弓丝与口腔组织的距离和接触情况。提供可视化反馈和自动优化建议，帮助设计者快速发现并解决潜在的干涉问题，确保矫治器的临床可行性。"
          }
        ],
        challenges: [
          "3D渲染技术：实现口腔模型和矫治器的精确可视化",
          "关键点标定：关键点要精确的同时还要距离模型有一定距离",
          "模型修复：自动修复扫描数据中的缺陷和不完整区域",
          "碰撞检测：实时计算弓丝与口腔组织的干涉情况"
        ],
        solutions: [
          "OpenGL渲染引擎：采用OpenGL实现高质量3D可视化和实时交互",
          "关键点标定：采用BVH快速求交算法同时在面片的法相了方向做偏移",
          "几何修复算法：使用CGAL库集成先进的网格修复和填充算法",
          "空间计算优化：把胶囊碰撞检测放入computershader中进行计算"
        ],
        outcomes: [
          "完整的数字化正畸设计系统",
          "与弯丝机的无缝对接和数据传输",
          "显著提升了设计效率和精度"
        ],
        skills: ["C++", "OpenGL", "3D渲染", "几何计算", "物理仿真", "Qt", "数据格式转换"]
      },
      3: {
        fullDescription: "基于VR外向内追踪技术的机械臂轨迹规划系统，采用前后端分离架构。手持HTC Vive Tracker在空间中移动，系统实时记录轨迹并在MuJoCo物理引擎中进行可视化和编辑，最终让机械臂精确复现设备记录的轨迹。适用于机械臂打磨、电子产品组装和医疗理疗机器人等场景。",
        challenges: [
          "VR设备定位精度：HTC Vive Tracker的原始数据存在抖动和漂移，影响轨迹记录的准确性",
          "高频数据传输：VR追踪器产生高频位置数据（30Hz），需要低延迟的传输方案",
          "系统架构设计：VR设备、Web前端、Python后端、机械臂控制器之间需要高效的数据传输和同步",
          "实时物理仿真：需要在MuJoCo中实时渲染机械臂运动并进行碰撞检测",
          "多厂商机械臂适配：需要支持不同品牌机械臂的控制协议和运动学模型"
        ],
        solutions: [
          "使用卡尔曼滤波算法对VR设备的位置数据进行平滑处理，消除抖动和漂移，提高轨迹精度",
          "采用WebSocket + RESTful API混合通信架构：WebSocket负责传输高频VR追踪数据，RESTful API负责基础CRUD操作",
          "前端使用TypeScript构建Web界面，后端使用Python处理数据和控制逻辑，实现前后端完全分离",
          "集成MuJoCo物理引擎进行机械臂运动仿真和轨迹可视化，支持实时预览和碰撞检测",
          "集成ESP32处理力传感器数据，通过蓝牙传输握持力度信号，控制轨迹记录的启停"
        ],
        outcomes: [
          "完整的前后端分离VR轨迹规划系统",
          "成功测试三种不同厂商机械臂的轨迹复现",
          "应用于工业打磨、组装和医疗理疗场景"
        ],
        skills: ["Python", "TypeScript", "MuJoCo", "OpenVR", "WebSocket", "RESTful API", "卡尔曼滤波", "ESP32", "蓝牙通信"]
      },
      4: {
        fullDescription: "低成本低负载的五轴机械臂控制系统。实现了完整的正运动学和逆运动学算法，配备人机交互界面，支持轨迹规划和实时控制。",
        challenges: [
          "逆运动学求解：五轴机械臂存在多解问题，需要选择最优解并避免奇异位形",
          "轨迹平滑性：离散的目标点需要生成连续平滑的运动轨迹，避免机械冲击",
          "实时性保证：控制指令的计算和传输必须满足实时性要求，延迟不能超过50ms",
          "成本控制：在低成本硬件平台上实现高精度控制，减少传感器和执行器成本",
          "用户体验：需要让非专业用户也能轻松操作机械臂"
        ],
        solutions: [
          "采用D-H参数法建立运动学模型，使用几何法和雅可比矩阵求解逆解，通过关节角度约束筛选最优解",
          "使用三次样条插值算法生成平滑轨迹，确保速度和加速度连续",
          "在嵌入式系统中实现实时控制循环，优化算法性能，确保指令响应及时",
          "通过算法优化替代昂贵的传感器，降低硬件成本的同时保证控制精度",
          "开发Qt可视化界面，提供示教、拖拽控制等多种操作模式"
        ],
        outcomes: [
          "完整的五轴机械臂控制系统",
          "精确的运动控制和轨迹规划",
          "成本降低50%以上"
        ],
        skills: ["C++", "Qt", "运动学算法", "轨迹规划", "嵌入式开发", "实时控制"]
      },
      5: {
        fullDescription: "第十六届全国大学生智能车竞赛全国一等奖项目。开发了高效的车道线识别算法，在硬件性能固定的情况下大大提高识别速度，使车辆行驶速度最快。算法适应性强，对不同光照条件都有高识别率。",
        challenges: [
          "硬件资源受限：比赛规定的嵌入式平台计算能力有限，深度学习模型难以实时运行",
          "光照环境多变：赛道存在强光、阴影、反光等复杂光照条件，影响车道线识别准确率",
          "实时性与准确性平衡：需要在保证识别准确率的同时最大化车速，延迟必须控制在100ms内",
          "模型优化困难：Ultra-Fast-Lane-Detection-V2模型较重，需要在不影响精度的前提下压缩模型",
          "控制策略调优：识别结果需要转化为精确的转向控制，PID参数调优工作量大"
        ],
        solutions: [
          "在上位机运行深度学习模型，通过TCP协议将识别结果实时传输给下位机，分离计算和控制任务",
          "采用自适应直方图均衡化和Gamma校正技术预处理图像，增强算法对不同光照的鲁棒性",
          "优化模型推理流程，裁剪冗余层，使用TensorRT加速推理，将单帧处理时间降至50ms",
          "对Ultra-Fast-Lane-Detection-V2进行知识蒸馏和量化，在精度损失<2%的情况下减小模型50%",
          "采用分段PID控制策略，根据曲率自适应调整参数，提升弯道表现"
        ],
        outcomes: [
          "获得全国一等奖（20/565）",
          "成为用时最短的队伍",
          "识别准确率达到95%以上"
        ],
        skills: ["C++", "Python", "计算机视觉", "深度学习", "Ultra-Fast-Lane-Detection", "图像处理", "TCP通信"]
      },
      6: {
        fullDescription: "一个用于管理多台SLM（选择性激光熔化）金属3D打印机的工业级制造执行系统。采用现代化的前后端分离架构，实现设备实时监控、生产任务调度、数据统计分析和材料库存管理等核心功能。系统支持实时数据推送、多设备并发管理，并通过Docker容器化实现快速部署。适用于金属增材制造车间的数字化管理需求。",
        challenges: [
          "多设备实时监控：需要同时监控多台打印机的关键参数（氧含量、仓压力、风机频率、过滤压差）并实时展示",
          "高频数据处理：设备传感器产生高频数据流，需要高效的数据采集、处理和存储方案",
          "系统可扩展性：需要支持不同型号打印机的接入，并允许用户自定义材料类型和工艺参数",
          "前后端通信：实时数据推送、RESTful API调用、数据库事务处理需要统一的通信架构",
          "生产数据分析：需要实现OEE（设备综合效率）计算、产量统计、材料消耗分析等复杂业务逻辑"
        ],
        solutions: [
          "采用Socket.io实现WebSocket双向通信，设备状态变化实时推送到前端，延迟<100ms",
          "使用Redis作为消息队列和缓存层，Celery处理异步任务，PostgreSQL持久化存储历史数据",
          "设计灵活的数据模型和配置系统，支持自定义材料参数（CoCr、Ti系列等），可动态添加新设备",
          "采用FastAPI + Next.js 14的前后端分离架构，RESTful API处理CRUD操作，WebSocket负责实时数据",
          "集成Recharts图表库，实现生产趋势可视化、设备利用率分析、材料消耗统计等数据看板"
        ],
        outcomes: [
          "完整的工业级MES系统，支持多设备管理",
          "实现设备状态实时监控和告警推送",
          "Docker容器化部署，开发环境5分钟内启动"
        ],
        skills: ["Next.js 14", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Socket.io", "Docker", "Celery", "TanStack Query"]
      }
    }
    
    return details[id] || {
      fullDescription: project.description,
      challenges: ["待补充项目挑战"],
      solutions: ["待补充解决方案"],
      outcomes: ["待补充项目成果"],
      skills: project.technologies
    }
  }

  const details = getProjectDetails(project.id)

  return (
    <div className="min-h-screen pt-16">
      {/* 返回按钮 */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回项目列表</span>
          </Link>
        </div>
      </div>

      {/* Hero区域 */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 项目标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            {/* 项目元信息 */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(project.createdAt).toLocaleDateString('zh-CN')}</span>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                {project.category === 'algorithm' && '算法项目'}
                {project.category === 'tool' && '工具软件'}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                  精选项目
                </span>
              )}
            </div>

            {/* 技术栈 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {details.skills.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 行动按钮 */}
            {project.demo && project.demo !== '#' && (
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>查看演示</span>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 项目图片 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={project.topImage || project.detailImage || project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 项目详情 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 主要内容 */}
            <div className="lg:col-span-2 space-y-12">
              {/* 项目简介 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-primary-600" />
                  项目简介
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {details.fullDescription}
                </p>
              </motion.div>

              {/* 核心功能模块 - 对项目1和项目2显示 */}
              {(project.id === 1 || project.id === 2) && details.coreFeatures && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    核心功能
                  </h2>
                  
                  <AnimatePresence mode="wait">
                    {expandedFeatureId === null ? (
                      /* 默认2x2网格布局 */
                      <motion.div
                        key="grid-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                        {details.coreFeatures.map((feature: any, index: number) => (
                          <motion.div
                            key={`grid-${feature.id}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => setExpandedFeatureId(feature.id)}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                          >
                            {/* 功能图片 */}
                            <motion.div 
                              className="relative h-56 bg-gradient-to-br from-primary-100 to-blue-100"
                              layoutId={`image-container-${feature.id}`}
                            >
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover"
                              />
                              {/* 展开提示 */}
                              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                                  点击查看详情
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* 功能描述 */}
                            <motion.div className="p-6" layoutId={`content-${feature.id}`}>
                              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                {feature.title}
                              </h3>
                              <p className="text-base text-gray-600 leading-relaxed">
                                {feature.shortDescription}
                              </p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      /* 展开布局 */
                      <motion.div
                        key="expanded-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* 判断展开的卡片位置：1,2在上排，3,4在下排 */}
                        {(expandedFeatureId === 1 || expandedFeatureId === 2) ? (
                          <>
                            {/* 展开的卡片在上 */}
                            <motion.div
                              key={`expanded-${expandedFeatureId}`}
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              onClick={() => setExpandedFeatureId(null)}
                              className="bg-white rounded-xl overflow-hidden shadow-2xl ring-4 ring-primary-500 cursor-pointer"
                            >
                              {details.coreFeatures.map((feature: any) => {
                                if (feature.id === expandedFeatureId) {
                                  return (
                                    <div key={feature.id}>
                                      <motion.div 
                                        className="relative h-80 bg-gradient-to-br from-primary-100 to-blue-100"
                                        layoutId={`image-container-${feature.id}`}
                                      >
                                        <Image
                                          src={feature.image}
                                          alt={feature.title}
                                          fill
                                          className="object-cover"
                                        />
                                      </motion.div>
                                      <motion.div className="p-8" layoutId={`content-${feature.id}`}>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                          <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                                          {feature.title}
                                          <span className="ml-auto text-sm text-primary-600 font-normal">点击收起</span>
                                        </h3>
                                        <motion.p 
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.2 }}
                                          className="text-lg text-gray-600 leading-relaxed"
                                        >
                                          {feature.detailedDescription}
                                        </motion.p>
                                      </motion.div>
                                    </div>
                                  )
                                }
                                return null
                              })}
                            </motion.div>
                            
                            {/* 其他三个并排 */}
                            <motion.div 
                              className="grid grid-cols-3 gap-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {details.coreFeatures.map((feature: any) => {
                                if (feature.id !== expandedFeatureId) {
                                  return (
                                    <motion.div
                                      key={`small-${feature.id}`}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.4 }}
                                      onClick={() => setExpandedFeatureId(feature.id)}
                                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                                    >
                                      <div className="relative h-32 bg-gradient-to-br from-primary-100 to-blue-100">
                                        <Image
                                          src={feature.image}
                                          alt={feature.title}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <div className="p-4">
                                        <h3 className="text-base font-bold text-gray-900 text-center flex items-center justify-center">
                                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                          {feature.title}
                                        </h3>
                                      </div>
                                    </motion.div>
                                  )
                                }
                                return null
                              })}
                            </motion.div>
                          </>
                        ) : (
                          <>
                            {/* 其他三个并排在上 */}
                            <motion.div 
                              className="grid grid-cols-3 gap-4"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              {details.coreFeatures.map((feature: any) => {
                                if (feature.id !== expandedFeatureId) {
                                  return (
                                    <motion.div
                                      key={`small-${feature.id}`}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.4 }}
                                      onClick={() => setExpandedFeatureId(feature.id)}
                                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                                    >
                                      <div className="relative h-32 bg-gradient-to-br from-primary-100 to-blue-100">
                                        <Image
                                          src={feature.image}
                                          alt={feature.title}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <div className="p-4">
                                        <h3 className="text-base font-bold text-gray-900 text-center flex items-center justify-center">
                                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                          {feature.title}
                                        </h3>
                                      </div>
                                    </motion.div>
                                  )
                                }
                                return null
                              })}
                            </motion.div>
                            
                            {/* 展开的卡片在下 */}
                            <motion.div
                              key={`expanded-${expandedFeatureId}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                              onClick={() => setExpandedFeatureId(null)}
                              className="bg-white rounded-xl overflow-hidden shadow-2xl ring-4 ring-primary-500 cursor-pointer"
                            >
                              {details.coreFeatures.map((feature: any) => {
                                if (feature.id === expandedFeatureId) {
                                  return (
                                    <div key={feature.id}>
                                      <motion.div 
                                        className="relative h-80 bg-gradient-to-br from-primary-100 to-blue-100"
                                        layoutId={`image-container-${feature.id}`}
                                      >
                                        <Image
                                          src={feature.image}
                                          alt={feature.title}
                                          fill
                                          className="object-cover"
                                        />
                                      </motion.div>
                                      <motion.div className="p-8" layoutId={`content-${feature.id}`}>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                          <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                                          {feature.title}
                                          <span className="ml-auto text-sm text-primary-600 font-normal">点击收起</span>
                                        </h3>
                                        <motion.p 
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.2 }}
                                          className="text-lg text-gray-600 leading-relaxed"
                                        >
                                          {feature.detailedDescription}
                                        </motion.p>
                                      </motion.div>
                                    </div>
                                  )
                                }
                                return null
                              })}
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* 技术挑战 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-primary-600" />
                  技术挑战
                </h2>
                <ul className="space-y-4">
                  {details.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <span className="text-primary-600 text-sm font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 解决方案 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-primary-600" />
                  解决方案
                </h2>
                <ul className="space-y-4">
                  {details.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{solution}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 项目成果 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  项目成果
                </h2>
                <ul className="space-y-3">
                  {details.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-2xl">✓</span>
                      <p className="text-gray-800 font-medium leading-relaxed">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 打印成品展示 - 仅对项目1显示 */}
              {project.id === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                    打印成品展示
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/slicing/product.jpg"
                          alt="3D打印成品1"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">使用切片软件生成的打印成品</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/slicing/product2.jpg"
                          alt="3D打印成品2"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">精密金属打印零件展示</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 text-center text-gray-600 text-sm"
                  >
                    以上为使用本切片软件配合SLM打印设备制作的实际成品
                  </motion.p>
                </motion.div>
              )}

              {/* 弓丝成品展示 - 仅对项目2显示 */}
              {project.id === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                    弓丝成品展示
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/archDesign/wire-product.jpg"
                          alt="矫治器弓丝成品1"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">使用设计软件生成的矫治器成品（带胶托）</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/archDesign/wire-product2.jpg"
                          alt="矫治器弓丝成品2"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">精密弯制的正畸弓丝展示</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 text-center text-gray-600 text-sm"
                  >
                    以上为使用本设计软件配合专用弯丝机制作的实际弓丝成品
                  </motion.p>
                </motion.div>
              )}

              {/* 项目3：轨迹追踪系统硬件与测试展示 */}
              {project.id === 3 && (
                <>
                  {/* 硬件组成展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      硬件系统组成
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/tracker/hardware_composition.jpg"
                            alt="追踪头硬件组成"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">追踪头硬件组成</p>
                            <p className="text-sm">HTC Vive Tracker、ESP32微控制器、力传感器、蓝牙模块</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/tracker/hardware_composition2.jpg"
                            alt="HTC Vive Tracker架设方式"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">追踪器架设方式</p>
                            <p className="text-sm">HTC Vive基站的空间布局和追踪覆盖范围展示</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">硬件说明：</span>
                      HTC Vive Tracker提供亚毫米级的空间定位精度，ESP32负责实时采集和处理力传感器数据，
                      通过蓝牙模块将握持力度信号传输至电脑，实现无线便捷的轨迹记录启停控制。
                    </motion.p>
                  </motion.div>

                  {/* 卡尔曼滤波效果展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      卡尔曼滤波算法效果
                    </h2>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/tracker/filter_effect.jpg"
                          alt="卡尔曼滤波前后对比"
                          fill
                          className="object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="text-white p-4">
                          <p className="font-semibold mb-1">滤波效果对比</p>
                          <p className="text-sm">左侧为原始轨迹数据，右侧为经过卡尔曼滤波后的平滑轨迹</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">技术说明：</span>
                      HTC Vive Tracker的原始数据存在抖动和漂移，通过卡尔曼滤波算法可以有效消除噪声，
                      提高轨迹记录精度，使机械臂能够更准确地复现操作者的意图。
                    </motion.p>
                  </motion.div>

                  {/* 机械臂测试展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      多厂商机械臂适配测试
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/tracker/robot_arm_test.jpg"
                            alt="机械臂测试1"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold">厂商A机械臂测试</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/tracker/robot_arm_test2.jpg"
                            alt="机械臂测试2"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold">厂商B机械臂测试</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/tracker/robot_arm_test3.jpg"
                            alt="机械臂测试3"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold">厂商C机械臂测试</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">测试成果：</span>
                      系统成功适配三种不同厂商的工业机械臂，实现了轨迹的精确复现。
                      通过标准化的控制接口和运动学模型，确保系统具有良好的通用性和扩展性。
                    </motion.p>
                  </motion.div>

                  {/* 医疗应用场景展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.9 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      医疗理疗应用场景
                    </h2>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/tracker/physiotherapy_usage_scenarios.jpg"
                          alt="理疗机器人应用场景"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="text-white p-4">
                          <p className="font-semibold mb-1">理疗机器人实际应用</p>
                          <p className="text-sm">轨迹追踪系统在医疗康复理疗场景中的实际部署和使用</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.1 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">应用场景：</span>
                      除了工业制造领域，本系统还成功应用于医疗康复理疗场景。
                      理疗师可以通过手持追踪设备记录最佳的理疗手法和力度，
                      系统记录下完整的三维轨迹和力反馈数据，然后由机械臂精确复现，
                      确保每位患者都能获得标准化、高质量的理疗服务。
                    </motion.p>
                  </motion.div>
                </>
              )}

              {/* 项目6：MES系统功能展示 */}
              {project.id === 6 && (
                <>
                  {/* 系统架构展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      系统架构设计
                    </h2>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/mes/architecture.jpg"
                          alt="MES系统架构图"
                          fill
                          className="object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="text-white p-4">
                          <p className="font-semibold mb-1">前后端分离架构</p>
                          <p className="text-sm">Next.js 14前端 + FastAPI后端 + PostgreSQL/Redis数据层</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">架构说明：</span>
                      采用现代化的前后端分离架构，前端使用Next.js 14 + TypeScript实现响应式Web界面，
                      后端使用FastAPI构建高性能RESTful API，PostgreSQL存储业务数据，Redis处理缓存和消息队列，
                      Socket.io实现设备状态的实时推送，Celery处理异步任务调度。
                    </motion.p>
                  </motion.div>

                  {/* 核心功能模块展示 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      核心功能模块
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/mes/device-monitor.jpg"
                            alt="设备监控页面"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">设备实时监控</p>
                            <p className="text-sm">监控打印机氧含量、仓压力、风机频率、过滤压差等关键参数</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/mes/task-management.jpg"
                            alt="任务管理页面"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">任务调度管理</p>
                            <p className="text-sm">打印任务分配、队列管理、执行状态追踪</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">功能特点：</span>
                      系统提供设备实时监控、任务调度管理、生产数据分析和材料库存管理四大核心模块。
                      设备监控模块通过WebSocket实时推送设备状态，延迟小于100ms；
                      任务管理模块支持打印任务的创建、分配、队列管理和执行追踪。
                    </motion.p>
                  </motion.div>

                  {/* 数据可视化与分析 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      生产数据可视化
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/mes/production-data.jpg"
                            alt="生产数据统计"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">生产数据统计</p>
                            <p className="text-sm">产量趋势、设备利用率、OEE分析</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <div className="relative h-80">
                          <Image
                            src="/images/projects/mes/material-management.jpg"
                            alt="材料管理页面"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <p className="font-semibold mb-1">材料库存管理</p>
                            <p className="text-sm">CoCr、Ti系列材料管理，支持自定义材料类型</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">数据分析：</span>
                      集成Recharts图表库实现生产数据的可视化展示，包括产量趋势分析、设备综合效率（OEE）计算、
                      材料消耗统计等。支持时间维度的数据筛选，帮助管理者快速了解生产状况并做出决策。
                    </motion.p>
                  </motion.div>

                  {/* Docker容器化部署 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-2 text-primary-600" />
                      容器化部署方案
                    </h2>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                      className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-96">
                        <Image
                          src="/images/projects/mes/docker-deployment.jpg"
                          alt="Docker部署架构"
                          fill
                          className="object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="text-white p-4">
                          <p className="font-semibold mb-1">Docker Compose编排</p>
                          <p className="text-sm">前端、后端、数据库、Redis多容器协同部署</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0 }}
                      className="mt-6 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="font-semibold">部署优势：</span>
                      采用Docker容器化技术实现一键部署，通过docker-compose.yml编排前端、后端、PostgreSQL、Redis等多个服务。
                      开发环境可在5分钟内完成初始化，生产环境支持灵活的扩展和负载均衡配置。
                      所有服务配置标准化，降低运维成本，提高系统可移植性。
                    </motion.p>
                  </motion.div>
                </>
              )}
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* 技术栈详情 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    技术栈
                  </h3>
                  <div className="space-y-2">
                    {details.skills.map((tech: string) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-gray-700">{tech}</span>
                        <Code className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* 项目信息 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    项目信息
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">创建时间</span>
                      <span className="text-gray-900 font-medium">
                        {new Date(project.createdAt).toLocaleDateString('zh-CN')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">项目类型</span>
                      <span className="text-gray-900 font-medium">
                        {project.category === 'algorithm' && '算法项目'}
                        {project.category === 'tool' && '工具软件'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">状态</span>
                      <span className={`font-medium ${project.status === 'in-progress' ? 'text-blue-600' : 'text-green-600'}`}>
                        {project.status === 'in-progress' ? '进行中' : '已完成'}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* 相关项目 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    更多项目
                  </h3>
                  <Link
                    href="/projects"
                    className="block text-primary-600 hover:text-primary-700 font-medium"
                  >
                    查看所有项目 →
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}








