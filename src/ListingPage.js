import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareBnBApi from "./api";
import MessageOwnerForm from "./MessageOwnerForm";

function ListingPage({currUser}) {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [owner, setOwner] = useState(null);
  const [errors, setErrors] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [msgSuccess, setMsgSuccess] = useState(null);

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
  },[])

  async function submit(message) {
    try {
      console.log(message, listingId, currUser.id, owner.id)
     let msg = await ShareBnBApi.sendMessage(message, listingId, currUser.id, owner.id)
      setMsgSuccess('Message Sent!')
      console.log(msg);
    } catch (err) {
      setErrors(err);
    }
    
  }

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
    <div>
      <p>THIS IS THE page for each listing</p>
      <h1>{title}</h1>
      <img src={`https://sharebnb-mo.s3.us-east-2.amazonaws.com/${photourl}`} />
      <h2>{description} </h2>
      {!showMessage && <button onClick={() => setShowMessage(true)}>Ask about this listing</button>}
      {showMessage && (
        <div>
          <MessageOwnerForm owner={owner} submit={submit} listing={listing} currUser={currUser} msgSuccess={msgSuccess}/>
        </div>
      )}
    </div>
  )

}

export default ListingPage;