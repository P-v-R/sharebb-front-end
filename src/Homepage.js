import "./Homepage.css";
function Homepage({currUser}) {

  if (!currUser) {
    return (
      <div className="Homepage">
        <h1 className="Logo">sharebnb</h1>
        <p>share blah blah blah share</p>
  
        <a href="/login"><button>Log In</button></a>
        <a href="/signup"><button>Sign Up</button></a>
      </div>
    )
  }
  return (
    <div className="Homepage">
      <h1 className="Logo">sharebnb</h1>
      <p>share blah blah blah share</p>
    </div>
  )
}

export default Homepage;