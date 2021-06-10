import { Form } from "react-bootstrap";
import { useState } from "react";

function FormAddress({ listingFormData, goForward, goBack }) {
  const [currFormData, setCurrFormData] = useState(listingFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setCurrFormData(currData => ({ ...currData, [name]: value }));
  }

  function handleForward(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    goForward(currFormData);
  }

  function handleBack(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    goBack(currFormData);
  }
  return(
    <Form>
      <p>Address:</p>
         <Form.Label htmlFor="ListingAddForm-address">Street Address</Form.Label>
        <Form.Control
          id="ListingAddForm-address"
          name="address"
          type="text"
          onChange={handleChange}
          value={currFormData.address}
          required
        />
         <Form.Label htmlFor="ListingAddForm-unit">Unit (Optional)</Form.Label>
        <Form.Control
          id="ListingAddForm-unit"
          name="unit"
          type="text"
          onChange={handleChange}
          value={currFormData.unit}
        />
        <Form.Label htmlFor="ListingAddForm-city">City</Form.Label>
        <Form.Control
          id="ListingAddForm-city"
          name="city"
          type="text"
          onChange={handleChange}
          value={currFormData.city}
        />
        <Form.Label htmlFor="ListingAddForm-zip">Zipcode</Form.Label>
        <Form.Control
          id="ListingAddForm-zip"
          name="zip"
          type="text"
          onChange={handleChange}
          value={currFormData.zip}
        />

        <Form.Label htmlFor="ListingAddForm-state">State</Form.Label>
        <Form.Control
          id="ListingAddForm-state"
          name="state"
          type="text"
          onChange={handleChange}
          value={currFormData.state}
        />
         <div ClassName="row">
              <button onClick={handleBack}>Go Back</button>
              <button onClick={handleForward}>Go Forward</button>
            </div>
    </Form>
  )
}

export default FormAddress;