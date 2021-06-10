import axios from "axios";
import { v4 as uuid } from "uuid";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBnBApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get", headers = {}) {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  
 // Individual API routes  
 static async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("listingKey", uuid());
      console.log("uploading file ===>", formData.file)
      console.log("uploading uuid key ===>", formData.listingKey)
      let res = await this.request(`image`, formData , 'post', { headers: {
        "Content-Type": "multipart/formdata"
      }});
      console.log(res);
      return res;
    }

   /** Get all listings.  "searchTerm" => [listings]
   * 
   * returns [ { listing }, ...]
  */

    static async getListings(searchTerm="") {
      if (searchTerm === "") {
        let res = await this.request(`listings`);
        return res.listings;
      }
  
      let res = await this.request(`listings?q=${searchTerm}`);
      return res.listings;
    }

     /** Get all tags.  "searchTerm" => [listings]
   * 
   * returns [ { tags }, ...]
  */

      static async getTags(searchTerm="") {
        if (searchTerm === "") {
          let res = await this.request(`tags`);
          return res.tags;
        }
    
        let res = await this.request(`tags?q=${searchTerm}`);
        return res.tags;
      }
}
export default ShareBnBApi;