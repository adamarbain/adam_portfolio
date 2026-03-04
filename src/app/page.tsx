"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { VisitorCounter } from "@/components/visitor-counter"
import { Github, Mail, Phone, Linkedin, FileText, ExternalLink, ArrowRight, Apple } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-8">
      {/* Hero Section */}
      <section id="home" className="container px-4 md:px-8 flex flex-col items-center justify-center gap-4 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Adam Bin Arbain</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Software Engineer & Research Assistant at Universiti Malaya
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:hidden mt-1" />
            Seeking Full-Time Roles from May 2026
          </p>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/adamarbain" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
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
                      <Mail className="h-5 w-5" />
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
                      <Phone className="h-5 w-5" />
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
                      <Linkedin className="h-5 w-5" />
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
                      <FileText className="h-5 w-5" />
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

      {/* About Preview */}
      <section className="container px-4 md:px-8">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/profile-picture.png"
                alt="Adam Bin Arbain"
                width={300}
                height={300}
                className="rounded-lg object-cover w-48 h-48 md:w-full md:h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p>
                I&apos;m a <strong>Software Engineering graduate</strong> from <strong>Universiti Malaya</strong> (CGPA 3.57), 
                currently working as a <strong>Research Assistant</strong> deploying the Drone4Dengue system and publishing research. 
                I specialize in <strong>Full-Stack Development</strong> and <strong>AI-driven solutions</strong>.
              </p>
              <p className="mt-4">
                My mission is to build software that creates <strong>measurable impact</strong>—whether that&apos;s predicting 
                dengue outbreaks with <strong>&gt;80% accuracy</strong>, migrating legacy systems to cut load times by <strong>20%</strong>, 
                or implementing AWS S3 across <strong>12 ERP modules</strong>.
              </p>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects */}
      <section className="container px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Drone4Dengue */}
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-lg">Drone4Dengue & DengueEye</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image
                  src="/drone4dengueAdmin.png"
                  alt="Drone4Dengue Admin Website"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                <Badge variant="skill">Next.js</Badge>
                <Badge variant="skill">React Native</Badge>
                <Badge variant="skill">TensorFlow</Badge>
                <Badge variant="skill">Firebase</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered dengue outbreak prediction with <strong>&gt;80% accuracy</strong> integrating drone imagery, ML & meteorological data.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://testflight.apple.com/join/k5b9kkUJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    Try on TestFlight
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Imaginur */}
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-lg">Imaginur</CardTitle>
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
              <div className="mb-3 flex flex-wrap gap-1">
                <Badge variant="skill">.NET</Badge>
                <Badge variant="skill">HTML/CSS</Badge>
                <Badge variant="skill">JavaScript</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Image compression web app — reduces file sizes by <strong>up to 80%</strong> while maintaining visual quality.
              </p>
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

          {/* Yuran Pakatan */}
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-lg">Yuran Pakatan</CardTitle>
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
              <div className="mb-3 flex flex-wrap gap-1">
                <Badge variant="skill">Vue.js</Badge>
                <Badge variant="skill">Node.js</Badge>
                <Badge variant="skill">PostgreSQL</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Digital payment & membership management system with role-based auth and real-time analytics.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://yuran-pakatan.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container px-4 md:px-8">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold md:text-3xl mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              I&apos;m seeking full-time Software Engineering roles starting May 2026. 
              Reach out to discuss opportunities or collaborations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/Adam-bin-Arbain-Resume.pdf" download className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
