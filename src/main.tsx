import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TaskContextProvider } from './contexts/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
