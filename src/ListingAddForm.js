import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Error from "./Error";
import UploadPhotoForm from "./FormUploadPhoto";
import FormListingInfo from "./FormListingInfo";
import FormAddress from "./FormAddress";
import FormTags from "./FormTags";
import ShareBnBApi from "./api";


function ListingAddForm({add}) {
  const [listingFormData, setListingFormData] = useState("");
  const [tagsFormData, setTagsFormData] = useState("");
  const [photoFormData, setPhotoFormData] = useState(null);
  const [formPage, setFormPage] = useState(1)
  const [errors, setErrors] = useState(null);
  const [tags, setTags] = useState(null)

  console.log("app renders")
  console.log("FormData", listingFormData)
  useEffect(function fetchTags(tags) {
    async function fetchTagList() {
      try {
        let tags = await ShareBnBApi.getTags();
        setTags(tags);
      } catch (err) {
        setErrors(err);
      }
      fetchTagList();
    }
  }, [])

  function goForward(formPageData) {
    setListingFormData(currData => {
      let setFormData = currData;
      for (let key in formPageData) {
        setFormData = ({ ...setFormData, [key] : formPageData[key] })
      }
      return setFormData
      });
    setFormPage(currPage => currPage + 1);
  }

  function goBack(formPageData) {
    setListingFormData(currData => {
      let setFormData = currData;
      for (let key in formPageData) {
        setFormData = ({ ...setFormData, [key] : formPageData[key] })
      }
      return setFormData
      });
    setFormPage(currPage => currPage - 1);
  }
  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setListingFormData(currData => ({ ...currData, [name]: value }));
  }

  async function uploadPhoto(file){
    let resp = await ShareBnBApi.uploadImage(file);
    // console.log("resp =====>", resp)
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // await signUp(signUpFormData);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="ListingAddForm">
      <div className="row">
        <div className="col-1 col-sm-2 col-lg-4"></div>
        <div className="col-10 col-sm-8 col-lg-4">
          <div ClassName="Forms">
            {(formPage === 1) && <FormListingInfo listingFormData={listingFormData} goForward={goForward} />}
            {(formPage === 2) && <FormAddress listingFormData={listingFormData} goForward={goForward} goBack={goBack}/>}
            {(formPage === 3) && <FormTags tags={tags} tagsFormData={tagsFormData} goForward={goForward} goBack={goBack} />}
            {(formPage === 4) && <UploadPhotoForm goBack={goBack} uploadPhoto={uploadPhoto} photoFormData={photoFormData}/>}
          </div>
      {errors && errors.map(e => <Error error={e} />)}
      </div>
        <div className="col-1 col-sm-2 col-lg-4"></div>
      </div>
      </div>
  );
}

export default ListingAddForm;