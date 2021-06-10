import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListingCard.css";

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
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
    </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Location: {city} {zip}</ListGroupItem>
        <ListGroupItem>$ {priceperhour} / hr</ListGroupItem>
      </ListGroup>
      </div>
      </div>
    </Card>
    </Link>
  )

}

export default ListingCard;