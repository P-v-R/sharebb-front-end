import { Form } from "react-bootstrap";
import { useState } from "react";
import "./FormTags.css";

function FormTags({ tags, tagsFormData, goForward, goBack }) {
  const [currFormData, setCurrFormData] = useState(tagsFormData);
  console.log("tag form data ===>", currFormData);

  console.log(tags);
  function addToTags(evt) {
    evt.preventDefault();
    console.log("clicked!", evt.target.value);
    if (currFormData.includes(evt.target.value)) {
      setCurrFormData(currData => currData.filter(d => d !== evt.target.value))
    }
    
    else {
    setCurrFormData(currData => [...currData, evt.target.value]);
    }
  }


  function handleForward(evt) {
    evt.preventDefault();
    goForward(currFormData);
  }

  function handleBack(evt) {
    evt.preventDefault();
    goBack(currFormData);
  }
  return (
    <Form>
      <label htmlFor="tags">Choose tags:</label>
      <div className="tag-buttons-list">
      {tags.map(tag => <button className={`btn FormTag-Buttons ${currFormData.includes(tag.handle) ? "clicked" : ""}`} onClick={addToTags} value={tag.handle}>{tag.description}</button>)}
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={handleBack}>←</button>
        </div>
        <div className="col-6">
          <button onClick={handleForward}>→</button>
        </div>
      </div>
    </Form>
  )
}

export default FormTags;