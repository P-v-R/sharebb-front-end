import "./Homepage.css";

/** Homepage Component
 * 
 * Props:
 * - currUser()
 * 
 * Routes -> Homepage
 */
function Homepage({ currUser }) {

  if (!currUser) {
    return (
      <div className="row Homepage-background">
        <div className="row Homepage-background-opaque">
          <div className="col-10 offset-1">
            <div className="Homepage">
              <h1 className="Logo">sharebnb</h1>
              <p>share blah blah blah share</p>

              <a href="/login"><button>Log In</button></a>
              <a href="/signup"><button>Sign Up</button></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="row Homepage-background">
      <div className="Homepage-background-opaque">
        <div className="col-10 offset-1">
          <div className="Homepage">
            <h1 className="Logo">sharebnb</h1>
            <p>share blah blah blah share</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Homepage;