const Person = ({person, deleteHandler}) => (
  <li>
    {person.name} &nbsp;
    {person.number} &nbsp;
    <button onClick={() => deleteHandler(person.id)}>delete</button>
  </li>
)
  
const NumberList = ({phoneBook, deleteHandler}) =>(
  <ul>
    {phoneBook.map(person=> <Person key = {person.number} person = {person} deleteHandler={deleteHandler} />)}
  </ul>
)

  export default NumberList