import { Link } from 'react-router-dom'
import "./Home.css"
import Logo from "../assets/img/logo2 (1).svg"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="img" />
        </div>
        <ul className="flex items-center w-[100] justify-center mb-0 gap-[3rem] h-[10vh] bg-transparent">
          <li>
            <Link className="text-white no-underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white no-underline" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white no-underline" to="/Blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-white no-underline" to="/Post">
              Post
            </Link>
          </li>
        </ul>
        <div className="quote">
          <button className='rounded buttons'>
              Get A Quote
              <box-icon name="chevrons-right" color="#ffffff"></box-icon>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
