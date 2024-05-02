import CountryData from './CountryData'
import CountryList from './CountryList'

const CountryHandler = ({countries, setCountries}) => {
    if(countries.length >10){
      return <p>Too many matches, be more specific!</p>
    }
    else if(countries.length === 0){
      return <p>No matches, please try a new search!</p>
    }
    else if(countries.length === 1){
      
      return <CountryData country = {countries[0]} />
    }
    else{
      return(
        <CountryList countries={countries} buttonEvent={setCountries} />
      )
    }
}

export default CountryHandler