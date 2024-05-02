const Country = ({country, buttonEvent}) => (
  <>
      {country.name.common}
      <button onClick={() => buttonEvent([country])}>show</button> 
  </>
)

const CountryList =({countries, buttonEvent}) => {
  return(
    <ul>
      {countries.map(n =>
        <li key={n.tld}>
          <Country country={n} buttonEvent={buttonEvent}/>
        </li>
      )}
    </ul> 
  )     
}

export default CountryList