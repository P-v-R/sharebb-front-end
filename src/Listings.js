import SearchBar from "./SearchBar";
import ListingCard from "./ListingCard";
import { useEffect, useState } from "react";
import ShareBnBApi from "./api";
import MapSearch from "./MapSearch";
import "./Listings.css";

/**Listings Component
 * 
 * Props: 
 * - currUser{}
 * 
 * Routes -> Listings
 */
function Listings() {
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [filter, setFilter] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(function fetchListings() {
    async function fetchListings() {
      try {
        console.log("filtering listings")
        let listings = await ShareBnBApi.getListings(filter);
        setListings(listings);
        setIsLoading(false);
      } catch (err) {
        setErrors(err);
        setIsLoading(false);
      }
    }
    fetchListings();
  }, [filter])

  function search(searchTerm) {
    setFilter(searchTerm);
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  console.log("listings-->", listings);

  if (!isLoading) {
    return (
      <div className="row">
            <div className="col-7">
              <SearchBar search={search} initialSearchTerm={filter} />
            
            <div className="Listings-container d-flex flex-wrap justify-content-around">
              <ul className="Listings-ul">
                {listings && listings.map(listing => <li key={listing.id}><ListingCard key={listing.id} listing={listing} /></li>)}
              </ul>
          </div>
          </div>
          <div className="col-5" style={{ border: "1px solid black" }}>
            insert map here :(
    <MapSearch />
    </div>
    </div>
  )

  }

}

export default Listings;