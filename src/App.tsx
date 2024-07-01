import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Tabs  from './components/ui/Tabs'
function App() {

  return (
    <Router>
      <Tabs />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  )
}

export default App
