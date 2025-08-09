'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import LazyImage from '@/components/ui/LazyImage'

const ProjectsSection = memo(() => {
  // Memoize projects data to prevent re-creation on re-renders
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'App de Finanças Pessoais',
      category: 'Mobile App',
      description: 'Redesign completo de um app de gestão financeira com foco em usabilidade e experiência do usuário.',
      image: '/api/placeholder/400/300',
      tags: ['UX Research', 'UI Design', 'Prototyping'],
      results: 'Aumento de 40% na retenção de usuários'
    },
    {
      id: 2,
      title: 'Dashboard Empresarial',
      category: 'Web App',
      description: 'Interface administrativa para gestão de dados empresariais com visualização avançada.',
      image: '/api/placeholder/400/300',
      tags: ['Dashboard Design', 'Data Visualization', 'Design System'],
      results: 'Redução de 60% no tempo de análise'
    },
    {
      id: 3,
      title: 'E-commerce Mobile',
      category: 'E-commerce',
      description: 'Experiência de compra otimizada para dispositivos móveis com checkout simplificado.',
      image: '/api/placeholder/400/300',
      tags: ['Mobile First', 'User Journey', 'Conversion'],
      results: 'Aumento de 25% nas vendas mobile'
    },
    {
      id: 4,
      title: 'App de Saúde Mental',
      category: 'Health Tech',
      description: 'Aplicativo para acompanhamento de bem-estar mental com interface empática e acessível.',
      image: '/api/placeholder/400/300',
      tags: ['Accessibility', 'Emotional Design', 'User Research'],
      results: '95% de satisfação dos usuários'
    },
    {
      id: 5,
      title: 'Sistema de Design',
      category: 'Design System',
      description: 'Biblioteca de componentes reutilizáveis para manter consistência em produtos digitais.',
      image: '/api/placeholder/400/300',
      tags: ['Design Tokens', 'Component Library', 'Documentation'],
      results: 'Redução de 70% no tempo de desenvolvimento'
    },
    {
      id: 6,
      title: 'App de Produtividade',
      category: 'Productivity',
      description: 'Ferramenta para organização de tarefas com interface intuitiva e funcionalidades avançadas.',
      image: '/api/placeholder/400/300',
      tags: ['Task Management', 'User Experience', 'Mobile Design'],
      results: 'Aumento de 35% na produtividade'
    }
  ], [])

  return (
    <section id="projetos" className="py-20 bg-neutral-50">
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
            Projetos Selecionados
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos, demonstrando diferentes 
            abordagens e soluções para desafios de design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image - Lazy Loaded */}
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-primary-600 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-600" />
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-4">
                  <p className="text-sm text-primary-600 font-semibold">
                    {project.results}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition-all duration-200 group-hover:bg-primary-50">
                  Ver Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
