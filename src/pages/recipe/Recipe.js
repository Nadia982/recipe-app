import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useTheme } from './../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFirestore } from "../../firebase/config";

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const {mode} = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists){
        setIsPending(false);
        setRecipe(doc.data())
      } else {
        setIsPending(false);
        setError('Could not find that recipe')
      }
    })
  }, [id])

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
      <h2 className="page-title">{recipe.title}</h2>
      <p>Preparation time: {recipe.cookingTime}</p>
      <h4>Ingredients</h4>
      <form>{recipe.ingredients.map(ingredient=>(<div className="recipe-ingredients-div" key={ingredient}><input type="checkbox"/><label>{ingredient}</label></div>))}</form>

            <h4>Method</h4>
      <ol>{recipe.method.map(step=>(<div className="method" key={step}><li>{step}</li></div>))}</ol>
        </>
      )}
    </div>
  )
}