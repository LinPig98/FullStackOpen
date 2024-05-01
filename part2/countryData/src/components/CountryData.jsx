const CountryData = ({country}) => {
    
    const languages = Object.keys(country.languages)
    return(
        <>
        <h1>{country.name.common}</h1>
        <b>Capital:</b> <p>{country.capital[0]}</p>
        <b>Area:</b> <p>{country.area}</p>
        <b>Languages:</b>
        <ul>
        {languages.map(language => <li key = {country.languages[language]}>{country.languages[language]}</li>)}
        </ul>
        <img src={country.flags.png}/>
        </>
    )
}

export default CountryData