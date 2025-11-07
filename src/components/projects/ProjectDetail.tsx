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
        fullDescription: "基于VR技术的机械臂轨迹规划系统，手持设备在空间中移动，通过电脑软件对移动的轨迹进行编辑，然后让机械臂复现设备记录的轨迹。适用于机械臂打磨、电子产品组装等工业应用场景。",
        challenges: [
          "VR设备二次开发：使用HTC Vive Tracker和OpenVR库实现精确位置捕获",
          "轨迹编辑：开发人机交互界面（Qt）实现轨迹的可视化和编辑",
          "网络通信：通过TCP协议实现前后端分离",
          "3D可视化：使用OpenGL实现轨迹的虚拟呈现",
          "传感器集成：集成压力传感器进行交互控制"
        ],
        solutions: [
          "使用OpenVR SDK进行VR设备开发",
          "开发Qt界面实现轨迹规划和编辑功能",
          "采用OpenGL进行实时3D渲染",
          "通过TCP实现模块化系统架构"
        ],
        outcomes: [
          "完整的VR轨迹规划系统",
          "实现了机械臂的精确轨迹复现",
          "应用于工业打磨和组装场景"
        ],
        skills: ["C++", "Qt", "OpenVR", "OpenGL", "TCP通信", "VR开发", "传感器集成"]
      },
      4: {
        fullDescription: "低成本低负载的五轴机械臂控制系统。实现了完整的正运动学和逆运动学算法，配备人机交互界面，支持轨迹规划和实时控制。",
        challenges: [
          "运动学算法：开发正运动学和逆运动学算法",
          "轨迹规划：实现平滑的路径规划算法",
          "实时控制：确保控制指令的实时性",
          "人机交互：开发直观的控制界面"
        ],
        solutions: [
          "实现D-H参数法的运动学建模",
          "采用样条插值进行轨迹平滑",
          "使用嵌入式系统实现实时控制",
          "开发Qt界面进行可视化控制"
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
          "性能优化：在有限硬件资源下提升识别速度",
          "光照适应：应对不同光照条件下的识别准确率",
          "实时性要求：确保算法满足实时控制需求",
          "模型训练：训练和部署Ultra-Fast-Lane-Detection-V2模型"
        ],
        solutions: [
          "优化算法流程，减少不必要的计算",
          "采用自适应图像处理技术",
          "使用深度学习模型进行识别",
          "在上位机和下位机之间建立高效通信协议"
        ],
        outcomes: [
          "获得全国一等奖（20/565）",
          "成为用时最短的队伍",
          "识别准确率达到95%以上"
        ],
        skills: ["C++", "Python", "计算机视觉", "深度学习", "Ultra-Fast-Lane-Detection", "图像处理", "TCP通信"]
      },
      6: {
        fullDescription: "广东省电子设计大赛项目。负责模型训练和上位机开发，使用百度飞桨平台训练模型并部署到PC端，通过TCP协议进行通信，实现图像识别和指令传输。",
        challenges: [
          "模型训练：在百度飞桨平台训练目标检测模型",
          "模型部署：将训练好的模型部署到PC端",
          "通信协议：实现上位机与下位机的数据传输",
          "实时性：保证识别和控制的实时性"
        ],
        solutions: [
          "使用百度飞桨进行模型训练和优化",
          "开发上位机软件处理图像和控制逻辑",
          "采用TCP协议实现可靠通信",
          "使用串口向下位机发送控制指令"
        ],
        outcomes: [
          "成功实现超市货物的自动识别",
          "机器人能够准确定位和抓取目标",
          "获得省级比赛奖项"
        ],
        skills: ["Python", "百度飞桨", "计算机视觉", "TCP通信", "串口通信", "目标检测"]
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








