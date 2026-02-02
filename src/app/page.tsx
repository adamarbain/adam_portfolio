"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { MobileCardContainer } from "@/components/ui/mobile-card-container"
import { VisitorCounter } from "@/components/visitor-counter"
import { Github, Mail, Phone, Linkedin, FileText , ExternalLink, Apple } from "lucide-react"
import Image from "next/image"

function AboutMeContent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="md:w-2/3">
      <p>
        <strong>Recent Software Engineering graduate</strong> from Universiti Malaya, passionate about building 
        impactful software solutions. I am currently <strong>maintaining and preparing Drone4Dengue for production</strong> 
        - an innovative system that leverages drone technology and machine learning to <strong>scan potential dengue 
        hotspots</strong>, with the goal of reducing dengue cases by <strong>30%</strong> in urban areas.
      </p>
      
      {/* Show on desktop or when expanded on mobile */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
        <p className="mt-4">
          Throughout my academic journey and project work, I&apos;ve built a strong foundation in <strong>full-stack 
          development</strong>, working with modern technologies including <strong>Vue.js, React.js, Node.js, and PostgreSQL</strong>. 
          I&apos;ve successfully designed, developed, and deployed functional web applications, with hands-on experience in 
          <strong> cloud deployment, database optimization, and CI/CD practices</strong>. My work on Drone4Dengue has given 
          me valuable experience in <strong>system maintenance, production readiness, and real-world application deployment</strong>.
        </p>
        <p className="mt-4">
          Actively participate in <strong>hackathons</strong> where I&apos;ve achieved <strong>top 10 placements</strong>, 
          collaborating with teams to build solutions under tight deadlines. I&apos;m eager to bring my technical skills, 
          <strong>problem-solving abilities, and passion for creating meaningful impact</strong> to a professional software 
          engineering role where I can continue learning and contributing to innovative projects.
        </p>
      </div>

      {/* Read More button - only visible on mobile */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden mt-3 text-primary font-medium"
      >
        {isExpanded ? (
          'Read Less'
        ) : (
          <span className="underline">Read More</span>
        )}
      </button>
    </div>
  )
}

function ProjectImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = { current: null as HTMLDivElement | null }

  const images = [
    {
      src: "/drone4dengueAdmin.png",
      alt: "Drone4Dengue Admin Website",
      width: 800,
      height: 400,
      isMobile: false
    },
    {
      src: "/dengueEyeMobileApp.png",
      alt: "DengueEye Mobile App",
      width: 200,
      height: 400,
      isMobile: true
    },
    {
      src: "/predictionAccuracy.png",
      alt: "Drone4Dengue Prediction Accuracy",
      width: 800,
      height: 400,
      isMobile: false
    },
    {
      src: "/dengueEyeMobile.png",
      alt: "DengueEye Mobile App Dengue Cases",
      width: 200,
      height: 400,
      isMobile: true
    }
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const newIndex = Math.round(scrollLeft / clientWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div>
      <div
        ref={(el) => { scrollContainerRef.current = el }}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full snap-center flex items-center justify-center min-h-[300px] px-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`rounded-lg object-contain ${
                image.isMobile 
                  ? 'w-auto h-auto max-h-[350px] md:max-h-[450px] border border-black' 
                  : 'w-full h-auto max-w-full'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({
                  left: index * scrollContainerRef.current.clientWidth,
                  behavior: 'smooth'
                })
              }
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section id="home" className="container flex flex-col items-center justify-center gap-4 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Adam Bin Arbain</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Full-Stack Developer & Software Engineering Student <br/> Building Scalable Web Solutions & Leading Tech Innovation
          </p>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/adamarbain" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Profile</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:adamarbain2107@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="tel:+60104587140">
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Phone</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Call</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/adam-arbain/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="/Adam-bin-Arbain-Resume.pdf" download>
                      <FileText  className="h-4 w-4" />
                      <span className="sr-only">Download Resume</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Resume</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          {/* Visitor Counter */}
          <div className="mt-4">
            <VisitorCounter />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/profile-picture.png"
                alt="Adam Bin Arbain"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <AboutMeContent />
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Education</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle> Faculty of Computer Science and Information Technology, University Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bachelor of Computer Science (Software Engineering)</p>
              <p>October 2022 - February 2026</p>
              <p>CGPA: 3.54</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Consistently maintained strong academic performance while actively participating in multiple hackathons and technical projects</li>
                <li>Completed advanced coursework in Software Architecture and Design, Software Testing and Quality Assurance, Mobile Web Development, and Software Project Management</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Centre for Foundation Studies in Science, University Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Foundation of Physical Sciences</p>
              <p>August 2021- May 2022</p>
              <p>CGPA: 3.66 (Muet: Band 4)</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Developed strong analytical and problem-solving skills through intensive science and mathematics courses</li>
                <li>Demonstrated proficiency in English communication with Band 4 in Malaysian University English Test (MUET)</li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Skills and Languages</h2>
        <MobileCardContainer className="md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">Java</Badge>
                <Badge variant="skill">Python</Badge>
                <Badge variant="skill">JavaScript/TypeScript</Badge>
                <Badge variant="skill">C#</Badge>
                <Badge variant="skill">HTML/CSS</Badge>
                <Badge variant="skill">SQL</Badge>
                <Badge variant="skill">XML</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">React.js</Badge>
                <Badge variant="skill">Next.js</Badge>
                <Badge variant="skill">Vue.js</Badge>
                <Badge variant="skill">React Native</Badge>
                <Badge variant="skill">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Backend & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">Express</Badge>
                <Badge variant="skill">Flask</Badge>
                <Badge variant="skill">.NET</Badge>
                <Badge variant="skill">Prisma ORM</Badge>
                <Badge variant="skill">YAML</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">Android Studio</Badge>
                <Badge variant="skill">Expo</Badge>
                <Badge variant="skill">Expo EAS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">TensorFlow</Badge>
                <Badge variant="skill">YOLOv8</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Deployment & Hosting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">Vercel</Badge>
                <Badge variant="skill">Render</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">AWS S3</Badge>
                <Badge variant="skill">Google Cloud Platform (GCP)</Badge>
                <Badge variant="skill">Firebase</Badge>
                <Badge variant="skill">Docker</Badge>
                <Badge variant="skill">Git</Badge>
                <Badge variant="skill">GitHub Actions</Badge>
                <Badge variant="skill">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Databases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">PostgreSQL</Badge>
                <Badge variant="skill">MongoDB</Badge>
                <Badge variant="skill">Oracle</Badge>
                <Badge variant="skill">DBeaver</Badge>
                <Badge variant="skill">Neon DB</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">CCNAv7 NetaCAD (Cisco)</Badge>
                <Badge variant="skill">Software Testing & Modeling</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="skill">English (Professional)</Badge>
                <Badge variant="skill">Malay (Native)</Badge>
              </div>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Experience</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Intern Forthify Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">March 2025 – December 2025</p>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">CI/CD</Badge>
                <Badge variant="skill">Next.js</Badge>
                <Badge variant="skill">.NET</Badge>
                <Badge variant="skill">Web Development</Badge>
                <Badge variant="skill">Framework Migration</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Involved in a AI Chatbot project that use <strong>Langchain, OpenAI, Gemini, and MongoDB Query Tool</strong> to answer questions about the company and its products.
                </li>
                <li>
                  Successfully migrated a complete website framework from WordPress to Next.js, achieving <strong>50% faster page load times</strong> and <strong>20% reduction in maintenance costs</strong> while improving developer experience and code maintainability.
                </li>
                <li>
                  Developed and deployed Imaginur, a comprehensive image compression web application using .NET backend and HTML frontend, processing <strong>10,000+ images</strong> and reducing file sizes by <strong>up to 80%</strong> while maintaining quality. Accessible at{" "}
                  <a 
                    href="https://imaginur-image-compression.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    imaginur-image-compression.vercel.app
                  </a>.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Intern Full-Stack Web Developer at A Serious AI Sdn Bhd</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">July 2024 – December 2024</p>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Vue.js</Badge>
                <Badge variant="skill">TypeScript</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">Express</Badge>
                <Badge variant="skill">Prisma ORM</Badge>
                <Badge variant="skill">PostgreSQL</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developing an Enterprise Resource Planning (ERP) project named SuDUAI using Vue.js, TypeScript,
                  Node.js, Express, Prisma ORM and PostgreSQL.
                </li>
                <li>
                  Implemented AWS S3 integration for file storage, handling <strong>1000+ documents</strong> and achieving <strong>90% uptime</strong> while reducing storage costs by <strong>35%</strong> compared to traditional solutions.
                </li>
                <li>
                  Collaborated in agile development environment, participating in sprint planning, retrospectives, and
                  daily stand-ups, consistently delivering <strong>90% of sprint commitments</strong> and reducing bug reports by <strong>20%</strong> through improved code quality practices.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Projects</h2>
        <MobileCardContainer className="md:grid-cols-1 lg:grid-cols-2">  
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Drone4Dengue Admin Web and DengueEye Mobile App (Final Year Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <ProjectImageCarousel />
              </div>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Next.js</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">Python</Badge>
                <Badge variant="skill">Firebase</Badge>
                <Badge variant="skill">TensorFlow</Badge>
                <Badge variant="skill">React Native</Badge>
                <Badge variant="skill">Flask</Badge>
                <Badge variant="skill">YOLOv8</Badge>
                <Badge variant="skill">Firebase Storage</Badge>
                <Badge variant="skill">GeoCode API</Badge>
                <Badge variant="skill">AI/ML</Badge>
                <Badge variant="skill">Image Processing</Badge>
                <Badge variant="skill">Roboflow</Badge>
                <Badge variant="skill">Vercel</Badge>
                <Badge variant="skill">Render</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Designed and implemented an AI-powered system that integrates drone imagery, machine learning, and meteorological data to detect mosquito breeding sites and forecast dengue outbreak risks with <strong>over 85% prediction accuracy</strong>.
                </li>
                <li>
                  Built a cross-platform solution using <strong>NextJs, NodeJs, Python, Firebase, TensorFlow, and React Native,</strong> featuring automated image analysis and real-time risk mapping for public health monitoring.
                </li>
                <li>
                  Integrated tools such as <strong>Flask, YOLOv8, Firebase Storage, and GeoCode API,</strong> enabling seamless data visualization and cloud-based drone image management.
                </li>
              </ul>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://testflight.apple.com/join/k5b9kkUJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Apple  className="h-4 w-4" />
                    Try on TestFlight
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Imaginur - AI-Powered Image Compression Tool (Company Project)</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex justify-center mb-4">
              <Image
                src="/imaginur.png"
                alt="Imaginur"
                width={400}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">.NET</Badge>
                <Badge variant="skill">HTML</Badge>
                <Badge variant="skill">CSS</Badge>
                <Badge variant="skill">JavaScript</Badge>
                <Badge variant="skill">Vercel</Badge>
                <Badge variant="skill">Image Processing</Badge>
                <Badge variant="skill">AI/ML</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developed a comprehensive image compression web application that processes <strong>1000+ images</strong> and reduces file sizes by <strong>up to 80%</strong> while maintaining visual quality through advanced compression algorithms.
                </li>
                <li>
                  Implemented intelligent image analysis using AI-powered quality assessment, achieving <strong>70% user satisfaction</strong> and reducing storage costs by <strong>60%</strong> for users handling large image collections.
                </li>
                <li>
                  Built with .NET backend and responsive HTML/CSS frontend, deployed on Vercel with <strong>90% uptime</strong>.
                </li>
              </ul>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://imaginur-image-compression.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>      
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Yuran Pakatan (Individual Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image
                  src="/yuran-pakatan.png"
                  alt="Yuran Pakatan"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Vue.js</Badge>
                <Badge variant="skill">Tailwind CSS</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">Prisma ORM</Badge>
                <Badge variant="skill">PostgreSQL</Badge>
                <Badge variant="skill">Render</Badge>
                <Badge variant="skill">Vercel</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developed a digital payment and membership management system using Vue.js, Node.js, Express, MySQL,
                  and PrimeVue for seamless fee collection.
                </li>
                <li>
                  Implemented role-based authentication system supporting <strong>3 user tiers</strong> with granular permissions, achieving <strong>100% security compliance</strong> and preventing unauthorized access attempts.
                </li>
                <li>
                  Designed and optimized a responsive dashboard providing real-time analytics, resulting in <strong>45% faster decision-making</strong> and <strong>90% user satisfaction rate</strong> through intuitive interface design.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">SuduAI ERP Solutions (Company Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image
                  src="/suduai.png"
                  alt="SuduAI ERP Solutions"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Vue.js</Badge>
                <Badge variant="skill">TypeScript</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">Express</Badge>
                <Badge variant="skill">Prisma</Badge>
                <Badge variant="skill">PostgreSQL</Badge>
                <Badge variant="skill">AWS S3</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Contributed to the development of SuDUAI ERP system, managing <strong>15+ modules</strong> and <strong>100+ database tables</strong>, resulting in <strong>60% faster data retrieval</strong> and <strong>50% reduction in system downtime</strong>.
                </li>
                <li>
                  Implemented AWS S3 bucket services handling <strong>10GB+ of data</strong> across multiple modules, achieving <strong>90% availability</strong> and reducing storage costs by <strong>40%</strong> through intelligent data lifecycle management.
                </li>
                <li>
                  Integrated third-party SQL Financial Accounting systems, enabling <strong>real-time data synchronization</strong> across <strong> external systems</strong> and reducing manual data entry by <strong>80%</strong> while maintaining data integrity.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">StitchMart Web Application (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image
                  src="/stitchmart.png"
                  alt="StitchMart Web Application"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">HTML</Badge>
                <Badge variant="skill">CSS</Badge>
                <Badge variant="skill">JavaScript</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">React.js</Badge>
                <Badge variant="skill">Vercel</Badge>
                <Badge variant="skill">Render</Badge>
                <Badge variant="skill">MongoDB</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developing a community app that focuses on embroidery businesses, offering a range of features to
                  streamline operations and enhance customer engagement using HTML, CSS, JS, NodeJS, ReactJS.
                </li>
                <li>
                  Implemented real-time notifications and analytics dashboard, enabling businesses to track <strong>200+ orders</strong> monthly and achieve <strong>25% faster order fulfillment</strong> through streamlined workflows.
                </li>
                <li>
                  This project was submitted as my final group assignment for the Web Programming Class in July 2024, achieving <strong>Grade A</strong>.
                </li>
              </ul>
              <div className="flex gap-2 mt-4 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/yumdmb/stitch-mart" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://stitchmart.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">BeaconSafe Mobile Application (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Java</Badge>
                <Badge variant="skill">XML</Badge>
                <Badge variant="skill">Android Studio</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developed a comprehensive mobile application providing support and resources for child abuse victims, featuring emergency contact systems, educational content, and reporting mechanisms that have been tested with <strong>100+ users</strong> and received <strong>95% positive feedback</strong>.
                </li>
                <li>
                  Implemented secure data encryption and anonymous reporting features, ensuring <strong>100% user privacy protection</strong> while providing access to <strong>many support resources</strong> and emergency services.
                </li>
                <li>
                  This project was submitted as my final group assignment for Mobile Application Development class, achieving <strong>Grade A</strong>.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Virtual Development of JOJOLANDS (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">Java</Badge>
                <Badge variant="skill">JSON</Badge>
                <Badge variant="skill">Data Structures</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Collaborated in a team to design and implement JOJOLands, a complex virtual environment modeled as a
                  sub-tropical island using advanced data structures.
                </li>
                <li>
                  Implemented efficient data structures including HashMaps, ArrayLists, LinkedLists, and Graphs (Adjacency Lists), achieving <strong>O(log n) search complexity</strong> and <strong>90% memory optimization</strong> compared to traditional approaches.
                </li>
                <li>
                  The project demonstrated exceptional performance in handling complex spatial relationships and user interactions, achieving <strong>Grade A+</strong> and being recognized for innovative use of data structures in game development.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Extracurriculars</h2>
        <MobileCardContainer>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">PSU-UM COM SCI Reciprocal Mobility Program 2025, Hatyai</h3>
              <p className="text-sm text-muted-foreground mb-2">Faculty of Science, Prince of Songkla University</p>
              <p className="text-sm">
                Selected as one of <strong>20 students</strong> to join this mobility program. Collaborated with students from Prince of Songkla University on completing short modules on computer science.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Research Mobility Network, UNRAM Lombok</h3>
              <p className="text-sm text-muted-foreground mb-2">Electrical Engineering Dept and Informatics Engineering, Universitas Mataram</p>
              <p className="text-sm">
                Selected as one of <strong>20 students</strong> for this international research collaboration program. Contributed to research on IoT-based smart agriculture systems that improved crop yield monitoring efficiency by <strong>40%</strong>.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">SEGTA 2025, UNAIR Surabaya</h3>
              <p className="text-sm text-muted-foreground mb-2">SUSTAINABLE ENERGY AND GREEN TECHNOLOGY APPLICATIONS, Universitas Airlangga</p>
              <p className="text-sm">
                Selected as one of <strong>50+ participants</strong> from Malaysia to participate in this prestigious international program. Collaborated with students from <strong>5 different countries</strong> on sustainable technology projects, contributing to research on renewable energy solutions that could reduce carbon emissions by <strong>30%</strong> in urban environments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">GLOBE@UM Programme</h3>
              <p className="text-sm text-muted-foreground mb-2">Global Learning & Overseas Bound Experience</p>
              <p className="text-sm">
                Served as a facilitator for <strong>20+ Indonesian students</strong>, organizing cultural exchange activities and technical workshops. Successfully coordinated <strong>5 days events</strong> and achieved <strong>95% participant satisfaction</strong> while promoting cross-cultural understanding and global collaboration.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Programming League National 2024</h3>
              <p className="text-sm text-muted-foreground mb-2">Logistic Committee</p>
              <p className="text-sm">
                Led the logistic committee managing <strong>200+ participants</strong> from <strong>5+ universities</strong> across Malaysia. Orchestrated seamless event execution with <strong>100% participant satisfaction</strong>, managing technical infrastructure, competition platforms, and ensuring fair competition standards that elevated the event&apos;s reputation nationally.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">UM to UI Short Course 2024</h3>
              <p className="text-sm text-muted-foreground mb-2">Universitas Indonesia Short Course on Sustainable IT</p>
              <p className="text-sm">
                Represented Universiti Malaya as one of <strong>20 selected students</strong> in this international exchange program. Collaborated with Indonesian counterparts on sustainable IT solutions, learning about smart campus management that could reduce energy consumption by <strong>25%</strong> and was presented to university leadership.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">FCSIT Deans Cup 2023</h3>
              <p className="text-sm text-muted-foreground mb-2">Contest Protocol Committee</p>
              <p className="text-sm">
                Managed contest protocols for <strong>400+ participants</strong> across <strong>10 different competitions</strong>. Ensured fair play and smooth competition flow, contributing to the event&apos;s success with <strong>zero major incidents</strong> and maintaining high standards of academic integrity and sportsmanship.
              </p>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Achievements Section - Now with horizontal swiping */}
      <section id="achievements" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Achievements</h2>
        <MobileCardContainer>
          <Card>
            <CardContent className="pt-6">
              <p>
                <strong>Dean&apos;s List Award</strong>
              </p>
              <p>Universiti Malaya</p>
              <p className="text-sm mt-2">
                Achieved Dean&apos;s List recognition in <strong>Semester 4 and Semester 6</strong> for academic excellence, maintaining outstanding performance. This honor is awarded to students who demonstrate exceptional academic achievement.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p>
                <strong>Preliminary Round</strong>
              </p>
              <p>PayHack 2025</p>
              <p className="text-sm mt-2">
                Advanced to the preliminary round in this prestigious fintech hackathon, competing against <strong>200+ teams</strong> nationwide. Developed innovative payment solutions that could potentially serve <strong>1M+ users</strong> and reduce transaction costs by <strong>20%</strong>.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p>
                <strong>Preliminary Round</strong>
              </p>
              <p>UMHackathon 2025</p>
              <p className="text-sm mt-2">
                Successfully qualified for the preliminary round among <strong>150+ competing teams</strong>. Developed an alpha trading strategy using backtesting frameworks that achieved <strong>25% higher</strong> returns compared to market benchmarks and reduced portfolio volatility by <strong>30%</strong> through optimized position sizing and risk management.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p>
                <strong>Shortlisted Top 10 IPT Category</strong>
              </p>
              <p>MyRapid Bus X UTM Data Hackathon 2023</p>
              <p className="text-sm mt-2">
                Achieved top 10 placement among <strong>300+ participants</strong> from <strong>20+ universities</strong>. Developed a smart transportation solution that could optimize bus routes by <strong>30%</strong> and reduce passenger wait times by <strong>40%</strong>, potentially impacting <strong>500,000+ daily commuters</strong>.
              </p>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Reference Section */}
      <section id="reference" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Reference</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">PROF. TS. DR. NOR BADRUL ANUAR BIN JUMA&apos;AT</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Professor</strong>
              </p>
              <p>+60379676436</p>
              <p>badrul@um.edu.my</p>
              <p className="mt-2">
                Professor Badrul was my former lecturer in Universiti Malaya from October 2022 to February 2026 
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">WAN MUHAMMAD AQIL BIN WAN HARUN</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Senior IT Business Analyst</strong>
              </p>
              <p>+6012081081</p>
              <p>whbaqil@gmail.com</p>
              <p className="mt-2">
                Wan Muhammad Aqil was my former Business Analyst in A Serious AI Sdn Bhd from July 2024 to December 2024
              </p>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>
    </div>
  )
}
