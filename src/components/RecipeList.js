import {Link} from "react-router-dom"

//styles
import './RecipeList.css'

export default function RecipeList({recipes}) {
  return (
    <div className="recipe-list">
        {recipes.map(recipe=>(
        <div key={recipe.id} className="card">
            <div className="card-heading">
            <h3>{recipe.title}</h3>
            <Link to={`/recipes/${recipe.id}`}>See details...</Link>
            </div>
            <p>Ready in {recipe.cookingTime}</p>
            <h4>Ingredients</h4>
            <ul>{recipe.ingredients.map(ingredient=>(<li>{ingredient}</li>))}</ul>
            <h4>Method</h4>
            <div>{recipe.method.substring(0,80)}...</div>
            
        </div>
    ))}</div>
  )
}
