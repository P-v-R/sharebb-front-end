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
 static async uploadImage(file, id) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("listingKey", id);
      console.log("uploading file ===>", formData.file)
      console.log("uploading uuid key ===>", formData.listingKey)
      let res = await this.request(`image`, formData , 'post', { headers: {
        "Content-Type": "multipart/formdata"
      }});
      console.log(res);
      return res;
    }

  /*----------LISTINGS------------------------------------------------- */
   /** Get all listings.  "searchTerm" => [listings]
   * 
   * returns [ { listing }, ...]
  */

    static async getListings(searchTerm="") {
      if (searchTerm === "") {
        let res = await this.request(`listings`);
        return res.listings;
      }
  
      let res = await this.request(`listings/search/${searchTerm}`);
      return res.listings;
    }

    /** Get one listing.
   * 
   * returns { listing }
  */

     static async getListing(id) {
  
      let res = await this.request(`listings/${id}`);
      return res.listing;
    }

    /** Add a new listings.  "searchTerm" => [listings]
   * returns [ { listing }, ...]
  */
    static async addListing(data) {
       let res = await this.request('listings', data, 'post');
       return res.listing;
     }

     /** Add a new listings.  "searchTerm" => [listings]
   * returns [ { listing }, ...]
  */
    static async patchListing(listingId) {
      let data = {photoUrl: listingId}
      let res = await this.request(`listings/${listingId}`, data, 'patch');
      return res.listing;
    }

    /** Add a tags for listings. 
     * { listingId, tagHandle }
     * returns: { listing_id, tag_handle }
  */
     static async addTagToListing(listingId, tagHandle) {
       console.log("addingTags", listingId, tagHandle)
      let res = await this.request(`listings/tags`, {listingId, tagHandle}, 'post');
      return res;
    }

/*----------USERS------------------------------------------------- */
   /** Get user.  userId => { user }
   * 
  */

    static async getUser(id) {
      let res = await this.request(`users/${id}`);
      return res.user;
    }


/*----------TAGS------------------------------------------------- */
     /** Get all tags.  "searchTerm" => [listings]
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




/*----------MESSAGES------------------------------------------------- */
      static async sendMessage(msgData) {
        console.log("message api")
        let res = await this.request('messages', msgData, 'post');
        return res.message;
      }

      static async getMessages(currUserId) {
        let sent = await this.request(`messages?fromUserId=${currUserId}`);
        let received = await this.request(`messages?toUserId=${currUserId}`);
        let res = { sent: sent.messages, received : received.msg}
        return res;
      }
}
export default ShareBnBApi;

