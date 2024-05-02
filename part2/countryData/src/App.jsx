import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryHandler from './components/CountryHandler'

const App = ()=> {
  const [Countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [searchWord, setSearch] = useState('')

  const hook = () => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
    })   
  }
  useEffect(hook, [])

  const handleSearch = (event) => {
    const search = event.target.value
    setSearch(search)
    const searchFilter = Countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    setFilterCountries(searchFilter)
  }

  return(
    <>
        <b>Search country: </b>
        <input 
          value={searchWord} 
          onChange={handleSearch} 
        />
        <CountryHandler countries={filterCountries} setCountries = {setFilterCountries} />
    </>
  )
}

export default App