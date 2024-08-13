
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

function App() {

  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <>
    <div className={`${darkMode?"bg-[#0f172a]":"bg-white"} `} >
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
     <Pricing darkMode={darkMode}/>
    </div>
    </>
  )
}

export default App
