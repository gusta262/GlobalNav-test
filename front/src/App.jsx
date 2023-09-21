import { UserProvider } from './context/userContext'
import { ApplicationRoutes } from './routes'
import './global.css'

function App() {

  return (
    <UserProvider>
      <ApplicationRoutes />
    </UserProvider>
  )
}

export default App
