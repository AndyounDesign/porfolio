'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, PenTool, Code, Users, CheckCircle } from 'lucide-react'

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Pesquisa & Descoberta',
      description: 'Entendo profundamente o problema, contexto e necessidades dos usuários através de pesquisas qualitativas e quantitativas.',
      details: ['User Interviews', 'Competitive Analysis', 'User Personas', 'Journey Mapping']
    },
    {
      icon: Lightbulb,
      title: 'Ideação & Estratégia',
      description: 'Desenvolvo estratégias e conceitos baseados nos insights da pesquisa, priorizando soluções que resolvem problemas reais.',
      details: ['Problem Definition', 'Solution Concepts', 'Information Architecture', 'User Flows']
    },
    {
      icon: PenTool,
      title: 'Design & Prototipagem',
      description: 'Crio wireframes, mockups e protótipos interativos para validar ideias e refinar a experiência do usuário.',
      details: ['Wireframing', 'Visual Design', 'Interactive Prototypes', 'Design System']
    },
    {
      icon: Users,
      title: 'Teste & Validação',
      description: 'Testo as soluções com usuários reais para identificar problemas e oportunidades de melhoria.',
      details: ['Usability Testing', 'User Feedback', 'Iteration', 'A/B Testing']
    },
    {
      icon: Code,
      title: 'Implementação',
      description: 'Trabalho em estreita colaboração com desenvolvedores para garantir fidelidade ao design e qualidade da implementação.',
      details: ['Design Handoff', 'Developer Collaboration', 'Quality Assurance', 'Launch Support']
    },
    {
      icon: CheckCircle,
      title: 'Análise & Otimização',
      description: 'Monitoro métricas de uso e feedback contínuo para identificar oportunidades de melhoria e otimização.',
      details: ['Analytics Review', 'User Feedback', 'Continuous Improvement', 'Performance Metrics']
    }
  ]

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
            Meu Processo de Design
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Uma abordagem sistemática e centrada no usuário que garante 
            soluções eficazes e experiências memoráveis.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Details */}
                <div className="space-y-2">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-neutral-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-6">
              Filosofia de Design
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Acredito que o design deve ser invisível - quando feito corretamente, 
              os usuários não percebem que estão usando algo "desenhado". 
              Eles simplesmente conseguem fazer o que precisam de forma intuitiva e prazerosa.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-neutral-600">Centrado no Usuário</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Iterativo</div>
                <div className="text-neutral-600">Processo de Refinamento</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Baseado em Dados</div>
                <div className="text-neutral-600">Decisões Informadas</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
