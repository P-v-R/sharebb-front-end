import { useState } from "react";

function SearchBar({search, initialSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={searchTerm}/>
      <button>search</button>
    </form>
  )
}

export default SearchBar;