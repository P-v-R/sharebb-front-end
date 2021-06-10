import { Form } from "react-bootstrap";
import { useState } from "react";

function FormTags({ tags, tagsFormData, goForward, goBack }) {
  const [currFormData, setCurrFormData] = useState(tagsFormData);

  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setCurrFormData(currData => ({ ...currData, [name]: value }));
  }

  function handleForward(evt) {
    const { name, value } = evt.target;
    goForward(currFormData);
  }

  function handleBack(evt) {
    const { name, value } = evt.target;
    goBack(currFormData);
  }
  return(
    <Form>
      <p>add tags here</p>
      <div ClassName="row">
              <button onClick={handleBack}>Go Back</button>
              <button onClick={handleForward}>Go Forward</button>
            </div>
    </Form>
  )
}

export default FormTags;