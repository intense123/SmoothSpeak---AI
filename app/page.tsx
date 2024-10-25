'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Play, Menu, X, ChevronDown, ChevronUp, Linkedin, Mail, Mic, Cpu, Volume2, Info, Smile, Sliders } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  const [activeTab, setActiveTab] = useState('before')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [randomFact, setRandomFact] = useState('')

  const problems = [
    'Struggling to be understood in online meetings?',
    'Avoiding virtual interactions due to speech challenges?',
    'Missing out on professional opportunities because of communication barriers?'
  ]

  const challengeSummary = [
    '1 in 12 children and nearly 7.6% of adults experience speech disorders.',
    'Speech disorders can limit job opportunities and create barriers to career advancement.',
    'These challenges have increased with the rise of remote work and virtual communication.',
    'Clear communication in online settings can feel overwhelming for many with speech disorders.'
  ]

  const beforeAfterData = {
    before: {
      text: "I'm often asked to repeat myself.",
      waveform: [0.2, 0.5, 0.3, 0.8, 0.4, 0.6, 0.2, 0.7, 0.5, 0.3],
      clarity: 40
    },
    after: {
      text: "I feel more confident speaking up.",
      waveform: [0.4, 0.6, 0.5, 0.7, 0.6, 0.8, 0.5, 0.9, 0.7, 0.6],
      clarity: 85
    }
  }

  const workflowSteps = [
    { icon: Mic, title: "Baseline Voice Capture", description: "We start by understanding your unique speech patterns, creating a personalized voice profile." },
    { icon: Cpu, title: "Real-Time Speech Analysis", description: "During conversations, SmoothSpeak AI analyzes your speech instantly, detecting issues like nasality, breathiness, and tone changes." },
    { icon: Volume2, title: "Live Voice Refinement", description: "Our AI refines your voice in real time, ensuring you sound clear, composed, and professional on any platform." },
    { icon: Info, title: "Post-Call Insights", description: "After each session, SmoothSpeak provides feedback on clarity and tone, helping you track improvements over time." }
  ]

  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Speech Enhancement",
      description: "Provides real-time clarity, tone refinement, and emotional control tailored to your needs."
    },
    {
      icon: Smile,
      title: "Emotion Modulation",
      description: "Adjusts vocal tone based on emotional cues to maintain a professional sound, no matter the setting."
    },
    {
      icon: Sliders,
      title: "Personalized Voice Profiles",
      description: "Customize your voice settings with options like \"professional,\" \"friendly,\" or \"calm.\""
    }
  ]

  const speechDisorderFacts = [
    "Apraxia of speech is a motor speech disorder that affects the brain's ability to coordinate the complex movements needed for speech.",
    "Dysarthria is a condition characterized by poor articulation of phonemes due to neurological injury of the motor component of the speech systems.",
    "Stuttering is a fluency disorder that affects the flow of speech, often characterized by repetitions, prolongations, or blocks in speech.",
    "Voice modulation challenges can affect the pitch, volume, and quality of a person's voice, impacting their ability to express emotions effectively.",
    "Speech disorders can significantly impact an individual's confidence and willingness to participate in social and professional interactions.",
    "The rise of remote work has increased the importance of clear communication in online settings, potentially exacerbating challenges for those with speech disorders.",
    "Early intervention and consistent practice can lead to significant improvements in speech clarity and confidence for many individuals with speech disorders.",
    "Technological aids, like SmoothSpeak AI, are becoming increasingly important in helping individuals with speech disorders navigate professional and social environments.",
    "Speech disorders can vary widely in their manifestation and severity, requiring personalized approaches to treatment and support.",
    "The emotional impact of speech disorders is often as significant as the physical challenges, highlighting the need for holistic support systems."
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', { firstName, lastName, email })
    alert('Thank you for joining our waitlist!')
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * speechDisorderFacts.length)
    setRandomFact(speechDisorderFacts[randomIndex])
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>SmoothSpeak AI</title>
      </Head>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_A_sleek__modern_design_incorporating_a_speech_bubble_and_a_waveform_or_sound_wave_to_represe-removebg-preview-yfVuVrGPwhwZpAM3eiyphKDzt5uasT.png" 
                alt="SmoothSpeak AI Logo" 
                width={50} 
                height={50} 
                className="mr-2"
              />
              <span className="text-2xl font-bold">SmoothSpeak AI</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex flex-wrap justify-center space-x-4">
                <li><a href="#challenge" className="hover:text-[#9ACD32] transition duration-300">The Challenge</a></li>
                <li><a href="#how-it-works" className="hover:text-[#9ACD32] transition duration-300">How It Works</a></li>
                <li><a href="#features" className="hover:text-[#9ACD32] transition duration-300">Features</a></li>
                <li><a href="#founder" className="hover:text-[#9ACD32] transition duration-300">Founder</a></li>
                <li><a href="#waitlist" className="hover:text-[#9ACD32] transition duration-300">Join Waitlist</a></li>
              </ul>
            </nav>
          </div>
          <button 
            className="md:hidden absolute top-4 right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2"><a href="#challenge" className="hover:text-[#9ACD32] transition duration-300">The Challenge</a></li>
              <li className="py-2"><a href="#how-it-works" className="hover:text-[#9ACD32] transition duration-300">How It Works</a></li>
              <li className="py-2"><a href="#features" className="hover:text-[#9ACD32] transition duration-300">Features</a></li>
              <li className="py-2"><a href="#founder" className="hover:text-[#9ACD32] transition duration-300">Founder</a></li>
              <li className="py-2"><a href="#waitlist" className="hover:text-[#9ACD32] transition duration-300">Join Waitlist</a></li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empower Your Voice in Every Online Conversation
              </h1>
              <p className="text-lg md:text-xl mb-8">
                SmoothSpeak AI is an AI-powered extension designed to help individuals with speech disorders sound clear, composed, and confident in every online meeting and call—whether on Zoom, Meet, Teams, or other platforms.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#9ACD32] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 border-2 border-gray-700 shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-pink-200 text-pink-800 p-2 rounded-lg inline-block shadow-sm">
                      Unlock Clear, Confident Communication in Real Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Challenge We Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Statistics</h3>
              <ul className="list-disc pl-5 space-y-2">
                {challengeSummary.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Does This Sound Like You?</h3>
              <div className="grid gap-4">
                {problems.map((problem, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-pink-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="text-pink-800 font-semibold">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How SmoothSpeak AI Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                  <step.icon className="w-12 h-12 mb-4 text-[#9ACD32]" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Features Designed with You in Mind</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#9ACD32] text-white">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="before-after" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">See the Difference</h2>
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-3 rounded-l-full font-semibold transition duration-300 ${activeTab === 'before' ? 'bg-[#9ACD32] text-white' : 'bg-gray-200 text-gray-800'} border-2 border-gray-700`}
              onClick={() => setActiveTab('before')}
            >
              Before SmoothSpeak AI
            </button>
            <button
              className={`px-6 py-3 rounded-r-full font-semibold transition duration-300 ${activeTab === 'after' ? 'bg-[#9ACD32] text-white' :    'bg-gray-200 text-gray-800'} border-2 border-gray-700`}
              onClick={() => setActiveTab('after')}
            >
              After SmoothSpeak AI
            </button>
          </div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-6">
                <div className="text-lg font-semibold">
                  "{activeTab === 'before' ? beforeAfterData.before.text : beforeAfterData.after.text}"
                </div>
                <div className="flex items-center space-x-2">
                  {(activeTab === 'before' ? beforeAfterData.before.waveform : beforeAfterData.after.waveform).map((value, index) => (
                    <div
                      key={index}
                      className="bg-[#9ACD32] rounded"
                      style={{
                        height: `${value * 50}px`,
                        width: '8px'
                      }}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Clarity Score</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#9ACD32] h-2.5 rounded-full"
                      style={{
                        width: `${activeTab === 'before' ? beforeAfterData.before.clarity : beforeAfterData.after.clarity}%`
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold">
                    {activeTab === 'before' ? beforeAfterData.before.clarity : beforeAfterData.after.clarity}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="founder" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Reza Abdullah</h3>
              <h4 className="text-xl text-gray-600 mb-4">Founder & Visionary Behind SmoothSpeak AI</h4>
              <p className="text-lg mb-6">
                As a tech innovator passionate about creating inclusive solutions, Reza Abdullah combines expertise in AI, IoT, and mobile development to tackle real-world challenges. With a background that spans Huawei National ICT Champion 2023, Techkriti runner-up, and the esteemed title of Moonshot Young Leader 2024, Reza has built a strong reputation for addressing issues with cutting-edge technology.
              </p>
              <p className="text-lg mb-6">
                His vision for SmoothSpeak AI comes from personal observation and deep empathy for individuals with speech disorders, inspired by a desire to enable them to lead a confident, judgment-free life in the digital world.
              </p>
              <blockquote className="italic text-xl text-gray-700 border-l-4 border-[#9ACD32] pl-4 mb-6">
                "I believe technology should empower everyone, and SmoothSpeak AI is the result of that belief—it's designed to amplify the voices that need to be heard."
              </blockquote>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reza_Abdullah1_-aPMNB62HKY0H4vQCyjuOyep8RKI8Bp.jpg" 
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  alt="Reza Abdullah" 
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.linkedin.com/in/reza-abd11/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#9ACD32] transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn profile</span>
                </a>
                <a href="mailto:reza_abdullah@icloud.com" className="text-gray-600 hover:text-[#9ACD32] transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email address</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn More About Speech Disorders</h2>
          <div className="text-center">
            <button
              onClick={generateRandomFact}
              className="bg-[#9ACD32] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 border-2 border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center mx-auto"
            >
              <Info className="w-5 h-5 mr-2" />
              Generate Random Fact
            </button>
          </div>
          {randomFact && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="text-lg text-center">{randomFact}</p>
            </motion.div>
          )}
        </section>

        <section id="waitlist" className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9ACD32] to-blue-400 opacity-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%239ACD3222%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Join Our Waitlist</h2>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#9ACD32] rounded-bl-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 rounded-tr-full opacity-20"></div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring focus:ring-[#9ACD32] focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring focus:ring-[#9ACD32] focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring focus:ring-[#9ACD32] focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#9ACD32] to-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:from-[#8BBF2F] hover:to-blue-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-opacity-50"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
            <div className="mt-8 text-center text-gray-600">
              <p>Be among the first to experience the future of clear communication.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_A_sleek__modern_design_incorporating_a_speech_bubble_and_a_waveform_or_sound_wave_to_represe-removebg-preview-yfVuVrGPwhwZpAM3eiyphKDzt5uasT.png" 
                  alt="SmoothSpeak AI Logo" 
                  width={30} 
                  height={30} 
                  className="mr-2"
                />
                SmoothSpeak AI
              </h3>
              <p>Empowering clear communication for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#9ACD32] transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-[#9ACD32] transition duration-300">About</a></li>
                <li><a href="#" className="hover:text-[#9ACD32] transition duration-300">Services</a></li>
                <li><a href="#" className="hover:text-[#9ACD32] transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 SmoothSpeak AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}