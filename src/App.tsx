import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Mail, Phone, ExternalLink, Server, Database, Cloud, Activity, ArrowLeft, ImageIcon, PlayCircle } from 'lucide-react';
import { cn } from './lib/utils';
import { projects } from './data/projects';

function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#ebebeb]">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe src='https://my.spline.design/interactiveaiwebsite-poQvWSoPKf6kl87HvJDaRZDU/?v=2' frameBorder='0' width='100%' height='100%'></iframe>
      </div>

      {/* Invisible Overlays for Clickable Areas (based on screenshot) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Top Navigation Hotspot */}
        <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[90%] md:w-[35%] h-[8%] flex pointer-events-auto">
          <a href="#home" className="flex-1 h-full cursor-pointer outline-none focus:outline-none" aria-label="Home"></a>
          <a href="#introduce" className="flex-1 h-full cursor-pointer outline-none focus:outline-none" aria-label="Introduce"></a>
          <a href="#skill" className="flex-1 h-full cursor-pointer outline-none focus:outline-none" aria-label="Skill"></a>
          <a href="#project" className="flex-1 h-full cursor-pointer outline-none focus:outline-none" aria-label="Project"></a>
          <a href="#experience" className="flex-1 h-full cursor-pointer outline-none focus:outline-none" aria-label="Experience"></a>
        </div>

        {/* Left Content Hotspot Removed */}
      </div>
    </section>
  );
}

function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("text-3xl md:text-4xl font-bold text-slate-800 mb-12 flex items-center gap-4", className)}
    >
      <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
      {children}
    </motion.h2>
  );
}

function Introduce() {
  const stories = [
    {
      title: "비전공자에서 전공자로, 끊임없이 성장하는 개발자",
      desc: "항공지리정보과에서 공간데이터를 접하며 무언가를 만드는 사람이 되고자 컴퓨터공학과로 편입했습니다. 초기에는 간단한 API 오류에도 어려움을 겪었지만, '왜 작동하지 않을까'라는 질문을 던지며 HTTP 상태 코드와 Spring 예외 처리(ExceptionHandler, ControllerAdvice)를 깊이 분석하여 전역 예외 처리를 직접 설계하는 등 문제 해결 능력을 키웠습니다."
    },
    {
      title: "'왜'라는 키워드를 중심에 두는 설계 사고",
      desc: "단순히 돌아가는 코드를 넘어 기술 선택의 이유와 맥락을 설명할 수 있는 개발을 지향합니다. 세션 대신 JWT를 사용하는 이유, REST API 메서드 구분, JSON 응답 구조 설계 등 본질적인 질문을 통해 프로젝트의 이해도를 높이고 유지보수성을 고려한 설계를 고민해왔습니다."
    },
    {
      title: "실패를 성장의 발판으로 삼는 문제 해결력",
      desc: "인터파크 클론 프로젝트에서 발생한 결제 로직과 장바구니의 동시성 이슈(중복 결제 및 데이터 충돌)를 마주했습니다. 문제의 본질을 파악하기 위해 주문 처리 흐름을 재정리하고, Spring 트랜잭션 전파 방식과 Redis 분산 락을 도입하여 중복 결제율을 0%로 낮추고 평균 응답 속도를 약 42%(450ms → 260ms) 개선하는 성과를 얻었습니다."
    },
    {
      title: "협업과 문서화를 통한 팀의 성장 주도",
      desc: "GDSC 및 부트캠프 활동 중 다양한 전공의 팀원들과 협업하며 발생한 코드 충돌 문제를 해결하기 위해 Git Flow 전략을 제안하고 도입했습니다. Notion을 활용한 API 명세 및 회의록 문서화, Discord 채널 분리를 통한 비동기 소통 활성화로 팀 전체의 개발 속도와 안정성을 향상시켰습니다."
    }
  ];

  return (
    <section id="introduce" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
          안녕하세요, <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            백엔드 개발자 임진묵
          </span> 입니다.
        </h3>
        <div className="mt-6 space-y-3 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
          <p>
            '좋은 개발자는 깊이 고민하는 사람'이라는 믿음으로 끊임없이 배우고 성장합니다.
          </p>
          <p className="text-base md:text-lg text-slate-500">
            단순히 표면적인 에러 해결에 그치지 않고, 문제의 <strong className="text-blue-600 font-semibold">근본적인 원인</strong>을 명확하게 진단합니다. <br className="hidden md:block" />
            해결을 위해 다양한 접근 방식의 <strong className="text-blue-600 font-semibold">장단점</strong>을 비교 분석하여 최적의 기술을 선택하며, <br className="hidden md:block" />
            적용 후에도 <strong className="text-blue-600 font-semibold">예상치 못한 부작용은 없는지 끝까지 검증</strong>하며 견고한 시스템을 만들어갑니다.
          </p>
        </div>
      </motion.div>

      <SectionHeading>Introduce</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{story.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{story.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skill() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="text-blue-600" />,
      skills: ["Java", "Spring Boot", "JPA", "MyBatis", "Python", "React"]
    },
    {
      title: "Database",
      icon: <Database className="text-blue-600" />,
      skills: ["MySQL", "MariaDB", "Redis", "supabase"]
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="text-blue-600" />,
      skills: ["Docker", "AWS (EC2, RDS)", "Github Actions"]
    },
    {
      title: "Monitoring",
      icon: <Activity className="text-blue-600" />,
      skills: ["Jmeter", "Grafana"]
    }
  ];

  return (
    <section id="skill" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading>Skill</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectList() {
  const navigate = useNavigate();

  return (
    <section id="project" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading>Project</SectionHeading>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            onClick={() => {
              navigate(`/project/${project.id}`);
              window.scrollTo(0, 0);
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col lg:flex-row gap-8 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer"
          >
            <div className="lg:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-6">{project.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4">
                {project.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div>
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
            <div className="text-blue-600 font-mono mb-2">2024.11 - 2025.06 (8개월)</div>
            <h4 className="text-slate-800 font-bold text-2xl mb-2">Goorm 백엔드 부트캠프</h4>
            <div className="space-y-3 text-slate-700 leading-relaxed mt-4">
              <p>Java 언어의 기본 문법부터 Spring Framework의 심화 개념까지 학습하며 RESTful API 설계 및 구현 역량을 기르고, 데이터베이스 설계와 ORM을 활용한 효율적인 데이터 관리 방법을 익혔습니다.</p>
              <p>실제 소프트웨어 버전 기반 클론 코딩과 디버깅 실습을 통해 실시간 버그를 해결하고, 고객 요구사항을 반영한 백엔드 시스템 설계 및 프론트엔드 연동을 경험하며 실무적인 문제 해결 능력을 키웠습니다.</p>
              <p>서버 성능 진단, 코드 및 쿼리 최적화, 캐싱 적용 등을 통해 시스템 효율을 높이고, 성능 모니터링 도구를 활용한 실시간 서버 상태 점검 및 클라우드 환경에서의 대규모 서비스 배포·운영 능력을 배양했습니다.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <div className="text-slate-500 font-mono mb-2">2024.07 - 2024.08 (2개월)</div>
            <h4 className="text-slate-800 font-bold text-2xl mb-2">AI 스타트업 유니버시티</h4>
            <div className="space-y-3 text-slate-700 leading-relaxed mt-4">
              <p>창업 생태계 트렌드 분석, 비즈니스 모델 수립, 마케팅 전략 등 창업에 필요한 전반적인 지식을 습득하고, 파이썬을 활용한 데이터 전처리 및 머신러닝/딥러닝 모델 구축의 기초를 다졌습니다.</p>
              <p>짧은 기간 내에 진행된 애자일(Agile) 기반의 프로토타이핑 프로젝트를 통해 기획부터 개발, 현업 개발자 멘토링까지 경험하며 요구사항 변화에 유연하게 대응하는 방법을 체득했습니다.</p>
              <p>Spring Boot를 활용한 API 개발, Docker를 이용한 컨테이너 빌드 및 AWS 클라우드 인프라 구축 실습을 통해 AI 서비스를 실제 웹 애플리케이션으로 배포하고 운영하는 전체 사이클을 경험했습니다.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <div className="text-slate-500 font-mono mb-2">2023.06 - 2024.06 (12개월)</div>
            <h4 className="text-slate-800 font-bold text-2xl mb-2">GDSC (Google Developer Student Clubs)</h4>
            <div className="space-y-3 text-slate-700 leading-relaxed mt-4">
              <p>다양한 직군(프론트엔드, 기획, 디자인)과의 원활한 소통 방식 및 IT 연합 동아리 내 기술 공유 문화를 경험했습니다.</p>
              <p>명확한 API 명세서 작성과 코드 리뷰를 도입하여 팀 프로젝트 초기 단계의 소통 비용 및 통합 오류를 감소시켰습니다.</p>
              <p>주도적인 프로젝트 리딩 경험, 개발자 커뮤니티 네트워킹, 기술적 다양성을 수용하는 열린 태도를 함양했습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h4 className="text-slate-800 font-bold text-2xl mb-1">한국해양대학교(편입)</h4>
              <p className="text-slate-700 font-medium">컴퓨터공학과 졸업</p>
            </div>
            <div className="text-blue-600 font-mono sm:text-right">
              2022.03 - 2025.02
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h4 className="text-slate-800 font-bold text-2xl mb-1">인하공업전문대학</h4>
              <p className="text-slate-700 font-medium">항공지리정보학과 졸업</p>
            </div>
            <div className="text-slate-500 font-mono sm:text-right">
              2017.03 - 2021.02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Let's Connect</h2>
          <p className="text-slate-600">새로운 도전을 함께할 준비가 되어 있습니다.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="mailto:mm7044@naver.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
            <div className="p-3 bg-white shadow-sm border border-slate-200 rounded-full"><Mail size={20} /></div>
            <span className="font-medium">mm7044@naver.com</span>
          </a>
          <a href="tel:+821039114169" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
            <div className="p-3 bg-white shadow-sm border border-slate-200 rounded-full"><Phone size={20} /></div>
            <span className="font-medium">+82 10 3911 4169</span>
          </a>
          <a href="https://github.com/Mukjin" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
            <div className="p-3 bg-white shadow-sm border border-slate-200 rounded-full"><Github size={20} /></div>
            <span className="font-medium">Github</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ebebeb]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">프로젝트를 찾을 수 없습니다.</h2>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ebebeb] text-slate-900 selection:bg-blue-500/30 font-sans py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">돌아가기</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{project.title}</h1>
            <p className="text-xl text-blue-600 font-medium">{project.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Server size={20} className="text-blue-500" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1.5 text-sm font-mono text-slate-700 bg-slate-100 border border-slate-200 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Activity size={20} className="text-blue-500" />
              Key Achievements
            </h2>
            <ul className="space-y-6">
              {project.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                  <span className="leading-relaxed text-lg">{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Section */}
          {project.media && project.media.length > 0 && (
            <div className="mt-20 border-t border-slate-200 pt-16">
              <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <ImageIcon size={20} className="text-blue-500" />
                  Screenshots & Video
                </h2>
              </div>
              <div className="space-y-16">
                {project.media.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-slate-100">
                      {item.type === 'video' ? (
                        <video 
                          controls 
                          playsInline
                          className="w-full h-auto max-h-[85vh] object-contain"
                          poster={item.poster}
                        >
                          <source src={item.url} type="video/mp4" />
                          <source src={item.url} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={item.url} 
                          alt={item.caption || `${project.title} screenshot ${i + 1}`} 
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                    {item.caption && (
                      <p className="mt-5 text-slate-600 font-medium text-center text-lg">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#ebebeb] text-slate-900 selection:bg-blue-500/30 font-sans">
      <main>
        <Hero />
        <Introduce />
        <Skill />
        <ProjectList />
        <Experience />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
