import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import ReactMe from "./components/ReactMe";



function App() {
 

  return (
    <div className="font-mons">

    
     <Header/>
      <main className="p-60">
      <Hero/>
      <AboutMe/>
      <MyProjects/>
      <ReactMe/>
      </main>
   

    </div>
  )
}

export default App
