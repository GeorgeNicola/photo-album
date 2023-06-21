import ReactDOM from 'react-dom/client'
import App from './layouts/App/App'

import ContextProvider from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
