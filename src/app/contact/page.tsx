import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone, Linkedin, FileText, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-8">
      <section className="container px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold md:text-4xl mb-2">Get in Touch</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          I&apos;m currently employed as a <strong>Software Engineer at Exact Asia</strong> and available to provide software services and advice. 
          Whether you have an opportunity, a question, or just want to connect — I&apos;d love to hear from you.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:adamarbain2107@gmail.com" className="font-medium hover:underline">
                    adamarbain2107@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+60104587140" className="font-medium hover:underline">
                    +60 10-458 7140
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Kerinchi, Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links & Profiles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3" asChild>
                <a href="https://github.com/adamarbain" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub — @adamarbain
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3" asChild>
                <a href="https://www.linkedin.com/in/adam-arbain/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn — Adam Arbain
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3" asChild>
                <a href="/Adam-bin-Arbain-Resume.pdf" download>
                  <FileText className="h-5 w-5" />
                  Download Resume (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* References */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold md:text-3xl mb-6">References</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2 font-bold">PROF. TS. DR. NOR BADRUL ANUAR BIN JUMA&apos;AT</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Professor</strong></p>
                <p>+60379676436</p>
                <p>badrul@um.edu.my</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Former lecturer at Universiti Malaya (Oct 2022 – Feb 2026)
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
                <p className="mt-2 text-sm text-muted-foreground">
                  Former Business Analyst at A Serious AI Sdn Bhd (Jul – Dec 2024)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
