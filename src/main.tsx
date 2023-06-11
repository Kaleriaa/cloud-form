import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

// HashRouter - для github pages
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
)
