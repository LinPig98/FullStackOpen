import { useState, useEffect } from 'react'
import personService from './services/persons'
import NumberForm from './components/NumberForm'
import NumberList from './components/NumberList'
import Searchbar from './components/Searchbar'
import Notification from './components/Notification'

const App = () => {
  const [phoneBook, setPerson] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [Message, setMessage] = useState('')

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
          setPerson(phoneBook.map(n => n.id !== existing.id ? n : person))
          setNewName('')
          setNewNumber('')
          setMessage(`${newName} updated!`)
          setTimeout(() => {
            setMessage('')
          }, 5000)
        })
        .catch(error =>
          setMessage(`${newName} does not exist on server`)
        )
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
        setMessage(`${newName} added!`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
      })
    }
  }

  const handleDelete = (id) => {
    const person = phoneBook.find(person => person.id === id)

    if(window.confirm(`Delete ${person.name} ?`)){
      personService.remove(id)
      setPerson(phoneBook.filter(person => person.id !== id))
    }
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }
  
  const searchFilter = newSearch === "" ? phoneBook
  : phoneBook.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={Message} />

      <Searchbar value ={newSearch} onChange={handleSearch} />

      <h2>Add number:</h2>
      <NumberForm 
        nameValue = {newName} 
        numberValue = {newNumber}
        nameOnChange = {handleName}
        numberOnChange = {handleNumber}
        onSubmit = {addPerson}
      />

      <h2>Numbers:</h2>
      <NumberList phoneBook={searchFilter} deleteHandler={handleDelete} />
    </div>
  )
}

export default App
