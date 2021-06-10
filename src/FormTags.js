import { Form } from "react-bootstrap";
import { useState } from "react";

function FormTags({ tags, tagsFormData, goForward, goBack }) {
  const [currFormData, setCurrFormData] = useState(tagsFormData);

  console.log(tags);
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
      <label for="tags">Choose tags:</label>

      <select name="tags" id="tags" multiple>
        {tags.map(tag => <option value={tag.handle}>{tag.description}</option>)}
      </select>

      <div ClassName="row">
              <button onClick={handleBack}>Go Back</button>
              <button onClick={handleForward}>Go Forward</button>
            </div>
    </Form>
  )
}

export default FormTags;