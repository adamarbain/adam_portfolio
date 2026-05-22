"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileCardContainer } from "@/components/ui/mobile-card-container"
import { Github, ExternalLink, Apple } from "lucide-react"
import Image from "next/image"

function ProjectImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = { current: null as HTMLDivElement | null }
  const touchStartRef = { current: null as { x: number; time: number } | null }
  const isDraggingRef = { current: false }

  const images = [
    { src: "/drone4dengueAdmin.png", alt: "Drone4Dengue Admin Website", width: 800, height: 400, isMobile: false },
    { src: "/dengueEyeMobileApp.png", alt: "DengueEye Mobile App", width: 200, height: 400, isMobile: true },
    { src: "/predictionAccuracy.png", alt: "Drone4Dengue Prediction Accuracy", width: 800, height: 400, isMobile: false },
    { src: "/dengueEyeMobile.png", alt: "DengueEye Mobile App Dengue Cases", width: 200, height: 400, isMobile: true },
  ]

  const snapToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const clamped = Math.max(0, Math.min(index, images.length - 1))
    scrollContainerRef.current.scrollTo({
      left: clamped * scrollContainerRef.current.clientWidth,
      behavior: "smooth",
    })
    setCurrentIndex(clamped)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, time: Date.now() }
    isDraggingRef.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !isDraggingRef.current) return
    isDraggingRef.current = false
    const deltaX = touchStartRef.current.x - e.changedTouches[0].clientX
    const elapsed = Date.now() - touchStartRef.current.time
    const velocity = Math.abs(deltaX) / elapsed
    if (Math.abs(deltaX) > 50 || velocity > 0.3) {
      snapToIndex(deltaX > 0 ? currentIndex + 1 : currentIndex - 1)
    } else {
      snapToIndex(currentIndex)
    }
    touchStartRef.current = null
  }

  const handleScroll = () => {
    if (scrollContainerRef.current && !isDraggingRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      setCurrentIndex(Math.round(scrollLeft / clientWidth))
    }
  }

  return (
    <div>
      <div
        ref={(el) => { scrollContainerRef.current = el }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 mobile-carousel"
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
                  ? "w-auto h-auto max-h-[350px] md:max-h-[450px] border border-black"
                  : "w-full h-auto max-w-full"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => snapToIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-8">
      <section className="container px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold md:text-4xl mb-6">Projects</h1>
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
                <li>Built AI-powered system integrating drone imagery, ML & meteorological data to detect mosquito breeding sites and forecast dengue outbreaks with <strong>&gt;80% accuracy</strong>.</li>
                <li>Cross-platform solution: <strong>Next.js, Node.js, Python, Firebase, TensorFlow & React Native</strong> with real-time risk mapping.</li>
                <li>Integrated <strong>Flask, YOLOv8, Firebase Storage & GeoCode API</strong> for cloud-based drone image management.</li>
                <li>Developed <strong>168 test cases</strong> across 25 features using Equivalence Partitioning, GUI Testing, unit, integration & system testing.</li>
              </ul>
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

          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">Imaginur - AI-Powered Image Compression Tool (Company Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src="/imaginur.png" alt="Imaginur" width={400} height={200} className="rounded-lg object-cover" />
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
                <li>Image compression web app — reduces file sizes by <strong>up to 80%</strong> while maintaining visual quality.</li>
                <li>Built with <strong>.NET</strong> backend and responsive HTML/CSS frontend, deployed on <strong>Vercel</strong>.</li>
              </ul>
              <div className="flex justify-center mt-4">
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
                <Image src="/yuran-pakatan.png" alt="Yuran Pakatan" width={400} height={200} className="rounded-lg object-cover" />
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
                <li>Digital payment & membership management system using Vue.js, Node.js, Express, and PrimeVue.</li>
                <li>Role-based auth with <strong>3 user tiers</strong> and granular permissions.</li>
                <li>Real-time analytics dashboard for streamlined fee collection.</li>
              </ul>
              <div className="flex justify-center mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://yuran-pakatan.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">SuduAI ERP Solutions (Company Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src="/suduai.png" alt="SuduAI ERP Solutions" width={400} height={200} className="rounded-lg object-cover" />
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
                <li>Contributed to <strong>SuDUAI ERP</strong> using Vue.js, TypeScript, Node.js, Express, Prisma ORM & PostgreSQL.</li>
                <li>Implemented <strong>AWS S3 bucket services</strong> across 12 modules for file management.</li>
                <li>Integrated third-party SQL Financial Accounting systems for seamless data synchronization.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">StitchMart Web Application (University Project)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src="/stitchmart.png" alt="StitchMart Web Application" width={400} height={300} className="rounded-lg object-cover" />
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
                <li>Community embroidery business app built with HTML, CSS, JS, Node.js & React.js.</li>
                <li>Real-time notifications and analytics dashboard for order tracking.</li>
                <li>Final group assignment for Web Programming Class — <strong>Grade A</strong>.</li>
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
                <li>Mobile app providing support & resources for child abuse victims — emergency contacts, educational content & reporting mechanisms.</li>
                <li>Secure data encryption and anonymous reporting for <strong>100% user privacy</strong>.</li>
                <li>Final group assignment for Mobile Application Development — <strong>Grade A</strong>.</li>
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
                <li>Virtual environment modeled as a sub-tropical island using advanced data structures (HashMaps, ArrayLists, LinkedLists, Graphs).</li>
                <li>Achieved <strong>O(log n) search complexity</strong> for spatial queries.</li>
                <li>Recognized for innovative data structure usage — <strong>Grade A+</strong>.</li>
              </ul>
            </CardContent>
          </Card>
        </MobileCardContainer>
      </section>
    </div>
  )
}
