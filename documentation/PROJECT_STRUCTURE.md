# Project Structure - Reorganized

## 📁 New Directory Layout

```
cc_pac/
├── frontend/                          # Main frontend application
│   ├── public/                        # Static public assets
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/                           # Source code root
│   │   ├── assets/                    # Application assets
│   │   │   └── hero.png
│   │   │
│   │   ├── components/                # Reusable React components
│   │   │   └── Sidebar.jsx            # Navigation sidebar
│   │   │
│   │   ├── pages/                     # Page components (routes)
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Repositories.jsx
│   │   │   ├── LearningPaths.jsx
│   │   │   ├── Modules.jsx
│   │   │   ├── ProgressTracker.jsx
│   │   │   ├── MentorSupport.jsx
│   │   │   ├── CodeAnalysis.jsx
│   │   │   ├── Documentation.jsx
│   │   │   ├── Discussions.jsx
│   │   │   └── DevOps.jsx
│   │   │
│   │   ├── layouts/                   # Layout components
│   │   │   └── MainLayout.jsx         # Main app layout with sidebar
│   │   │
│   │   ├── styles/                    # Global and component CSS
│   │   │   ├── Layout.css
│   │   │   ├── Sidebar.css
│   │   │   ├── Dashboard.css
│   │   │   └── Pages.css
│   │   │
│   │   ├── hooks/                     # Custom React hooks (FUTURE)
│   │   │   └── [custom hooks go here]
│   │   │
│   │   ├── services/                  # API calls & external services (FUTURE)
│   │   │   └── [API service clients]
│   │   │
│   │   ├── store/                     # State management (FUTURE)
│   │   │   └── [Context or Redux store]
│   │   │
│   │   ├── utils/                     # Utility functions (FUTURE)
│   │   │   └── [Helper functions]
│   │   │
│   │   ├── App.jsx                    # Main app component with routing
│   │   ├── main.jsx                   # React entry point
│   │   └── index.css                  # Global styles
│   │
│   ├── index.html                     # HTML entry template
│   └── vite.config.js                 # Vite configuration (frontend root)
│
├── vite.config.js                     # Root Vite config (points to frontend)
├── package.json                       # Project dependencies & scripts
├── eslint.config.js                   # ESLint configuration
├── .gitignore                         # Git ignore rules
│
├── STRUCTURE.md                       # Structure documentation
├── CLEANUP_SUMMARY.md                 # Cleanup history
├── DASHBOARD_UI.md                    # Dashboard UI documentation
│
├── dist/                              # Old build output (can be deleted)
├── node_modules/                      # Install dependencies
│
└── README.md                          # Project README
```

## 🚀 Running the Project

### Development
```bash
npm run dev
```
This will start the Vite dev server on `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output will be in `frontend/dist/`

### Preview Built App
```bash
npm run preview
```

## 📦 Folder Descriptions

### `frontend/`
The main frontend application. All source code, assets, configs, and build output live here.

### `frontend/public/`
Static files that are copied as-is during build (favicon, icons, etc.)

### `frontend/src/`
All React source code organized by feature/function:

- **assets/** - Images, fonts, and other media files
- **components/** - Reusable React components (not full pages)
- **pages/** - Full page components that map to routes
- **layouts/** - Layout wrapper components (like page shells)
- **styles/** - All CSS files (shared and component-specific)
- **hooks/** - Custom React hooks (for use across components)
- **services/** - API client functions and external service calls
- **store/** - State management (context or Redux)
- **utils/** - Helper functions and utilities
- **App.jsx** - Main app component with routing setup
- **main.jsx** - React DOM render entry point
- **index.css** - Global stylesheets

## 🔄 Import Paths

With the new structure, import paths are simplified:

### From a page component:
```javascript
// Import styles
import '../styles/Dashboard.css'

// Import layout
import MainLayout from '../layouts/MainLayout'

// Import sub-components
import Sidebar from '../components/Sidebar'
```

### From a component:
```javascript
// Import from layouts
import MainLayout from '../layouts/MainLayout'

// Import from styles
import '../styles/Layout.css'
```

## 📝 Adding New Directories

When you need to add new functionality:

1. **Custom Hook?** → Add file in `src/hooks/`
   ```javascript
   // src/hooks/useAuthUser.js
   export const useAuthUser = () => {
     // hook logic
   }
   ```

2. **Service/API?** → Add file in `src/services/`
   ```javascript
   // src/services/api.js
   export const fetchRepositories = async () => {
     // API call
   }
   ```

3. **Helper function?** → Add file in `src/utils/`
   ```javascript
   // src/utils/formatDate.js
   export const formatDate = (date) => {
     // formatting logic
   }
   ```

4. **Global state?** → Add in `src/store/`
   ```javascript
   // src/store/userContext.js
   export const UserContext = createContext()
   ```

## 🎨 CSS Organization

CSS files are in `src/styles/`:

- **Layout.css** - Main layout styles
- **Sidebar.css** - Sidebar styling
- **Dashboard.css** - Dashboard page specific
- **Pages.css** - Shared page styles

Each component can also import its own CSS or use inline styles.

## ✅ Benefits of This Structure

1. **Scalability** - Easy to organize code as project grows
2. **Clarity** - Clear separation of concerns
3. **Reusability** - Components folder for shared components
4. **API Integration** - Services folder ready for API calls
5. **State Management** - Store folder ready for Redux/Context
6. **Custom Hooks** - Hooks folder for shared logic
7. **Utilities** - Utils folder for shared functions
8. **Consistent Patterns** - Standard structure others recognize

## 🔧 Future Enhancements

As your project grows, you can add:

### State Management Example
```javascript
// src/store/userContext.js
import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
```

### Custom Hook Example
```javascript
// src/hooks/useUser.js
import { useContext } from 'react'
import { UserContext } from '../store/userContext'

export const useUser = () => {
  return useContext(UserContext)
}
```

### API Service Example
```javascript
// src/services/api.js
const BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api'

export const userService = {
  getUser: async (id) => {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    return res.json()
  },
  updateUser: async (id, data) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return res.json()
  }
}
```

## 📋 Migration from Old Structure

Files were reorganized as follows:

**Before:**
```
src/
├── App.jsx
├── main.jsx
└── frontend/
    ├── pages/
    ├── components/
    ├── layouts/
    └── styles/
```

**After:**
```
frontend/
└── src/
    ├── pages/
    ├── components/
    ├── layouts/
    ├── styles/
    ├── hooks/        ← NEW
    ├── services/     ← NEW
    ├── store/        ← NEW
    ├── utils/        ← NEW
    ├── App.jsx
    └── main.jsx
```

## 🎯 Next Steps

1. The structure is ready for scalable development
2. New team members will understand the organization
3. Start adding hooks, services, and utilities as needed
4. Consider adding API integration when backend is ready
5. Set up state management when needed
