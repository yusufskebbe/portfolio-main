import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import ReactMe from "./components/ReactMe";



function App() {
 

  return (
    <div className="font-mons">

    
     <Header/>
      <main className="md:px-60 md:py-40 relative h-screen">
      <Hero/>
      <AboutMe/>
      <MyProjects/>
      <ReactMe/>
      <Footer/>
      </main>
   

    </div>
  )
}

export default App
