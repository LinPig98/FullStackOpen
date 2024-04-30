const NumberForm = ({nameValue, numberValue, nameOnChange, numberOnChange, onSubmit}) => (
  <>
    <form onSubmit={onSubmit}>
      <div>
        Name: &nbsp;
        <input
          value = {nameValue}
          onChange ={nameOnChange} 
        />
      </div>

      <div>
        Number: &nbsp;
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

export default NumberForm