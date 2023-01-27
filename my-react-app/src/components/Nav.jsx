import { Link } from "react-router-dom";

const Nav = () => {
    return <><nav className="nav nav-pills nav-fill">
    <Link className="nav-link" aria-current="page" to="/">Home</Link>
    <Link className="nav-link" to="/grid">Grid</Link>
  </nav></>
}
export default Nav;