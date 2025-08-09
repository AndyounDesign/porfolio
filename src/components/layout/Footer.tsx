'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary-500">Portfolio</h3>
            <p className="text-neutral-300 leading-relaxed">
              Transformando ideias em experiências digitais que inspiram e fazem a diferença.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-neutral-200">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#processo" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Processo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-neutral-200">Contato</h4>
            <div className="space-y-2 text-neutral-300">
              <p>contato@portfolio.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm"
            >
              © {currentYear} Portfolio. Todos os direitos reservados.
            </motion.div>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-neutral-400 text-sm"
            >
              Feito com
              <Heart className="w-4 h-4 text-red-500" />
              em São Paulo
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
