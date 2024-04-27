import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = ({person}) => {
  return(<li>{person.name} {person.number}</li>)
}

const SearchBar = ({value, onChange}) => (
  <>
    Search name:
      <input
        value = {value}
        onChange={onChange}
      />
  </>
)

const NumberForm = ({nameValue, numberValue, nameOnChange, numberOnChange, onSubmit}) => {
  return(
    <>
      <form onSubmit={onSubmit}>
        <div>
          Name: 
          <input
            value = {nameValue}
            onChange ={nameOnChange} 
          />
        </div>
        <div>
          Number: 
          <input
            value = {numberValue}
            onChange = {numberOnChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </> 
  )
}

const NumberList = ({phoneBook}) => {
  return(
    <ul>
      {phoneBook.map(person=> <Person key = {person.number} person = {person} />)}
    </ul>
  )
}



const App = () => {
  const [phoneBook, setPerson] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }
  
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    if(phoneBook.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
  
      setPerson(phoneBook.concat(personObject))
      setNewName('')
    }
  }

  const handleNumberForm = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameForm = (event) => {
    setNewName(event.target.value)
  }

  const handleSearchForm = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const searchFilter = newSearch === "" ? phoneBook
  : phoneBook.filter(person => person.name.toLowerCase().search(newSearch.toLowerCase()) >= 0)


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar value ={newSearch} onChange={handleSearchForm} />
      
      <h2>Add number:</h2>
      <NumberForm 
        nameValue = {newName} 
        numberValue = {newNumber}
        nameOnChange = {handleNameForm}
        numberOnChange = {handleNumberForm}
        onSubmit = {addPerson}
      />

      <h2>Numbers:</h2>
      <NumberList phoneBook={searchFilter} />
    </div>
  )
}

export default App
