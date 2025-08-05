


"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Code,
  Palette,
  Globe,
  Zap,
  Target,
  Award,
  Phone,
  MessageCircle,
  Facebook,
  ArrowRight,
  CheckCircle,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Nest.js", category: "Backend" },
    { name: "Go", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "C#", category: "Backend" },
    { name: ".NET Core", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Spring", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Flutter", category: "Mobile" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "REST APIs", category: "API" },
  ]

  const projects = [
    {
      title: "Wholesale Expressions",
      description:
        "Luxury e-commerce platform with royal rewards system, featuring premium fashion and jewelry collections with sophisticated dark theme design.",
      tech: ["Next.js", "Supabase", "Socket.io", "AI Chatbot Gemini", "Shadcn", "Stripe"],
      image: "/images/desk.PNG",
      github: "#",
      live: "https://www.wholesalexpressions.com/",
      featured: true,
    },
    {
      title: "Borsa Connect",
      description:
        "Digital and financial access platform for Ethiopia, managing agents and driving impact across village hubs with comprehensive agent management tools.",
      tech: ["Cloud Vision API", "React.js", "Socket.io", "Next.js", "MongoDB", "Node.js"],
      image: "/images/borsa.PNG",
      github: "#",
      live: "http://agent.borsa.et/",
      featured: true,
    },
    {
      title: "Pazimo Event Platform",
      description:
        "Comprehensive event ticketing platform with real-time analytics, revenue tracking, and event management dashboard for organizers.",
      tech: ["Next.js", "Chapa", "Zoho Mail", "Google Authenticator", "OTP", "Socket.io"],
      image: "/images/pazimo.PNG",
      github: "#",
      live: "https://pazimo.com/",
      featured: true,
    },
    {
      title: "Etera Portal",
      description:
        "Modern authentication portal with clean UI design, featuring secure login functionality and user-friendly interface with isometric illustrations.",
      tech: ["Vue.js", "Laravel", "MySQL"],
      image: "/images/etera.PNG",
      github: "#",
      live: "https://portal.eteraet.com/",
    },
    {
      title: "HRM Dashboard",
      description:
        "Comprehensive Human Resource Management system with employee tracking, analytics, holiday management, and detailed reporting capabilities.",
      tech: ["Laravel", "MySQL"],
      image: "/images/hrm.PNG",
      github: "https://github.com/unknown-yfk/AIS_amazing_hrm/tree/master",
      live: "#",
    },
    {
      title: "Nomo Cashback Platform",
      description:
        "Ukrainian cryptocurrency platform featuring digital mining rewards, global events, and a comprehensive prize system with 1,000,000 NCoin fund.",
      tech: ["Next.js", "Supabase", "Cryptocurrency", "Web3", "Blockchain"],
      image: "/images/nomo casback.PNG",
      github: "#",
      live: "https://nomos-bksj.onrender.com/",
    },
    {
      title: "Maldo Pharmacy System",
      description:
        "Healthcare management platform with customer support integration, featuring user-friendly login system and dedicated support hotline for pharmacy operations.",
      tech: ["React.js", "React Bootstrap", "MongoDB", "Socket.io"],
      image: "/images/maldo.PNG",
      github: "#",
      live: "#",
    },
    {
      title: "InsureTecX Platform",
      description:
        "Modern insurance technology platform with comprehensive coverage solutions, featuring clean design and user-centric approach to insurance services.",
      tech: ["React.js", "React Bootstrap", "MongoDB", "Socket.io"],
      image: "/images/insure.PNG",
      github: "#",
      live: "#",
    },
    {
      title: "ERP System",
      description:
        "Enterprise Resource Planning system with comprehensive modules for inventory management, financial tracking, and business process automation.",
      tech: ["Spring Boot", "MySQL", "Java", "REST APIs"],
      image: "/images/dashboard_megasteel.jpeg",
      github: "#",
      live: "#",
    },
    {
      title: "ERPNext System",
      description:
        "Full ERPNext implementation with Accounting, CRM, Project Management, Asset Management, and Inventory modules. Features Italian Tax Agency API integration for e-invoices, OTP-based remote access, and RAID 1 data redundancy.",
      tech: ["ERPNext", "Docker", "Raspberry Pi", "Debian", "OTP"],
      image: "/images/erppw-4.png",
      github: "#",
      live: "https://sdc-gestione.duckdns.org/",
    },
  ]

  const experience = [
    {
      title: "DevOps Engineer",
      company: "SD Companies SRL - Italy",
      period: "Apr 2025 - Present",
      description:
        "Managing cloud infrastructure and CI/CD pipelines for Italian enterprise clients. Implementing containerization with Docker, orchestrating deployments with Kubernetes, and ensuring system reliability and scalability.",
      current: true,
    },
    {
      title: "Software Developer",
      company: "WSX (Remote) - United Kingdom",
      period: "Mar 2025 - Present",
      description:
        "Developing scalable web applications for UK-based clients using modern technologies including React, Next.js, and Node.js. Collaborating with international teams to deliver high-quality software solutions.",
      current: true,
    },
    {
      title: "Software Developer",
      company: "Prime Software",
      period: "Feb 2025 - Present",
      description:
        "Collaborating with product teams to develop responsive web applications using React, Next.js, and Nuxt.js for frontend, and Node.js, Express, and Laravel for backend.",
      current: true,
    },
    {
      title: "Front End Developer & Bot Developer",
      company: "BlockN (Remote) - Ukraine",
      period: "Feb 2025 - Present",
      description:
        "Built cashback web application with real-time transaction tracking, designed chatbot interface, and implemented dynamic rendering with performance optimization.",
      current: true,
    },
    {
      title: "Software Developer",
      company: "Elebat ICT Solutions",
      period: "Jan 2024 - Present",
      description:
        "Designed scalable web applications using MERN stack and Laravel, implemented authentication and role-based access control, managed deployments using Docker and Vercel.",
      current: true,
    },
    {
      title: "Software Developer",
      company: "Andinet ICT Solutions",
      period: "Feb 2022 - May 2023",
      description:
        "Developed responsive web applications using React, Next.js, and Nuxt.js. Created ERP modules including HRMS, accounting, and payroll systems with IoT integration.",
    },
    {
      title: "Web Application Developer",
      company: "Gibson School Systems",
      period: "Feb 2021 - Nov 2022",
      description:
        "Developed dynamic, responsive websites using PHP, Bootstrap, HTML5, CSS3, and JavaScript. Built custom CMS solutions and integrated third-party APIs.",
    },
  ]

  const achievements = [
    "4+ Years of Professional Experience",
    "20+ Successful Projects Delivered",
    "International Client Collaborations",
    "Full-Stack Development Expertise",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky pl-10 pr-10 top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Fikadu Taye
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

          
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pl-10 pr-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Available for new opportunities
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Fikadu Taye
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Senior Full Stack Developer with{" "}
                  <span className="font-semibold text-gray-900">4+ years of experience</span> crafting scalable,
                  high-performance web and mobile applications. Specialized in modern JavaScript frameworks, backend
                  technologies, and cloud solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="mailto:ftaye7485@gmail.com" className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Link href="https://github.com/unknown-yfk" className="flex items-center">
                    <Github className="mr-2 h-5 w-5" />
                    View Work
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Remote Available</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Image
                    src="/images/iage.jpeg"
                    alt="Fikadu Taye"
                    width={400}
                    height={400}
                    className="rounded-full object-scale-down shadow-2xl border-4 border-white aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 mb-8">
              <Target className="mr-2 h-4 w-4" />
              About Me
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              With over 4 years of experience in web development, I've collaborated with diverse companies to build
              scalable, user-focused applications. I'm passionate about clean code, innovative solutions, and delivering
              exceptional business value through technology.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Code,
                  title: "Clean Architecture",
                  description:
                    "Writing maintainable, scalable code following industry best practices and modern design patterns.",
                  color: "blue",
                },
                {
                  icon: Target,
                  title: "User Experience",
                  description:
                    "Creating intuitive, accessible interfaces that users love, with focus on performance and usability.",
                  color: "indigo",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  description:
                    "Optimizing applications for speed, efficiency, and scalability using cutting-edge technologies.",
                  color: "purple",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={index === 0 ? "mx-auto p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white w-fit mb-4" : index === 1 ? "mx-auto p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white w-fit mb-4" : "mx-auto p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white w-fit mb-4"}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm text-purple-700 mb-8">
              <Award className="mr-2 h-4 w-4" />
              Skills & Technologies
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12">
              Technologies and frameworks I use to build exceptional digital experiences
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700 mb-8">
                <Code className="mr-2 h-4 w-4" />
                Featured Projects
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Recent{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Work</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A curated selection of projects that demonstrate my technical skills and problem-solving abilities
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${
                    project.featured ? "ring-2 ring-blue-200" : ""
                  }`}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent"
                      >
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>

                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={project.live}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm text-indigo-700 mb-8">
                <Calendar className="mr-2 h-4 w-4" />
                Professional Journey
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Work{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>

              <p className="text-xl text-gray-600">
                My professional journey and key achievements in software development
              </p>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${
                    exp.current ? "ring-2 ring-green-200" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-700 border-green-200">Current</Badge>
                          )}
                        </div>
                        <CardDescription className="text-lg font-medium text-gray-700">{exp.company}</CardDescription>
                      </div>

                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        <Calendar className="mr-2 h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 mb-8">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Let's Work{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life and create something exceptional together.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "ftaye7485@gmail.com",
                  href: "mailto:ftaye7485@gmail.com",
                  color: "blue",
                },
                { icon: Phone, label: "Phone", value: "+251 969 064 548", href: "tel:+251969064548", color: "green" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "fikadu-taye-97195929a",
                  href: "https://www.linkedin.com/in/fikadu-taye-97195929a/",
                  color: "blue",
                },
                {
                  icon: MessageCircle,
                  label: "Telegram",
                  value: "@yeamft",
                  href: "https://t.me/yeamft",
                  color: "blue",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  value: "yeamft74",
                  href: "https://facebook.com/yeamft74",
                  color: "blue",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "unknown-yfk",
                  href: "https://github.com/unknown-yfk",
                  color: "gray",
                },
              ].map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className={`p-3 rounded-lg bg-${contact.color}-50 text-${contact.color}-600 group-hover:bg-${contact.color}-100 transition-colors duration-300`}
                  >
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contact.label}</p>
                    <p className="text-sm text-gray-600">{contact.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4"
              >
                <Link href="mailto:ftaye7485@gmail.com" className="flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-20" />

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">Fikadu Taye</span>
            </div>

            <p className="text-sm text-gray-600">© 2025 Fikadu Taye. All rights reserved.</p>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="#" className="hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-900 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
