# Project Structure - Developer Onboarding Cloud Frontend

## 📁 Directory Layout

```
cc_pac/
├── src/
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   │
│   ├── assets/
│   │   └── hero.png            # Application assets
│   │
│   └── frontend/               # Frontend code
│       ├── pages/              # Page components
│       │   ├── Dashboard.jsx
│       │   ├── Repositories.jsx
│       │   ├── LearningPaths.jsx
│       │   ├── Modules.jsx
│       │   ├── ProgressTracker.jsx
│       │   ├── MentorSupport.jsx
│       │   ├── CodeAnalysis.jsx
│       │   ├── Documentation.jsx
│       │   ├── Discussions.jsx
│       │   └── DevOps.jsx
│       │
│       ├── components/         # Reusable components
│       │   └── Sidebar.jsx
│       │
│       ├── layouts/            # Layout components
│       │   └── MainLayout.jsx
│       │
│       └── styles/             # CSS files
│           ├── Layout.css
│           ├── Sidebar.css
│           ├── Dashboard.css
│           └── Pages.css
│
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## 🎯 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/` | Main overview with stats and progress |
| Repositories | `/repositories` | Repository management |
| Learning Paths | `/learning-paths` | Learning journey planning |
| Modules | `/modules` | Module management & tracking |
| Progress Tracker | `/progress-tracker` | Progress analytics |
| Mentor Support | `/mentor-support` | Mentor directory & scheduling |
| Code Analysis | `/code-analysis` | Code quality reports |
| Documentation | `/documentation` | Knowledge base |
| Discussions | `/discussions` | Community discussions |
| DevOps & CI/CD | `/devops` | Pipeline management |

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install react-router-dom
```

### 2. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🎨 Features

- ✅ Dark theme with blue accent colors
- ✅ Persistent sidebar navigation
- ✅ Fully responsive design
- ✅ Component-based architecture
- ✅ React Router navigation
- ✅ Professional UI/UX

## 📝 File Descriptions

### Pages
Each page in `src/frontend/pages/` contains:
- Page component with content
- Data management (currently using mock data)
- Responsive layout

### Components
- **Sidebar.jsx** - Navigation sidebar with all menu items
- **MainLayout.jsx** - Layout wrapper combining sidebar and content

### Styles
- **Layout.css** - Main layout and container styles
- **Sidebar.css** - Sidebar navigation styling
- **Dashboard.css** - Dashboard page specific styles
- **Pages.css** - Shared styles for all pages

### Global Styles
- **index.css** - Global HTML/body styles and defaults
- **App.jsx** - Application routing and structure

## 🔧 Customization

### Adding a New Page

1. Create new file in `src/frontend/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add menu item in `Sidebar.jsx`
4. Add styles in `src/frontend/styles/Pages.css` or create dedicated CSS

### Updating Styles

All CSS files use consistent color scheme:
- Primary: `#3b82f6` (Blue)
- Secondary: `#10b981` (Green)
- Warning: `#f59e0b` (Yellow)
- Background: `#0a0e27` (Dark)
- Text: `#d1d5db` (Light Gray)

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## ✨ Clean Structure

All template files have been removed:
- ❌ Deleted: `react.svg`, `vite.svg`
- ❌ Deleted: `App.css` (consolidated into component styles)
- ✅ Kept: All necessary source files and assets
