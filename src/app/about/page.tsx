"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileCardContainer } from "@/components/ui/mobile-card-container"
import Image from "next/image"

function AboutMeContent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="md:w-2/3">
      <p>
        I&apos;m a <strong>Software Engineering graduate</strong> from <strong>Universiti Malaya</strong> (CGPA 3.57), 
        currently working as a <strong>Research Assistant</strong> deploying the Drone4Dengue system and publishing research. 
        I specialize in <strong>Full-Stack Development</strong> and <strong>AI-driven solutions</strong>.
      </p>
      
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
        <p className="mt-4">
          My mission is to build software that creates <strong>measurable impact</strong>—whether that&apos;s predicting 
          dengue outbreaks with <strong>&gt;80% accuracy</strong>, migrating legacy systems to cut load times by <strong>20%</strong>, 
          or implementing AWS S3 across <strong>12 ERP modules</strong>. I care deeply about the <strong>&ldquo;why&rdquo;</strong> behind every project.
        </p>
        <p className="mt-4">
          Outside of work, I stay active through <strong>sports</strong> and thrive in collaborative, 
          cross-cultural environments—having participated in <strong>3 international mobility programs</strong>. 
          I&apos;m seeking <strong>full-time Software Engineering roles starting June 2026</strong>.
        </p>
      </div>

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

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-8">
      {/* About Section */}
      <section className="container px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold md:text-4xl mb-6">About Me</h1>
        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 pt-6">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/profile-picture.png"
                alt="Adam Bin Arbain"
                width={300}
                height={300}
                className="rounded-lg object-cover w-48 h-48 md:w-full md:h-auto"
              />
            </div>
            <AboutMeContent />
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Education</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle>Faculty of Computer Science and Information Technology, Universiti Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bachelor of Computer Science (Software Engineering)</p>
              <p>October 2022 – February 2026</p>
              <p>CGPA: 3.57</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Dean&apos;s List in Semester 4, 6 & 7</li>
                <li>Coursework: Software Architecture, Testing & QA, Mobile Development, Project Management</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Centre for Foundation Studies in Science, Universiti Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Foundation in Physical Sciences</p>
              <p>August 2021 – May 2022</p>
              <p>CGPA: 3.66 | MUET: Band 4</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Strong analytical and problem-solving foundation</li>
                <li>MUET Band 4 — professional English proficiency</li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Skills Section */}
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Skills & Languages</h2>
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
                <Badge variant="skill">AWS-COA – Cloud Operations on AWS (Sept 2024)</Badge>
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
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Experience</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Research Assistant — Universiti Malaya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">February 2026 – May 2026</p>
              <div className="mb-4 flex flex-wrap gap-1">
                <Badge variant="skill">React Native</Badge>
                <Badge variant="skill">Next.js</Badge>
                <Badge variant="skill">Research</Badge>
                <Badge variant="skill">Deployment</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Deployed the complete <strong>Drone4Dengue</strong> app and submitted a research paper to a reputable conference/journal.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Intern — Forthify Technologies</CardTitle>
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
                  Contributed to an <strong>AI Chatbot</strong> project using Langchain, OpenAI, Gemini, and MongoDB Query Tool.
                </li>
                <li>
                  Migrated website from WordPress to <strong>Next.js</strong>, reducing page load times by <strong>20%</strong> and lowering maintenance overhead.
                </li>
                <li>
                  Developed & deployed <strong>Imaginur</strong>, an image compression web app (.NET + HTML) — reduces file sizes by <strong>up to 80%</strong>.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Intern Full-Stack Developer — A Serious AI Sdn Bhd</CardTitle>
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
                  Developed ERP system <strong>SuDUAI</strong> using Vue.js, TypeScript, Node.js, Express, Prisma ORM & PostgreSQL.
                </li>
                <li>
                  Implemented <strong>AWS S3</strong> for file management across <strong>12 modules</strong> and integrated third-party SQL systems for full data synchronization.
                </li>
                <li>
                  Worked in <strong>Agile</strong> environment with sprint planning, retrospectives & daily stand-ups.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Extracurriculars Section */}
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Extracurriculars</h2>
        <MobileCardContainer>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">PSU-UM COM SCI Reciprocal Mobility Program 2025, Hatyai</h3>
              <p className="text-sm text-muted-foreground mb-2">Faculty of Science, Prince of Songkla University</p>
              <p className="text-sm">
                Selected as one of <strong>20 students</strong> to collaborate with Prince of Songkla University on computer science modules.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Research Mobility Network, UNRAM Lombok</h3>
              <p className="text-sm text-muted-foreground mb-2">Electrical Engineering Dept and Informatics Engineering, Universitas Mataram</p>
              <p className="text-sm">
                Selected as one of <strong>20 students</strong> for international research collaboration on IoT-based smart agriculture systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">SEGTA 2025, UNAIR Surabaya</h3>
              <p className="text-sm text-muted-foreground mb-2">SUSTAINABLE ENERGY AND GREEN TECHNOLOGY APPLICATIONS, Universitas Airlangga</p>
              <p className="text-sm">
                Selected as one of <strong>50+ Malaysian participants</strong>. Collaborated with students from <strong>5 countries</strong> on sustainable technology and renewable energy research.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">GLOBE@UM Programme</h3>
              <p className="text-sm text-muted-foreground mb-2">Global Learning & Overseas Bound Experience</p>
              <p className="text-sm">
                Facilitated cultural exchange for <strong>20+ Indonesian students</strong>, organizing activities and technical workshops over <strong>5 days</strong>.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Programming League National 2024</h3>
              <p className="text-sm text-muted-foreground mb-2">Logistic Committee</p>
              <p className="text-sm">
                Led logistics for <strong>200+ participants</strong> from <strong>5+ universities</strong> across Malaysia.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">UM to UI Short Course 2024</h3>
              <p className="text-sm text-muted-foreground mb-2">Universitas Indonesia Short Course on Sustainable IT</p>
              <p className="text-sm">
                Represented Universiti Malaya as one of <strong>20 selected students</strong> for international exchange on sustainable IT solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">FCSIT Deans Cup 2023</h3>
              <p className="text-sm text-muted-foreground mb-2">Contest Protocol Committee</p>
              <p className="text-sm">
                Managed contest protocols for <strong>400+ participants</strong> across <strong>10 competitions</strong>.
              </p>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Achievements Section */}
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Achievements</h2>
        <MobileCardContainer>
          <Card>
            <CardContent className="pt-6">
              <p><strong>Dean&apos;s List Award</strong></p>
              <p>Universiti Malaya</p>
              <p className="text-sm mt-2">
                Recognized in <strong>Semester 4, 6 & 7</strong> for maintaining GPA above <strong>3.75</strong>.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p><strong>Preliminary Round</strong></p>
              <p>PayHack 2025</p>
              <p className="text-sm mt-2">
                Advanced to preliminary round in this national fintech hackathon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p><strong>Preliminary Round</strong></p>
              <p>UMHackathon 2025</p>
              <p className="text-sm mt-2">
                Qualified for preliminary round. Developed alpha trading strategy using backtesting frameworks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p><strong>Shortlisted Top 10 IPT Category</strong></p>
              <p>MyRapid Bus X UTM Data Hackathon 2023</p>
              <p className="text-sm mt-2">
                Top 10 placement among <strong>300+ participants</strong> from <strong>20+ universities</strong>. Developed smart transportation route optimization solution.
              </p>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>

      {/* Reference Section */}
      <section className="container px-4 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Reference</h2>
        <MobileCardContainer>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">PROF. TS. DR. NOR BADRUL ANUAR BIN JUMA&apos;AT</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Professor</strong></p>
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
              <p><strong>Senior IT Business Analyst</strong></p>
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
