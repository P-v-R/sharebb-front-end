import "./Homepage.css";
import {motion} from "framer-motion"

/** Homepage Component
 * 
 * Props:
 * - currUser {}
 * 
 * Routes -> Homepage
 */
function Homepage({ currUser }) {

  if (!currUser) {
    return (
      <div className="row Homepage-background">
        <div className="row Homepage-background-opaque">
          <div className="col-10 offset-1">
            <motion.div className="Homepage"
            animate={{ x: 0 }}
            initial={{ x: 2000 }}
            transition={{delay:1}}
            >
              <h1 className="Logo">sharebnb</h1>
              <p>share blah blah blah share</p>

              <a href="/login"><button>Log In</button></a>
              <a href="/signup"><button>Sign Up</button></a>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="row Homepage-background">
      <div className="Homepage-background-opaque">
        <div className="col-10 offset-1">
          <motion.div className="Homepage"
          animate={{ x: 0 }}
          initial={{ x: 2000 }}
          transition={{delay:1}}
          >
            <h1 className="Logo">sharebnb</h1>
            <p>share blah blah blah share</p>
          </motion.div>
        </div>
      </div>
    </div>

  )
}

export default Homepage;