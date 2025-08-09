'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = memo(() => {
  // Memoize static data to prevent re-creation on re-renders
  const heroContent = useMemo(() => ({
    badge: {
      text: 'Product Designer & UX Researcher',
      icon: Sparkles
    },
    title: {
      main: 'Transformando ideias em',
      highlight: 'experiências digitais',
      ending: 'que inspiram'
    },
    subtitle: 'Especialista em criar soluções centradas no usuário, combinando design thinking com tecnologia para resolver problemas complexos de forma elegante e eficaz.',
    cta: {
      primary: { text: 'Ver Projetos', href: '#projetos' },
      secondary: { text: 'Vamos Conversar', href: '#contato' }
    }
  }), [])

  // Optimize animations with reduced motion support
  const scrollAnimation = useMemo(() => ({
    animate: { y: [0, 10, 0] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const }
  }), [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white">
        {/* Background Elements - Reduced blur for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-8"
          >
            <heroContent.badge.icon size={16} />
            {heroContent.badge.text}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight"
          >
            {heroContent.title.main}
            <span className="text-primary-500 block">{heroContent.title.highlight}</span>
            {heroContent.title.ending}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={heroContent.cta.primary.href}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {heroContent.cta.primary.text}
            </a>
            <a
              href={heroContent.cta.secondary.href}
              className="group px-8 py-4 border-2 border-neutral-300 text-neutral-700 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center gap-2 justify-center"
            >
              {heroContent.cta.secondary.text}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Scroll Indicator - Only animate if user hasn't reduced motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              {...scrollAnimation}
              className="text-neutral-400 cursor-pointer p-2 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection
