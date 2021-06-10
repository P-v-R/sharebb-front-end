import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import Listings from "./Listings";
import ListingPage from "./ListingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ListingAddForm from "./ListingAddForm";

function Routes({currUser}) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/listings/:listingId">
        <ListingPage />
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