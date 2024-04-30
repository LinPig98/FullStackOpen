import { useState, useEffect } from 'react'
import axios from 'axios'


const App = ()=> {
  const [searchWord, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const hook = () => {
    console.log(searchWord)
    if (searchWord) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data)
        })
    }
    
  }
  useEffect(hook, [searchWord])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return(
    <>
      <div>
        <input 
          value={searchWord} 
          onChange={handleSearch} 
        />
      </div>
      <div>
        <ul>
          {countries.map(country => <li key = {country.name.common}>{country.name.common}</li>)}
        </ul>
      </div>
    </>
    
  )
}

export default App