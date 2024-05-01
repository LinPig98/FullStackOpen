import CountryData from './CountryData'

const Country = ({country}) => (
    <li key = {country.name.common}>
        {country.name.common}
    </li>
)

const CountryList = ({countries}) => {
    if(countries.length >10){
      return <p>Too many matches, be more specific!</p>
    }
    else if(countries.length === 0){
      return <p>No matches, please try a new search!</p>
    }
    else if(countries.length === 1){
      return(
        <CountryData country = {countries[0]} />
      )
    }
    else{
      return(
        <ul>
        {countries.map(n => <Country country={n} />)}
        </ul>
      )
    }
}

export default CountryList
