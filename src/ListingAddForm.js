import { useState, useEffect } from "react";
import Error from "./Error";
import UploadPhotoForm from "./FormUploadPhoto";
import FormListingInfo from "./FormListingInfo";
import FormAddress from "./FormAddress";
import FormTags from "./FormTags";
import ShareBnBApi from "./api";


function ListingAddForm({ currUser }) {
  const [listingFormData, setListingFormData] = useState("");
  const [tagsFormData, setTagsFormData] = useState("");
  const [photoFormData, setPhotoFormData] = useState(null);
  const [formPage, setFormPage] = useState(1)
  const [errors, setErrors] = useState(null);
  const [tags, setTags] = useState(null)

  console.log("app renders")
  console.log("FormData", listingFormData)
  console.log("Tag Data", tagsFormData)
  useEffect(function fetchTags(tags) {
    async function fetchTagList() {
      try {
        let tags = await ShareBnBApi.getTags();
        setTags(tags);
      } catch (err) {
        setErrors(err);
      }
    }
    fetchTagList();
  }, [])

  function goForwardSaveListing(formPageData) {
    setListingFormData(currData => {
      let setFormData = currData;
      for (let key in formPageData) {
        setFormData = ({ ...setFormData, [key] : formPageData[key] })
      }
      return setFormData
      });
    setFormPage(currPage => currPage + 1);
  }

  function goBackSaveListing(formPageData) {
    setListingFormData(currData => {
      let setFormData = currData;
      for (let key in formPageData) {
        setFormData = ({ ...setFormData, [key] : formPageData[key] })
      }
      return setFormData
      });
    setFormPage(currPage => currPage - 1);
  }
  
  function goForwardSaveTags(formPageData) {
    setTagsFormData(currData => {
      let setFormData = currData;
      for (let tag of formPageData) {
        setFormData = ([ ...setFormData, tag ])
      }
      return setFormData
      });
    setFormPage(currPage => currPage + 1);
  }

  function goBackSaveTags(formPageData) {
    setTagsFormData(currData => {
      let setFormData = currData;
      for (let tag of formPageData) {
        setFormData = ([ ...setFormData, tag ])
      }
      return setFormData
      });
    setFormPage(currPage => currPage - 1);
  }
  
  function goBackSavePhoto(formPageData) {
    photoFormData(formPageData);
    setFormPage(currPage => currPage + 1);
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setListingFormData(currData => ({ ...currData, [name]: value }));
  }

  async function uploadPhoto(file){
    let resp = await ShareBnBApi.uploadImage(file);
    // console.log("resp =====>", resp)
  }

  async function submit(photo) {
    try {
      listingFormData.ownerId = currUser.id;
      listingFormData.minHours = +listingFormData.minHours;
      listingFormData.pricePerHour = +listingFormData.pricePerHour;
      listingFormData.country = "USA";
      let listingRes = await ShareBnBApi.addListing(listingFormData);
      console.log("listing added");
      let listingId = listingRes.id
      if (photo) {
        let photoRes = await ShareBnBApi.uploadImage(photo, listingId);
        console.log("image uploaded");
        let listingPatch = await ShareBnBApi.patchListing(listingId);
        console.log("image added to db");
      }
      if (tagsFormData) {
        for (let tag of tagsFormData) {
          console.log("adding tag", listingId, tag)
          let tagsRes = await ShareBnBApi.addTagToListing(listingId, tag);
          console.log("tag added to db");
        }
      }
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
            {(formPage === 1) && <FormListingInfo listingFormData={listingFormData} goForward={goForwardSaveListing} />}
            {(formPage === 2) && <FormAddress listingFormData={listingFormData} goForward={goForwardSaveListing} goBack={goBackSaveListing}/>}
            {(formPage === 3) && <FormTags tags={tags} tagsFormData={tagsFormData} goForward={goForwardSaveTags} goBack={goBackSaveTags} />}
            {(formPage === 4) && <UploadPhotoForm goBack={goBackSavePhoto} uploadPhoto={uploadPhoto} photoFormData={photoFormData} submit={submit}/>}
          </div>
      {errors && errors.map(e => <Error error={e} />)}
      </div>
        <div className="col-1 col-sm-2 col-lg-4"></div>
      </div>
      </div>
  );
}

export default ListingAddForm;