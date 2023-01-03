import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header/Header'
import ListCountries from './components/ListCountries/ListCountries'
import Filters from './components/Filters/Filters'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")
  const [selected, setSelected] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res)=>{
      setCountries(res.data)
    })
  }, [])
  


  return (
    <div className="App">
      <Header/>
      <Filters 
        setSearchCountry={setSearchCountry}
        setSelected={setSelected}
      />
      <ListCountries 
        countries={countries} 
        searchCountry={searchCountry}
        selected={selected}
      />
    </div>
  )
}

export default App
