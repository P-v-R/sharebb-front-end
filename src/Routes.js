import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import Listings from "./Listings";
import ListingPage from "./ListingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ListingAddForm from "./ListingAddForm";
import MyListingsPage from "./MyListingsPage";
import MyBookingsPage from "./MyBookingsPage";
import ProfilePage from "./ProfilePage";
import MessagesPage from "./MessagesPage";


/** Routes Component
 * 
 * Props: 
 * - currUser {}
 * 
 * App -> Routes -> Homepage
 *               -> LoginForm
 *               -> SignUpForm
 *               -> MyListingsPage
 *               -> MyBookingsPage
 *               -> ProfilePage
 *               -> MessagesPage
 *               -> ListingPage
 *               -> Listings
 *               -> ListingAddForm
 */
function Routes({currUser}) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage currUser={currUser}/>
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/my-listings">
        <MyListingsPage currUser={currUser} />
      </Route>
      <Route exact path="/my-bookings">
        <MyBookingsPage currUser={currUser} />
      </Route>
      <Route exact path="/my-profile">
        <ProfilePage currUser={currUser} />
      </Route>
      <Route exact path="/my-messages">
        <MessagesPage currUser={currUser} />
      </Route>
      <Route path="/listings/:listingId">
        <ListingPage currUser={currUser}/>
      </Route>
      <Route exact path="/listings">
        <Listings />
      </Route>
      <Route exact path="/share">
        <ListingAddForm currUser={currUser}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}

export default Routes;