import { Alert } from "react-bootstrap";

/**Error Component
 * 
 * Props:
 * - errors ""
 */
function Error({error}) {
  return (
    <Alert variant='danger'>
      <p>{error}</p>
    </Alert>
  );
}

export default Error;