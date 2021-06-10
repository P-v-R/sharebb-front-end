import { Form } from "react-bootstrap";
import { useState } from "react";

function FormTags({ tags, tagsFormData, goForward, goBack }) {
  const [currFormData, setCurrFormData] = useState(tagsFormData);
console.log("tag form data ===>", currFormData);

  console.log(tags);
  function addToTags(evt) {
    evt.preventDefault();
    console.log(evt.target.values);
    setCurrFormData(currData => [...currData, evt.target.value]);
    
  }
  //TODO toggle button based, currently have duplicate issue
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
      <label htmlFor="tags">Choose tags:</label>

      {tags.map(tag => <button onClick={addToTags} value={tag.handle}>{tag.description}</button>)}

      <div ClassName="row">
              <button onClick={handleBack}>Go Back</button>
              <button onClick={handleForward}>Go Forward</button>
            </div>
    </Form>
  )
}

export default FormTags;