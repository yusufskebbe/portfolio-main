import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";



function App() {
 

  return (
    <div className="font-mons">

    
     <Header/>
      <main className="p-60">
      <Hero/>
      <AboutMe/>
      </main>
   

    </div>
  )
}

export default App
