import { Alert } from "react-bootstrap";

function Error({error}) {
  return (
    <Alert variant='danger'>
      <p>{error}</p>
    </Alert>
  );
}

export default Error;