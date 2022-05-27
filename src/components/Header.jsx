import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="nav">
      <Link to="/">
        <h6>China Rescue</h6>
      </Link>
        <h6>Dog meat trade survivors</h6>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Header;