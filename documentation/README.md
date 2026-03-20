# Developer Onboarding Cloud - Monorepo

A comprehensive onboarding platform for developers with separate frontend, backend, and documentation modules.

## 📁 Project Structure

```
cc_pac/
├── frontend/                    # React + Vite frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page components
│   │   ├── layouts/            # Layout components
│   │   ├── styles/             # CSS files
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API services
│   │   ├── store/              # State management
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite config (if needed)
│
├── backend/                     # Backend API
│   ├── src/
│   ├── tests/
│   ├── package.json
│   └── README.md
│
├── documentation/              # Project documentation
│   ├── guides/
│   ├── api/
│   ├── architecture/
│   └── README.md
│
├── vite.config.js             # Root Vite config (points to frontend)
├── package.json               # Root dependencies
├── .gitignore
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server (frontend)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Frontend Setup

The frontend is built with **React + Vite** and includes:

- ✅ React Router for navigation
- ✅ Dashboard UI with analytics
- ✅ Responsive design
- ✅ Dark theme with blue accents
- ✅ Component-based architecture

### Frontend Commands

```bash
npm run dev      # Start dev server on http://localhost:5173
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🔧 Backend (Coming Soon)

Backend API for the onboarding platform. See [backend/README.md](./backend/README.md) for details.

## 📚 Documentation

Project documentation, guides, and specifications. See [documentation/README.md](./documentation/README.md) for details.

## 📋 Features

### Dashboard Page
- Stats overview (repositories, modules, developers, completion rate)
- Top header with search and user profile
- Onboarding progress tracking
- Codebase overview with pie chart
- Team activity feed
- Learning analytics with weekly chart
- Recent repositories

### Navigation Pages
- **Repositories** - Manage repositories
- **Learning Paths** - Learning journey planning
- **Modules** - Module management
- **Progress Tracker** - Progress analytics
- **Mentor Support** - Mentor directory
- **Code Analysis** - Code quality reports
- **Documentation** - Knowledge base
- **Discussions** - Community discussions
- **DevOps & CI/CD** - Pipeline management

## 🎨 Design

- **Dark Theme** - Professional dark interface
- **Blue Accents** - Primary brand color (#3b82f6)
- **Responsive** - Works on desktop, tablet, and mobile
- **Modern UI** - Gradient backgrounds, smooth transitions
- **Interactive** - Hover effects and animations

## 📖 Documentation Files

- **PROJECT_STRUCTURE.md** - Detailed project structure guide
- **DASHBOARD_UI.md** - Dashboard UI documentation
- **STRUCTURE.md** - Original structure reference
- **CLEANUP_SUMMARY.md** - Cleanup history

## 🔄 Workflow

### Adding New Pages

1. Create component in `frontend/src/pages/YourPage.jsx`
2. Add route in `frontend/src/App.jsx`
3. Add menu item in `frontend/src/components/Sidebar.jsx`
4. Add styles in `frontend/src/styles/Pages.css`

### Adding Custom Hooks

Create in `frontend/src/hooks/useYourHook.js`

### Adding API Services

Create in `frontend/src/services/yourService.js`

### Adding Utils

Create in `frontend/src/utils/yourUtils.js`

## 🛠️ Development

### Code Standards

- React functional components with hooks
- CSS modules or component-scoped CSS
- Consistent naming conventions
- Clear component documentation

### ESLint

```bash
npm run lint
```

## 🚢 Deployment

### Frontend Build

```bash
npm run build
```

Output will be in `frontend/dist/`

### Production Preview

```bash
npm run preview
```

## 📝 Git Workflow

This is a monorepo with separate concerns:

- `backend/` - Backend API code
- `frontend/` - Frontend React application  
- `documentation/` - Project documentation

## ❓ FAQ

**Q: How do I run the frontend?**
A: `npm run dev` - This uses Vite and the vite.config.js at root which points to the frontend folder.

**Q: Where do I add new components?**
A: In `frontend/src/components/` for reusable components, or `frontend/src/pages/` for full pages.

**Q: How do I style components?**
A: CSS files in `frontend/src/styles/` or import CSS directly from components.

**Q: How do I add routes?**
A: Update `frontend/src/App.jsx` with new Route components and add menu items to Sidebar.

## 📞 Support

For issues or questions, check the documentation folder or create an issue in the repository.

## 📄 License

MIT

