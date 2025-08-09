'use client'

import { motion } from 'framer-motion'
import { User, Target, Award, Zap } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    'Figma', 'Sketch', 'Adobe Creative Suite', 'InVision', 'Principle',
    'User Research', 'Usability Testing', 'Prototyping', 'Design Systems',
    'Design Thinking', 'Agile', 'User-Centered Design'
  ]

  const highlights = [
    {
      icon: Target,
      title: 'Foco no Usuário',
      description: 'Sempre coloco o usuário no centro de todas as decisões de design'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Comprometido com a excelência em cada pixel e interação'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Sempre explorando novas tecnologias e metodologias'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4"
              >
                <User size={16} />
                Sobre Mim
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6"
              >
                Designer apaixonado por criar experiências que fazem a diferença
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 mb-8 leading-relaxed"
            >
              Com mais de 5 anos de experiência em design de produtos digitais, 
              tenho trabalhado com startups e empresas estabelecidas para criar 
              soluções que não apenas resolvem problemas, mas também encantam usuários.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 mb-12 leading-relaxed"
            >
              Minha abordagem combina pesquisa rigorosa, design thinking e 
              prototipagem rápida para entregar produtos que realmente fazem 
              a diferença na vida das pessoas.
            </motion.p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">
                Skills & Ferramentas
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium border border-neutral-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-primary-50 rounded-2xl"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-neutral-600">Projetos Entregues</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-neutral-50 rounded-2xl"
              >
                <div className="text-3xl font-bold text-neutral-700 mb-2">5+</div>
                <div className="text-neutral-600">Anos de Experiência</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
