import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Blogprovider } from './blogcontext'
createRoot(document.getElementById('root')).render(
    <Blogprovider>
        <Router>
            <App/>
        </Router>
    </Blogprovider>
        
)
