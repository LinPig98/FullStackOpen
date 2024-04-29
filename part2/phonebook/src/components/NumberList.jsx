const Person = ({person, deleteHandler}) => {
    return(<li>{person.name} {person.number}
    <button onClick={() => deleteHandler(person.id)}>delete</button></li>)
  }
  
  const NumberList = ({phoneBook, deleteHandler}) => {
    return(
      <ul>
        {phoneBook.map(person=> <Person key = {person.number} person = {person} deleteHandler={deleteHandler} />)}
      </ul>
    )
  }

  export default NumberList