import { useState, useEffect } from 'react'
import personService from './services/persons'
import NumberForm from './components/NumberForm'
import NumberList from './components/NumberList'
import Searchbar from './components/Searchbar'

const App = () => {
  const [phoneBook, setPerson] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(response => {
        setPerson(response)
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const existing = phoneBook.find(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if(existing){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        
        const newPerson = {...existing, number:newNumber}
        personService
        .updateNumber(existing.id, newPerson)
        .then(person => {
          setPerson(phoneBook.map(n => n.id !== existing.id? n : person))
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else{

      const personObject = {
        name: newName,
        number: newNumber
      }
  
      personService
      .create(personObject)
      .then(response => {
        setPerson(phoneBook.concat(response))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNumberForm = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameForm = (event) => {
    setNewName(event.target.value)
  }

  const handleSearchForm = (event) => {
    setNewSearch(event.target.value)
  }

  const handleDelete = (id) => {
    const person = phoneBook.find(person => person.id === id)
    if(window.confirm(`Delete ${person.name} ?`)){
      personService.remove(id)
      setPerson(phoneBook.filter(person => person.id !== id))
    }
  }
  

  const searchFilter = newSearch === "" ? phoneBook
  : phoneBook.filter(person => person.name.toLowerCase().search(newSearch.toLowerCase()) >= 0)


  return (
    <div>
      <h2>Phonebook</h2>
      <Searchbar value ={newSearch} onChange={handleSearchForm} />
      
      <h2>Add number:</h2>
      <NumberForm 
        nameValue = {newName} 
        numberValue = {newNumber}
        nameOnChange = {handleNameForm}
        numberOnChange = {handleNumberForm}
        onSubmit = {addPerson}
      />

      <h2>Numbers:</h2>
      <NumberList phoneBook={searchFilter} deleteHandler={handleDelete} />
    </div>
  )
}

export default App
