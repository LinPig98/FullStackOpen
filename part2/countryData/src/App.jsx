import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const App = ()=> {
  const [countries, setCountries] = useState([])
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
    setSearch(event.target.value)
  }

  const searchFilter = searchWord === "" ? countries
    :countries.filter(country => country.name.common.toLowerCase()
    .includes(searchWord.toLowerCase()))

  return(
    <>
        <b>Search country: </b>
        <input 
          value={searchWord} 
          onChange={handleSearch} 
        />
        <CountryList countries={searchFilter} />
    </>
  )
}

export default App