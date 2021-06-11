import { Link } from "react-router-dom";
import "./MyBookings.css";
import ListingCard from "./ListingCard";


/**MyBookingsPage Component
 * 
 * Props 
 * - currUser {}
 * 
 * Routes -> MyBookingsPage -> ListingCard
 */
function MyBookingsPage({ currUser }) {
  return (
    <div className="MyBookingsPage">
      <div className="row">
        <div className="col-4">
          <h1 className="MyBookings-title">My Bookings</h1>
        </div>
      </div>

      {currUser.bookings.map(booking => (
        <div className="row">
          <div className="col-8">
            <ListingCard listing={booking} />
          </div>
          <div className="col-4">
            <Link exact to={`/my-messages/bookings/${booking.id}`}>
              <button className="MyBookings-msg-btn">Message Owner</button>
            </Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default MyBookingsPage;