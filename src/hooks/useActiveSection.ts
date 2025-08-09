import { useState, useEffect } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'sobre', 'projetos', 'processo', 'contato']
    
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px', // Considera uma seção ativa quando está 20% visível no topo
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observa todas as seções
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return activeSection
}
