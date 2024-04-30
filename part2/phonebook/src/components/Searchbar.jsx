const Searchbar = ({value, onChange}) => (
  <>
    Search name: &nbsp;
    <input
      value = {value}
      onChange={onChange}
    />
  </>
)

export default Searchbar