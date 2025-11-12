'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Code, Zap, Target, CheckCircle2, Cpu } from 'lucide-react'
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

// MES 项目功能截图轮播组件
function MESScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screenshots = [
    {
      src: '/images/projects/MES/仪表板.jpg',
      alt: '仪表板',
      title: '仪表板'
    },
    {
      src: '/images/projects/MES/设备监控.jpg',
      alt: '设备监控',
      title: '设备监控'
    },
    {
      src: '/images/projects/MES/任务管理.jpg',
      alt: '任务管理',
      title: '任务管理'
    },
    {
      src: '/images/projects/MES/材料管理.jpg',
      alt: '材料管理',
      title: '材料管理'
    },
    {
      src: '/images/projects/MES/生产数据.jpg',
      alt: '生产数据',
      title: '生产数据'
    },
    {
      src: '/images/projects/MES/系统设置.jpg',
      alt: '系统设置',
      title: '系统设置'
    }
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* 轮播图容器 */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
        {/* 图片容器 - 保持图片完整显示 */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                fill
                className="object-contain"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 左右切换按钮 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="上一张"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="下一张"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 底部指示器和标题 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
          <p className="text-white text-center font-medium text-lg mb-3">
            {screenshots[currentIndex].title}
          </p>
          <div className="flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`跳转到第 ${index + 1} 张`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 缩略图预览（可选） */}
      <div className="mt-4 grid grid-cols-6 gap-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-primary-600 ring-2 ring-primary-200 scale-105' 
                : 'border-gray-200 hover:border-primary-300 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  )
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
        fullDescription: "项目信息正在整理中，敬请期待...",
        challenges: [
          "内容整理中"
        ],
        solutions: [
          "敬请期待"
        ],
        outcomes: [
          "Coming Soon"
        ],
        skills: ["Coming Soon"]
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
      },
      5: {
        fullDescription: "全国大学生智能车竞赛是中国自动化学会主办的国家级赛事，以实车比赛的形式考验参赛队伍的硬件设计、软件算法和系统集成能力。我们团队连续两年参赛，先后获得全国一等奖（20/565）和二等奖。项目使用OpenCV实现车道线识别，结合YOLO进行目标检测，通过PID控制算法实现精准的运动控制。",
        // 比赛视频和规则
        competitions: [
          {
            year: "第十六届（2021）",
            award: "全国一等奖（20/565）",
            video: "/images/projects/smartCar/first_year.mp4",
            videoAspect: "9:16", // 竖屏视频
            rules: [
              "从起点出发，在跑道内行驶一圈，最终回到起点",
              "在对应的城堡举起对应的旗帜",
              "攻击路上遇到的标靶",
              "拾取路边的方块",
              "将携带的四个球放入指定的位置"
            ],
            role: "上位机算法工程师",
            achievement: "负责车道线识别算法开发，使用OpenCV通过颜色空间转换和形态学处理实现高效稳定的车道检测",
            certificate: "/images/projects/smartCar/certificate_of_commendation.jpg"
          },
          {
            year: "第十七届（2022）",
            award: "全国二等奖",
            video: "/images/projects/smartCar/second_year.mp4",
            videoAspect: "16:9", // 横屏视频
            rules: [
              "从起点出发，在跑道内行驶一圈，最终回到起点",
              "在对应的城堡举起对应的旗帜",
              "拾取对应颜色的方块",
              '识别沿路的人物，击倒几个高度不同的"强盗"',
              '放下拾取的方块，然后在两个"货物"中识别出来自西域的产品并将其拾起'
            ],
            role: "控制算法工程师",
            achievement: "负责PID控制算法设计，采用分段PID减少启停时间，加快反应速度",
            certificate: "/images/projects/smartCar/certificate_of_commendation2.jpg"
          }
        ],
        // 硬件系统
        hardwareSystem: {
          description: "智能车采用上下位机分离架构，Edge Board作为上位机负责视觉感知，STM32作为下位机负责运动控制，通过串口通信实现数据传输。",
          components: [
            {
              name: "Edge Board",
              image: "/images/projects/smartCar/edge_board.jpg",
              role: "上位机",
              description: "搭载百度飞桨深度学习框架，负责车道线识别和标志物检测，实时计算行驶误差并下发任务指令"
            },
            {
              name: "STM32",
              image: "/images/projects/smartCar/stm32.jpg",
              role: "下位机",
              description: "接收上位机下发的行驶误差和任务指令，通过PID控制算法进行速度和方向控制，完成各项比赛任务"
            },
            {
              name: "电机驱动与舵机控制板",
              image: "/images/projects/smartCar/motorDriver_servoContoller.jpg",
              role: "执行单元",
              description: "放大下位机输出信号，控制直流电机和舵机，实现车辆的精确运动控制"
            }
          ],
          dataFlow: [
            "摄像头采集赛道图像",
            "Edge Board 进行图像处理和目标识别",
            "计算车道偏差和任务指令",
            "通过串口发送至 STM32",
            "STM32 执行 PID 控制",
            "驱动板控制电机和舵机"
          ]
        },
        // 第一年车辆结构
        vehicleStructure: {
          description: '第一年比赛的智能车结构设计（团队戏称"绿皮科技"），集成了摄像头、机械臂、传感器等多个功能模块。虽然外观不太美观，但功能齐全，成功完成了所有比赛任务。',
          images: [
            {
              src: "/images/projects/smartCar/top_view.jpg",
              alt: "智能车俯视图",
              description: "车辆顶部布局，可见摄像头、控制板和机械臂结构"
            },
            {
              src: "/images/projects/smartCar/left_view.jpg",
              alt: "智能车左视图",
              description: "车辆侧面结构，展示了立体化的机械臂和传感器布置"
            },
            {
              src: "/images/projects/smartCar/side_view.jpg",
              alt: "智能车侧视图",
              description: '车辆整体外观，功能优先的工程实践风格'
            }
          ]
        },
        // 算法实现
        algorithms: {
          laneDetection: {
            title: "车道线识别算法",
            description: "采用传统计算机视觉方法，通过颜色空间转换、阈值提取、形态学处理等步骤，实现高效稳定的车道线检测。算法流程经过精心优化，确保在不同光照条件下都能保持高识别率。",
            pipeline: [
              "RGB转HSV颜色空间",
              "阈值提取目标车道线",
              "转灰度图",
              "腐蚀滤波去除噪声",
              "二值化处理",
              "提取车道线轮廓",
              "计算转向误差"
            ],
            images: [
              {
                src: "/images/projects/smartCar/straight.jpg",
                alt: "直道车道线识别",
                description: "直道场景下的车道线检测效果，白线清晰识别"
              },
              {
                src: "/images/projects/smartCar/curve.jpg",
                alt: "弯道车道线识别",
                description: "弯道场景下的车道线检测效果，曲线跟踪稳定"
              }
            ],
            myRole: "本人主要负责这个部分的算法设计与优化"
          },
          objectDetection: {
            title: "YOLO目标检测",
            description: "使用百度飞桨作为训练平台，基于YOLO算法训练目标检测模型，用于识别比赛中的标志物、城堡、方块等目标。通过数据增强和模型优化，实现了高精度的实时检测。",
            image: {
              src: "/images/projects/smartCar/marker_recognition.jpg",
              alt: "标志物识别效果",
              description: "YOLO模型识别效果展示，绿色框标注检测到的目标"
            },
            platform: "百度飞桨"
          }
        },
        challenges: [
          "车道线识别：在不同光照条件下保持高识别率，处理弯道、交叉路口等复杂场景",
          "目标检测：实时识别多种标志物（城堡、方块、人物等），确保检测精度和速度的平衡",
          "运动控制：设计鲁棒的PID控制算法，实现快速响应和平稳运行",
          "系统集成：协调上下位机通信，确保数据传输的实时性和可靠性"
        ],
        solutions: [
          "使用OpenCV进行图像处理：RGB转HSV颜色空间 → 阈值提取 → 腐蚀滤波 → 二值化 → 提取车道线轮廓 → 计算转向误差",
          "使用百度飞桨训练YOLO模型进行目标检测，结合数据增强技术提高模型泛化能力",
          "实现分段PID控制，针对启动、加速、转弯等不同阶段采用不同参数，提升控制性能",
          "采用串口通信实现上下位机数据传输，Edge Board负责视觉感知，STM32负责运动控制"
        ],
        outcomes: [
          "第十六届全国大学生智能车竞赛全国一等奖（20/565）",
          "第十七届全国大学生智能车竞赛全国二等奖",
          "积累了完整的智能车开发经验，从硬件设计到软件实现",
          "掌握了OpenCV图像处理、深度学习模型训练、PID控制等实用技术"
        ],
        skills: ["C++", "Python", "OpenCV", "百度飞桨", "YOLO", "PID控制", "STM32", "串口通信"],
        teamPhotos: [
          {
            src: "/images/projects/smartCar/group_photo.jpg",
            alt: "第十六届团队合影",
            year: "2021"
          },
          {
            src: "/images/projects/smartCar/group_photo_year2.jpg",
            alt: "第十七届团队合影",
            year: "2022"
          }
        ],
        acknowledgment: "特别感谢图片中的所有组员和老师，没有他们的共同努力，所有的成就都不可能实现。"
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

      {/* 项目图片 / 功能展示轮播图 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.id === 6 ? (
            /* MES 项目：功能截图轮播展示 */
            <MESScreenshotCarousel />
          ) : (
            /* 其他项目：单张图片展示 */
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
          )}
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
                      className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-50"
                    >
                      {/* 使用 SVG 格式保持矢量清晰度 */}
                      <div className="relative w-full" style={{ minHeight: '600px' }}>
                        <Image
                          src="/images/projects/MES/system-architecture.drawio.svg"
                          alt="MES系统架构图"
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain p-4"
                          priority
                        />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                        <p className="text-white text-sm">
                          <span className="font-semibold">系统架构图：</span>
                          前后端分离架构，Next.js 14 + FastAPI + PostgreSQL/Redis
                        </p>
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
                      className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-50"
                    >
                      {/* 使用 SVG 格式保持矢量清晰度 */}
                      <div className="relative w-full" style={{ minHeight: '600px' }}>
                        <Image
                          src="/images/projects/MES/docker-deployment-architecture.drawio.svg"
                          alt="Docker部署架构"
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain p-4"
                        />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                        <p className="text-white text-sm">
                          <span className="font-semibold">🐳 Docker Compose：</span>
                          前端、后端、数据库、Redis 多容器协同部署
                        </p>
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

              {/* 项目5：智能车竞赛 */}
              {project.id === 5 && details.competitions && (
                <>
                  {/* 比赛概览 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                      🏆 比赛概览
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="text-center mb-4">
                        全国大学生智能车竞赛是<span className="font-semibold text-primary-600">中国自动化学会</span>主办的国家级赛事，
                        以<span className="font-semibold">实车比赛</span>为核心，考验参赛队伍的<span className="font-semibold">硬件设计、软件算法、系统集成</span>等综合能力。
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-600 mb-2">一等奖</div>
                            <div className="text-sm text-gray-600">第十六届全国大赛 (20/565)</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-600 mb-2">二等奖</div>
                            <div className="text-sm text-gray-600">第十七届全国大赛</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 两年比赛视频和规则 */}
                  {details.competitions.map((competition: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.3 }}
                      className="bg-white rounded-2xl p-8 shadow-sm"
                    >
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">
                            {competition.year} - {competition.award}
                          </h2>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                            {competition.role}
                          </span>
                        </div>
                        <p className="text-gray-600">{competition.achievement}</p>
                      </div>

                      {/* 视频和规则布局 */}
                      {competition.videoAspect === "9:16" ? (
                        // 第一年：竖屏视频，左右布局
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* 左侧：视频 */}
                          <div className="flex justify-center">
                            <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ width: '360px', height: '640px' }}>
                              <video
                                controls
                                className="w-full h-full object-cover"
                                poster="/images/projects/smartCar/home_page.jpg"
                              >
                                <source src={competition.video} type="video/mp4" />
                                您的浏览器不支持视频播放。
                              </video>
                            </div>
                          </div>

                          {/* 右侧：规则说明 */}
                          <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 比赛任务</h3>
                            <ul className="space-y-3">
                              {competition.rules.map((rule: string, ruleIndex: number) => (
                                <li key={ruleIndex} className="flex items-start">
                                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    {ruleIndex + 1}
                                  </span>
                                  <span className="text-gray-700">{rule}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* 获奖证书预览 */}
                            <div className="mt-6">
                              <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                                <div className="relative h-64">
                                  <Image
                                    src={competition.certificate}
                                    alt={`${competition.year}获奖证书`}
                                    fill
                                    className="object-contain bg-gray-50"
                                  />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-semibold">点击查看大图</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // 第二年：横屏视频，上下布局
                        <div className="space-y-6">
                          {/* 上方：视频 */}
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <video
                              controls
                              className="w-full"
                              style={{ maxHeight: '500px' }}
                            >
                              <source src={competition.video} type="video/mp4" />
                              您的浏览器不支持视频播放。
                            </video>
                          </div>

                          {/* 下方：规则和证书 */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* 规则说明 */}
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 比赛任务</h3>
                              <ul className="space-y-3">
                                {competition.rules.map((rule: string, ruleIndex: number) => (
                                  <li key={ruleIndex} className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                      {ruleIndex + 1}
                                    </span>
                                    <span className="text-gray-700">{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 获奖证书 */}
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">🏅 获奖证书</h3>
                              <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                                <div className="relative h-80">
                                  <Image
                                    src={competition.certificate}
                                    alt={`${competition.year}获奖证书`}
                                    fill
                                    className="object-contain bg-gray-50"
                                  />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-semibold">点击查看大图</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* 硬件系统架构 */}
                  {details.hardwareSystem && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="bg-white rounded-2xl p-8 shadow-sm"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Cpu className="w-6 h-6 mr-2 text-primary-600" />
                        硬件系统架构
                      </h2>
                      <p className="text-gray-700 mb-6">{details.hardwareSystem.description}</p>

                      {/* 硬件组件卡片 */}
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {details.hardwareSystem.components.map((component: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 + idx * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                              <Image
                                src={component.image}
                                alt={component.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="text-center">
                              <h3 className="font-bold text-gray-900 mb-1">{component.name}</h3>
                              <div className="text-xs font-semibold text-primary-600 mb-2">{component.role}</div>
                              <p className="text-sm text-gray-600">{component.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* 数据流图 */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">📊 系统数据流</h3>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          {details.hardwareSystem.dataFlow.map((step: string, idx: number) => (
                            <div key={idx} className="flex items-center">
                              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                                <span className="text-sm font-medium text-gray-700">{step}</span>
                              </div>
                              {idx < details.hardwareSystem.dataFlow.length - 1 && (
                                <div className="mx-2 text-primary-600 font-bold">→</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* 车辆结构展示 */}
                  {details.vehicleStructure && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="bg-white rounded-2xl p-8 shadow-sm"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        🚗 车辆结构设计
                      </h2>
                      <p className="text-gray-700 mb-6">{details.vehicleStructure.description}</p>

                      <div className="grid md:grid-cols-3 gap-6">
                        {details.vehicleStructure.images.map((img: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.9 + idx * 0.1 }}
                            className="relative rounded-xl overflow-hidden shadow-lg group"
                          >
                            <div className="relative h-64">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="text-white p-4">
                                <p className="font-semibold mb-1">{img.alt}</p>
                                <p className="text-sm">{img.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* 算法实现 */}
                  {details.algorithms && (
                    <>
                      {/* 车道线识别算法 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.1 }}
                        className="bg-white rounded-2xl p-8 shadow-sm"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Code className="w-6 h-6 mr-2 text-primary-600" />
                          {details.algorithms.laneDetection.title}
                        </h2>
                        <p className="text-gray-700 mb-6">{details.algorithms.laneDetection.description}</p>

                        {/* 算法流程 */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">🔄 算法流程</h3>
                          <div className="flex flex-wrap items-center justify-center gap-2">
                            {details.algorithms.laneDetection.pipeline.map((step: string, idx: number) => (
                              <div key={idx} className="flex items-center">
                                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                                  <span className="text-sm font-medium text-gray-700">{step}</span>
                                </div>
                                {idx < details.algorithms.laneDetection.pipeline.length - 1 && (
                                  <div className="mx-2 text-primary-600 font-bold">→</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 识别效果展示 */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {details.algorithms.laneDetection.images.map((img: any, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 2.2 + idx * 0.1 }}
                              className="relative rounded-xl overflow-hidden shadow-lg group"
                            >
                              <div className="relative h-64">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="text-white p-4">
                                  <p className="font-semibold mb-1">{img.alt}</p>
                                  <p className="text-sm">{img.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <p className="mt-6 text-primary-600 font-semibold italic text-center">
                          💡 {details.algorithms.laneDetection.myRole}
                        </p>
                      </motion.div>

                      {/* YOLO目标检测 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.4 }}
                        className="bg-white rounded-2xl p-8 shadow-sm"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Target className="w-6 h-6 mr-2 text-primary-600" />
                          {details.algorithms.objectDetection.title}
                        </h2>
                        <p className="text-gray-700 mb-6">{details.algorithms.objectDetection.description}</p>

                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                          <div className="relative h-96">
                            <Image
                              src={details.algorithms.objectDetection.image.src}
                              alt={details.algorithms.objectDetection.image.alt}
                              fill
                              className="object-contain bg-gray-50"
                            />
                          </div>
                        </div>

                        <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                          <p className="text-center text-gray-700">
                            <span className="font-semibold">训练平台：</span>
                            {details.algorithms.objectDetection.platform} - 
                            提供了丰富的预训练模型和高效的训练工具
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {/* 团队合影与致谢 */}
                  {details.teamPhotos && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.7 }}
                      className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-sm"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        👥 团队风采
                      </h2>

                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        {details.teamPhotos.map((photo: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 2.8 + idx * 0.1 }}
                            className="relative rounded-xl overflow-hidden shadow-lg"
                          >
                            <div className="relative h-80">
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <p className="text-white font-semibold text-center">
                                {photo.alt} ({photo.year})
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.0 }}
                        className="bg-white rounded-xl p-6 shadow-sm text-center"
                      >
                        <p className="text-gray-700 text-lg leading-relaxed">
                          💖 {details.acknowledgment}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
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








