import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/lineChart/LineChart'
import NavBar from './components/navBar/navBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
