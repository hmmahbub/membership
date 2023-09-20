import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/lineChart/LineChart'
import NavBar from './components/navBar/navBar'
// import DaisiNav from './components/daisiNav/DaisiNav'

function App() {

  return (
    <>
      {/* <DaisiNav></DaisiNav> */}
      <NavBar></NavBar>
      {/* <h1 className='font-bold text-4xl'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
