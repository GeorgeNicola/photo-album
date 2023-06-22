import ReactDOM from 'react-dom/client'
import App from './layouts/App/App'


import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import ContextProvider from './context/ContextProvider'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ContextProvider>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </ContextProvider>
)
