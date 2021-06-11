import { Link } from "react-router-dom";
import "./MyListingsPage.css";
import ListingCard from "./ListingCard";


/**MyListingsPage Component
 * 
 * Props 
 * - currUser {}
 * 
 * Routes -> MyListingsPage -> ListingCard
 */
function MyListingsPage({ currUser }) {
  return (
    <div className="MyListingsPage">
          <div className="row">
            <div className="col-4">
            <h1 className="MyListings-title">My Listings</h1>
            </div>
            <div className="col-4 offset-4">
            <Link exact to="/share">
              <button className="MyListings-add-btn">+ Add a listing</button>
            </Link>
            </div>
          </div>

          {currUser.listings.map(listing => (
            <>
            <hr/>
            <div className="row">
              <div className="col-10">
            <ListingCard listing={listing} />
            </div>
            <Link exact to={`/share/edit/${listing.id}`}>
            <div className="col-2">
              <button className="MyListings-edit-btn">Edit</button>
              
              </div>
              </Link>
            </div>
            </>
          ))}
    </div>
  )
}

export default MyListingsPage;