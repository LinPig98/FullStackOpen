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

  export default NumberForm