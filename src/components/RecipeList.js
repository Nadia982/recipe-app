import {Link} from 'react-router-dom/cjs/react-router-dom.min';

//styles
import './RecipeList.css'

export default function RecipeList({recipes}) {
  return (
    <div className="recipe-list">
        {recipes.map(recipe=>(
        <div key={recipe.id} className="card">
            <div className="card-heading">
            <h3>{recipe.title}</h3>
            <Link className="button" to={`/recipes/${recipe.id}`}>See details...</Link>
            </div>
            <p>Ready in {recipe.cookingTime}</p>
            <h4>Ingredients</h4>
            <ul>{recipe.ingredients.map(ingredient=>(<li key={ingredient}>{ingredient}</li>))}</ul>
            <h4>Method</h4>
            <Link className="link-text" to={`/recipes/${recipe.id}`}>See method...</Link>
            {/* <div>{recipe.method.substring(0,80)}...</div> */}
            
        </div>
    ))}</div>
  )
}
