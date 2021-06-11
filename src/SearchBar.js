import { useState } from "react";
import "./SearchBar.css";

/** SearchBar Component
 * 
 * Props:
 * - search()
 * - initialSearchTerm ""
 * 
 * State:
 * - searchTerm ""
 *
 * Listings -> SearchBar
 * 
 */

function SearchBar({search, initialSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("searching", searchTerm)
    search(searchTerm);
  }

  return (
    <div className="SearchBar">
    <form onSubmit={handleSubmit}>
      <input className="SearchBar-input" type="text" onChange={handleChange} value={searchTerm} placeholder="Search for a sharebnb..."/>
      <button className="SearchBar-button btn">search</button>
    </form>
    </div>
  )
}

export default SearchBar;