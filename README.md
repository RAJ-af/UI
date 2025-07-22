# Homework Club - Student Educational Website

A modern, educational-themed React website designed specifically for students to enhance their learning experience with AI-powered assistance, organized study materials, and productivity tools.

## Features

### 🎨 Design & UI
- **Educational Theme**: Black & white design with red, blue, green, and yellow accent colors
- **Sketch-like Characters**: Storytelling visuals with hand-drawn student illustrations
- **Professional UI/UX**: Following modern design principles with dashed borders and notebook aesthetics
- **Responsive Design**: Works seamlessly across all devices
- **Interactive Animations**: Button taps, loading states, and splash screens

### 📚 Core Features
- **Home Page**: Welcoming landing page with features overview
- **Digital Library**: Upload, organize, and download PDF study materials
- **AI Assistant**: Get instant help with homework questions and explanations
- **Scan & Solve**: Take photos of problems and receive step-by-step solutions
- **Study Timer**: Pomodoro-style timer with progress tracking and streaks
- **WhatsApp Integration**: Join study groups and community discussions

### 🎯 Student-Focused Features
- **Welcome Modal**: First-time visitor onboarding experience
- **Tap Bubbles**: Interactive help tips throughout the interface
- **Progress Tracking**: Study streaks, session counts, and time management
- **Resource Sharing**: Collaborative learning environment
- **Mobile-Optimized**: Perfect for studying on phones and tablets

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom educational theme
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Build Tool**: Vite for fast development and building
- **Compatible**: Works in Termux + Vite environment

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development
\`\`\`bash
# Clone the repository
git clone <repository-url>
cd homework-club-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

### Termux Setup (Android)
\`\`\`bash
# Install Node.js in Termux
pkg install nodejs

# Navigate to project directory
cd homework-club-website

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer with contact info
│   ├── StudentCharacter.tsx  # Sketch-like character illustrations
│   ├── LoadingButton.tsx     # Animated button component
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Library.tsx     # PDF library management
│   ├── AskAI.tsx       # AI chat interface
│   ├── ScanDoubts.tsx  # Image scanning feature
│   ├── Timer.tsx       # Study timer and tracking
│   └── JoinGroup.tsx   # WhatsApp community page
├── lib/                # Utility functions
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
\`\`\`

## Key Features Explained

### Educational Theming
- Notebook-inspired color palette
- Dashed borders mimicking hand-drawn sketches
- Student character illustrations for storytelling
- Floating animations and interactive elements

### AI Integration Ready
- Chat interface for homework assistance
- Image processing for scan-and-solve functionality
- Simulated AI responses (ready for real API integration)

### Study Productivity Tools
- Pomodoro timer with customizable durations
- Study streak tracking and motivation
- Progress visualization and statistics
- Session history and subject categorization

### Community Features
- WhatsApp group integration
- Resource sharing capabilities
- Peer-to-peer learning environment
- Daily study tips and challenges

## Contact Information

- **School**: Lal Chand Sharma Higher Secondary School
- **Email**: himanshubhatnagar.in@gmail.com
- **Phone**: 7011476556

## Customization

The website is highly customizable with:
- Color scheme modifications in `tailwind.config.js`
- Component styling in CSS classes
- Easy content updates in page components
- Modular component architecture

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is designed for educational purposes and student use.

---

Made with ❤️ for students worldwide by the Homework Club team.
\`\`\`

```plaintext file=".gitignore"
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build files
build/
.next/
out/

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test
.env.production

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/

# Editor files
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
