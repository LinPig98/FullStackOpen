const Searchbar = ({value, onChange}) => (
    <>
      Search name:
        <input
          value = {value}
          onChange={onChange}
        />
    </>
  )

export default Searchbar