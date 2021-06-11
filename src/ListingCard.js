import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListingCard.css";

/**ListingCard component
 * 
 * Props:
 * - listing {}
 * 
 * Listings -> ListingCard
 * MyListingsPage -> ListingCard
 */
function ListingCard({ listing }) {

  const { id, ownerid, title, description, photourl, priceperhour, minhours, city, zip } = listing;
  return (
    <Link exact to={`/listings/${id}`}>
      <Card className="ListingCard">
        <div className="row">
          <div className="col-5">
            <Card.Img className="Listing-image" src={`https://sharebnb-mo.s3.us-east-2.amazonaws.com/${photourl}`} />
          </div>


          <div className="col-7">
            <Card.Body>
              <Card.Title><h2 className="ListingCard-title">{title}</h2></Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Location: {city} {zip}</ListGroupItem>
                <ListGroupItem>$ {priceperhour} / hr</ListGroupItem>
              </ListGroup>

              {listing.tags ? listing.tags.map(tag => <span class="badge badge-primary">{tag}</span>) : null}
            </Card.Body>

          </div>
        </div>
      </Card>
    </Link>
  )

}

export default ListingCard;