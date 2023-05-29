import { useState } from 'react'
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import './SearchBar.css'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${term}`) 
    }

  return (
    <div className="searchbar">
        <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <div className="searchbar input-submit">
        <input type="text"
        id="search"
        onChange={(e) => setTerm(e.target.value)}
        required />
        <button onClick={handleSubmit}>Submit</button>
        </div>
        </form>
    </div>
  )
}
