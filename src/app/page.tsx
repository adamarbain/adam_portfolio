import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Mail, Phone, Linkedin, Download } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section id="home" className="container flex flex-col items-center justify-center gap-4 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Adam Bin Arbain</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Software Engineering student at Universiti Malaya
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
                    <a href="https://www.linkedin.com/in/adamarbain" target="_blank" rel="noopener noreferrer">
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
                      <Download className="h-4 w-4" />
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
                src="/profile-picture.jpg"
                alt="Adam Bin Arbain"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-muted-foreground">
                I am a third-year Software Engineering major at Universiti Malaya, passionate about software
                development. I am currently seeking a part-time opportunity in the Software Engineering domain to apply
                my skills and gain hands-on experience while continuing to broaden my knowledge in the IT industry.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Education</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>University of Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bachelor of Computer Science (Software Engineering)</p>
              <p>2022-Present</p>
              <p>CGPA: 3.41</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Centre for Foundation Studies in Science, University of Malaya | Kuala Lumpur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Foundation of Physical Sciences</p>
              <p>2021-2022</p>
              <p>CGPA: 3.66 (Muet: Band 4)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Languages and Skills</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Languages:</strong> Malay (Native Proficiency), English (Professional Proficiency)
              </li>
              <li>
                <strong>Programming Languages:</strong> Java, HTML/CSS/JS, Python, Assembly, C#, XML
              </li>
              <li>
                <strong>Software and Frameworks:</strong> Visual Studio Code, Node.js, React.js, MongoDB, Android
                Studio, SQL, Oracle, Packet Tracer, Docker, Prisma ORM, Vue.js, RESTful API, PostgreSQL, DBeaver, AWS S3
                Bucket
              </li>
              <li>
                <strong>Skills:</strong> CCNAv7 NetaCAD Certified (Cisco), Experienced in Software Modelling & SRS
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Experience</h2>
        <Card>
          <CardHeader>
            <CardTitle className="mb-2 font-bold">Intern Full-Stack Web Developer at A Serious AI Sdn Bhd</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">July 2024 – December 2024</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Developing an Enterprise Resource Planning (ERP) project named SuDUAI using Vue.js, TypeScript, Node.js,
                Express, Prisma ORM and PostgreSQL.
              </li>
              <li>
                Collaborated in agile Development environment, participating in sprint planning, retrospectives, and
                daily stand-ups to ensure timely delivery of tasks.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">SuduAI ERP Solutions (Company Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/suduai.png"
                alt="SuduAI ERP Solutions"
                width={400}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Contributed to the development of an Enterprise Resource Planning (ERP) system named SuDUAI,
                  leveraging Vue.js, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL to build a robust and
                  scalable platform.
                </li>
                <li>
                  Implemented AWS S3 bucket services for file storage and retrieval across multiple modules, enhancing
                  data management efficiency.
                </li>
                <li>
                  Worked on integrating third-party SQL systems (SQL Financial Accounting) to ensure seamless data
                  synchronization and optimized system performance.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">
                <a href="https://github.com/yumdmb/stitch-mart" target="_blank" rel="noopener noreferrer"/>
                StitchMart Web Application (University Project)
                </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/stitchmart.png"
                alt="StitchMart Web Application"
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developing a community app that focuses on embroidery businesses, offering a range of features to
                  streamline operations and enhance customer engagement using HTML, CSS, JS, NodeJS, ReactJS.
                </li>
                <li>
                  This project was submitted as my final group assignment for the Web Programming Class in July 2024.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">BeaconSafe Mobile Application (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <Image
                src="/path-to-beaconsafe-project-image.jpg"
                alt="BeaconSafe Mobile Application"
                width={400}
                height={200}
                className="rounded-lg object-cover mb-4"
              /> */}
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  An application that provides comprehensive support and resources for child abuse victims while
                  actively working to prevent child abuse using Android Studio involving coding in Java and XML.
                </li>
                <li>
                  This project was being submitted as my final group assignment for Mobile Application Development
                  class.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Virtual Development of JOJOLANDS (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <Image
                src="/path-to-jojoland-project-image.jpg"
                alt="Virtual Development of JOJOLANDS"
                width={400}
                height={200}
                className="rounded-lg object-cover mb-4"
              /> */}
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Collaborated in a team to design and implement "JOJOLands," a complex virtual environment modeled as a
                  sub-tropical island using advanced data structures.
                </li>
                <li>
                  Used Java, HashMaps, ArrayLists, LinkedLists, Graphs (Adjacency Lists), JSON for data handling and
                  storage.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Extracurriculars</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Programming League National 2024 - Logistic Committee, competition</li>
              <li>
                UM to UI (Universitas Indonesia) Short Course on Sustainable IT 2024 - Short Term Outbound Mobility
                Program
              </li>
              <li>FCSIT Dean's Cup 2023 - Contest Protocol Committee, competition</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Achievements</h2>
        <Card>
          <CardContent className="pt-6">
            <p>
              <strong>Shortlisted IPT Category</strong>
            </p>
            <p>Rapid Bus X UTM Data Hackathon 2023</p>
          </CardContent>
        </Card>
      </section>

      {/* Reference Section */}
      <section id="reference" className="container">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Reference</h2>
        <Card>
          <CardHeader>
            <CardTitle>Wan Muhammad Aqil bin Wan Harun</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Senior IT Business Analyst</p>
            <p>+6012081081</p>
            <p>whbaqil@gmail.com</p>
            <p className="mt-2">
              Wan Muhammad Aqil was my former Business Analyst in A Serious AI Sdn Bhd from July 2024 to December 2024
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

