import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareBnBApi from "./api";
import MessageOwnerForm from "./MessageOwnerForm";
import "./ListingPage.css";

/**ListingPage Component
 * 
 * Props: 
 * - currUser{}
 * 
 * Routes -> ListingPage
 */
function ListingPage({ currUser }) {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [owner, setOwner] = useState(null);
  const [errors, setErrors] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchListing() {
    async function fetchListingById() {
      try {
        let listing = await ShareBnBApi.getListing(listingId);
        let owner = await ShareBnBApi.getUser(listing.ownerid);
        setListing(listing);
        setOwner(owner);
        setIsLoading(false);
      } catch (err) {
        setErrors(err);
        setIsLoading(false);
      }
    }
    fetchListingById();
  }, [])

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (errors) {
    <p>{errors}</p>
  }
  const { id, address, unit, city, state, title, description, minhours, ownerid, photourl, priceperhour } = listing;

  return (
    <div className="ListingPage row">
      <div className="col-7 offset-1">
        <h1 className="ListingPage-title">{title}</h1>
        <img className="ListingPage-image" src={`https://sharebnb-mo.s3.us-east-2.amazonaws.com/${photourl}`} />
        <h2 className="ListingPage-description">{description} </h2> 
        </div>
        <div className="col-4">
          {!showMessage && <button className="ListingPage-msg-btn" onClick={() => setShowMessage(true)}>✉️ Message Owner</button>}
          {showMessage && (
            <div>
              <MessageOwnerForm owner={owner} listing={listing} currUser={currUser} />
            </div>
          )}
       
      </div>
    </div>
  )

}

export default ListingPage;