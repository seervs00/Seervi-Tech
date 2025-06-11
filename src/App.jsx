import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import AboutSection from "./Components/About"
import ProdDevelopment from "./Components/ProductDevelopment"
import WebDevelopment from "./Components/WebDevelopment"
import WebsideDesign from "./Components/WebsideDesign"
import DevelopmentTeam from "./Components/DevelopmentTeam"

import EducationExp from "./Components/EducationExp"
import HealthcareVisualization from "./Components/HealthcareVisualization"
import WebHosting from "./Components/WebHosting"
import DomainRegistration from "./Components/DomainRegistration"
import SportsPresentationPage from "./Pages/SportsPresentationPage"

function App() {

  return (
    <>
      <Navbar/>
      <div>
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<AboutSection/>}/>
      <Route path="/software/productdevelopment" element={<ProdDevelopment/>} />
      <Route path="/software/webdevelopment" element={<WebDevelopment/>} />
      <Route path="/software/webdesign" element={<WebsideDesign/>} />
      <Route path="/software/developerteam" element={<DevelopmentTeam/>} />
      <Route path="/sports/education" element={<EducationExp/>} />
      <Route path="/sports/healthcare" element={<HealthcareVisualization/>} />
      <Route path="/web/hosting" element={<WebHosting/>} />
      <Route path="/domain/registration" element={<DomainRegistration/>}/>
      </Routes>
      </div>
      <div>
        <Routes>
        <Route path="/sports/presentation" element={<SportsPresentationPage/>}/>
        </Routes>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
