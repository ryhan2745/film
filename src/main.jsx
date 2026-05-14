import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  App  from './Components/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
let queryCient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={queryCient}>
      <App />
  </QueryClientProvider>
  </>,
)
