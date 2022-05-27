import { Link } from "react-router-dom";
import styles from "./Header.module.css"
const Header = () => {

  return (
    <nav className={styles}>
      <Link to="/">
        <h2>China Rescue</h2>
      </Link>
      <h5>Dog meat trade survivors</h5>
    </nav>
  )
}

export default Header;