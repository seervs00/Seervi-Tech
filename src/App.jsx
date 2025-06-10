import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import AboutSection from "./Components/About"

function App() {

  return (
    <>
      <Navbar/>
      <div>
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<AboutSection/>}/>
      
      </Routes>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
