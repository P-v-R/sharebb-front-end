import { Form } from "react-bootstrap";
import { useState } from "react";
import "./FormListingInfo.css";

/**FormListingInfo Component
 * 
 * Props:
 * - listingFormData {}
 * - goForward()
 * 
 * ListingAddForm -> FormListingInfo
 * EditListingPage -> FormListingInfo
 */
function FormListingInfo({ listingFormData, goForward }) {
  const [currFormData, setCurrFormData] = useState(listingFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setCurrFormData(currData => ({ ...currData, [name]: value }));
  }

  function handleForward(evt) {
    evt.preventDefault();
    goForward(currFormData);
  }

  return (
    <>
      <Form>
        <Form.Label htmlFor="FormListingInfo-title">Title</Form.Label>
        <Form.Control
          id="FormListingInfo-title"
          name="title"
          type="text"
          onChange={handleChange}
          value={currFormData.title}
          required
        />
        <Form.Label htmlFor="FormListingInfo-description">Description</Form.Label>
        <Form.Control
          id="FormListingInfo-description"
          name="description"
          type="text"
          autoComplete="last-name"
          onChange={handleChange}
          value={currFormData.description}
          required
        />
        <Form.Label htmlFor="FormListingInfo-pricePerHour">Price Per Hour</Form.Label>
        <Form.Control
          id="FormListingInfo-pricePerHour"
          name="pricePerHour"
          type="integer"
          onChange={handleChange}
          value={currFormData.pricePerHour}
          required
        />
        <Form.Label htmlFor="FormListingInfo-minHours">Minimum Hours</Form.Label>
        <Form.Control
          id="FormListingInfo-minHours"
          name="minHours"
          type="integer"
          onChange={handleChange}
          value={currFormData.minHours}
          required
        />

            <div ClassName="row button-row">
              <div className="col-3 offset-9">
                <button className="Form-button-fb" onClick={handleForward}>→</button>
              </div>
              
            </div>
        </Form>
    </>
  )
}

export default FormListingInfo;