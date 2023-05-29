import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//styles
import './Navbar.css'

//components
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'>
            <h1>Halal gluten-free recipes</h1>
            </Link>
            <SearchBar/>
            <Link to="/create">Suggest a recipe</Link>
        

        </nav>
    </div>
  )
}

export default Navbar