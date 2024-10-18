/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone, Building, AlertTriangle, Pill, Watch, Video, Heart, Menu, ChevronDown, ArrowRight, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Image1 from '@/assets/img.jpg'

const Globe = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial color="#4B5563" wireframe />
    </Sphere>
  </Canvas>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center space-y-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-12 w-12 mb-4 text-primary" />
    <h3 className="text-xl font-bold text-center">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{description}</p>
  </motion.div>
)

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span>{displayText}</span>
}

export default function EnhancedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('users')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          section.classList.add('animate-fade-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed w-full z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <a className="flex items-center justify-center" href="#">
          <Smartphone className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold text-primary">Usaidizi AI</span>
        </a>
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-14 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col items-center justify-center space-y-8"
          >
            {['Features', 'Download', 'Volunteer', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <main className="flex-1 pt-14">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Globe />
          </div>
          <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-4"
              >
                <TypewriterEffect text="Empowering Accessibility Worldwide" />
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-300 md:text-xl mb-6"
              >
                Break barriers, connect communities, and navigate life with confidence. AccessAll: Your gateway to an inclusive world.
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-x-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full filter blur-3xl opacity-30"></div>
                <Image
                  src={Image1}
                  alt="AccessAll App Preview"
                  className="relative z-10 mx-auto rounded-2xl shadow-2xl"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a href="#features" className="flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors">
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </section>
        <section id="features" className="py-20 bg-white dark:bg-gray-900 skew-y-3">
          <div className="container px-4 md:px-6 -skew-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Innovative Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <FeatureCard icon={AlertTriangle} title="Emergency Services" description="Quick access to emergency assistance" />
              <FeatureCard icon={Pill} title="Medicine Marketplace" description="Buy and track your medications" />
              <FeatureCard icon={Building} title="3D Building Access" description="Navigate buildings with 3D landscapes" />
              <FeatureCard icon={AlertTriangle} title="Incident Reporting" description="Easily report and track incidents" />
              <FeatureCard icon={Smartphone} title="AI Medication Reminders" description="Never miss a dose with AI assistance" />
              <FeatureCard icon={Watch} title="Wearable Integration" description="Connect with your health devices" />
              <FeatureCard icon={Video} title="Telehealth Services" description="Meet doctors virtually" />
              <FeatureCard icon={Heart} title="Volunteer Network" description="Connect with caring volunteers" />
            </div>
          </div>
        </section>
        <section id="download" className="py-20 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 -skew-y-3 px-20">
          <div className="container px-4 md:px-6 skew-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience Accessibility Anywhere
                </h2>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
                  Our app brings a world of support to your fingertips. Download now and join the accessibility revolution.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    Download for iOS
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full filter blur-3xl opacity-30"></div>
                <Image
                  src={Image1}
                  alt="App preview"
                  className="relative z-10 mx-auto rounded-2xl shadow-2xl"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="ussd" className="py-20 bg-white dark:bg-gray-900">
          <div className="container  md:px-6 ">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-20">
            <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full filter blur-3xl opacity-30"></div>
                <Image
                  src={Image1}
                  alt="USSD Service Illustration"
                  className="relative z-10 mx-auto rounded-2xl shadow-2xl"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  No Smartphone? No Worries!
                </h2>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
                  AccessAll is available via USSD, ensuring everyone can benefit from our services, regardless of their device.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">Dial *123# to get started</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our USSD service provides access to emergency services, medication reminders, and volunteer support.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section id="volunteer" className="py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-20">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Be the Change
                </h2>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
                  Join our global community of volunteers and make a real difference in people's lives. Your skills and compassion can change the world.
                </p>
              </div>
              <div className="flex-1">
                <form className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Input id="skills" placeholder="Enter your skills" required />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    Sign Up to Volunteer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
              </TabsList>
              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Sarah M.</CardTitle>
                    <CardDescription>AccessAll User</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"AccessAll has been a game-changer for me. The 3D building navigation feature helps me confidently explore new places."</p>
                  </CardContent>
                
                </Card>
              </TabsContent>
              <TabsContent value="volunteers">
                <Card>
                  <CardHeader>
                    <CardTitle>John D.</CardTitle>
                    <CardDescription>AccessAll Volunteer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"Volunteering with AccessAll has been incredibly rewarding. I've met amazing people and made a real difference in their lives."</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Join the Accessibility Revolution?
            </h2>
            <p className="max-w-[600px] mx-auto text-xl mb-8">
              Whether you need support or want to offer it, AccessAll is your platform for creating a more inclusive world.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-white dark:bg-gray-900">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 AccessAll. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </a>
            <a className="text-sm hover:underline underline-offset-4" href="#">
              Accessibility Statement
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}