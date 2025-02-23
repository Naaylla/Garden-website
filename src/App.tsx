import '../styles.css'
import Header from "./components/Layout/Header/index"
import Hero from "./components/Hero/index"

function App() {

  return (
    <div className='w-screen h-screen bg-white relative'>
      <Header></Header>
      <Hero></Hero>
    </div>
  )
}

export default App
