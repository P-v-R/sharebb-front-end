import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListingCard({ listing }) {

  const { id, ownerid, title, description, photourl, priceperhour, minhours, city, zip } = listing;
  return (
    <Link exact to={`/listings/${id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://sharebnb-mo.s3.us-east-2.amazonaws.com/${photourl}`} />
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
    </Card>
    </Link>
  )

}

export default ListingCard;