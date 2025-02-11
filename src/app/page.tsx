import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section id="home" className="container flex flex-col items-center justify-center gap-4 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I'm a full-stack developer specializing in building exceptional digital experiences.
          </p>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                    <a href="mailto:your@email.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h2 className="text-2xl font-bold md:text-3xl">About Me</h2>
        <Card className="mt-8">
          <CardContent className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground">
                I'm a passionate developer with experience in building web applications using modern technologies. I
                love creating intuitive and performant user experiences.
              </p>
              <p className="text-muted-foreground">
                My tech stack includes React, Next.js, TypeScript, and Tailwind CSS. I'm always learning and exploring
                new technologies to stay up-to-date with the latest trends.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/placeholder.svg" alt="About me image" fill className="object-cover" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt={`Project ${project}`}
                  width={500}
                  height={280}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Project {project}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Description of project {project}. Explain what the project does and what technologies were used.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I'm currently open for freelance opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>
            <Button className="mt-4">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

