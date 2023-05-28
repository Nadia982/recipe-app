import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'>
            <h1>Halal gluten-free recipes</h1>
            </Link>
            <Link to="/create">Add recipe</Link>
        

        </nav>
    </div>
  )
}

export default Navbar