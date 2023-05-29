import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)

  return (
    <div className="recipe">
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