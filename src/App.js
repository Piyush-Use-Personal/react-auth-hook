import Home from "./components/Home"
import { AuthProvider } from "./store/Auth"


const App = () => {
  return <AuthProvider>
    <Home />
  </AuthProvider>
}
export default App