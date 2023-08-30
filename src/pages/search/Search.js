// react router dom imports
import { useLocation } from 'react-router-dom'

// firebase imports
import { projectFirestore } from "../../firebase/config";

// hooks
import { useTheme } from "../../hooks/useTheme";

// react imports
import { useEffect, useState } from "react";

// styles
import './Search.css'

// components
import RecipeList from "../../components/RecipeList";
 
export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
 
  const { mode } = useTheme();
 
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
 
  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("recipes")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("There are no such recipes");
          setIsPending(false);
        } else {
          let searchResults = [];
          snapshot.docs.forEach((doc) => {
            if (doc.data().title.toLowerCase().includes(query.toLowerCase())) {
              searchResults.push({ id: doc.id, ...doc.data() });
            }
          });
          setRecipes(searchResults);
          setIsPending(false);
        }
      });
    return () => unsub();
  }, [query]);
 
  return (
    <div className={`${mode}`}>
      <h2 className="page-title">Search results for "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && (
        <div className="search-results">
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
}