import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="nav">
      <Link to="/">
        <h2>China Rescue</h2>
      </Link>
      <h5>Dog meat trade survivors</h5>
    </nav>
  )
}

export default Header;