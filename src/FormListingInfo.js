import { Form } from "react-bootstrap";
import { useState } from "react";

function FormListingInfo({ listingFormData, goForward }) {
  const [currFormData, setCurrFormData] = useState(listingFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setCurrFormData(currData => ({ ...currData, [name]: value }));
  }

  function handleForward(evt) {
    const { name, value } = evt.target;
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
          name="lastName"
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
          type="text"
          onChange={handleChange}
          value={currFormData.pricePerHour}
          required
        />
        <Form.Label htmlFor="FormListingInfo-minHours">Minimum Hours</Form.Label>
        <Form.Control
          id="FormListingInfo-minHours"
          name="minHours"
          type="text"
          onChange={handleChange}
          value={currFormData.minHours}
          required
        />

            <div ClassName="row">
              <button onClick={handleForward}>Go Forward</button>
            </div>
        </Form>
    </>
  )
}

export default FormListingInfo;