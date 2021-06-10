import SearchBar from "./SearchBar";
import ListingCard from "./ListingCard";
import { useEffect, useState } from "react";
import ShareBnBApi from "./api";

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
      } catch(err) {
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

  console.log("listings-->",listings);

  if (!isLoading) {
  return (
    <>
    <SearchBar search={search} initialSearchTerm={filter}/>
    <div>listings
      {listings.map(listing => <ListingCard listing={listing} />)}
    </div>
    </>
  )

  }
  
}

export default Listings;