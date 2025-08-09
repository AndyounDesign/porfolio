# Portfolio - Product Designer

Um portfolio elegante e minimalista para Product Designers, inspirado no design da Apple com foco em experiência do usuário e apresentação profissional de projetos.

## 🎨 Características

- **Design Minimalista**: Interface limpa e elegante inspirada na Apple
- **Responsivo**: Otimizado para todos os dispositivos
- **Animações Suaves**: Transições e micro-interações com Framer Motion
- **Design System Consistente**: Paleta de cores e componentes padronizados
- **Performance Otimizada**: Construído com Next.js 15 e TypeScript
- **SEO Ready**: Metadados e estrutura otimizados para busca

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para código robusto
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones elegantes e consistentes

## 🎯 Estrutura do Portfolio

### Seções Principais

1. **Hero Section** - Apresentação impactante com CTA
2. **Sobre** - Informações pessoais, skills e experiência
3. **Projetos** - Grid de 6 projetos principais com case studies
4. **Processo** - Metodologia de design e filosofia
5. **Contato** - Formulário e informações de contato

### Componentes

- `Header` - Navegação responsiva com menu mobile
- `Footer` - Links rápidos e informações de contato
- `HeroSection` - Seção principal com apresentação
- `AboutSection` - Informações sobre o designer
- `ProjectsSection` - Grid de projetos
- `ProcessSection` - Metodologia de trabalho
- `ContactSection` - Formulário de contato

## 🎨 Design System

### Cores

- **Primary**: `#2f99f6` (Azul vibrante)
- **Neutral**: Escala de cinzas para textos e backgrounds
- **Semânticas**: Cores para estados e feedback

### Tipografia

- **Fonte Principal**: Inter (Google Fonts)
- **Hierarquia**: Sistema de tamanhos escalonados
- **Legibilidade**: Otimizada para leitura digital

### Espaçamento

- **Base Unit**: 4px
- **Scale**: Sistema consistente de espaçamentos
- **Responsivo**: Adaptação para diferentes breakpoints

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Layout adaptativo com CSS Grid e Flexbox

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Personalização

1. **Conteúdo**: Edite os componentes em `src/components/sections/`
2. **Cores**: Modifique as cores no `tailwind.config.ts`
3. **Projetos**: Atualize o array de projetos em `ProjectsSection.tsx`
4. **Informações**: Personalize dados pessoais nos componentes
5. **Imagens**: Substitua os placeholders por suas imagens reais

### Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/             # Componentes de layout
│   ├── sections/           # Seções do portfolio
│   └── ui/                 # Componentes de interface
├── lib/                    # Utilitários e helpers
└── types/                  # Definições de tipos TypeScript
```

## 📝 Personalização de Conteúdo

### Projetos

Edite o array `projects` em `ProjectsSection.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    category: 'Categoria',
    description: 'Descrição do projeto...',
    image: '/caminho/para/imagem.jpg',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    results: 'Resultados quantificáveis'
  }
  // ... mais projetos
]
```

### Informações Pessoais

Atualize os dados em:
- `AboutSection.tsx` - Skills, experiência e filosofia
- `ContactSection.tsx` - Informações de contato
- `Header.tsx` - Nome/logo do portfolio

### Cores e Estilo

Modifique o design system em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#2f99f6', // Sua cor principal
    // ... outras variações
  }
}
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples e rápido
- **AWS/GCP**: Para projetos empresariais

## 📊 Performance

- **Lighthouse Score**: Otimizado para performance
- **Core Web Vitals**: Métricas de experiência do usuário
- **SEO**: Estrutura semântica e metadados otimizados
- **Acessibilidade**: ARIA labels e navegação por teclado

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Entre em contato através do portfolio

---

**Desenvolvido com ❤️ para Product Designers que querem se destacar**
