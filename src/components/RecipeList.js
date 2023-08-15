import {Link} from 'react-router-dom/cjs/react-router-dom.min';

//styles
import './RecipeList.css'
import { useTheme } from './../hooks/useTheme';

export default function RecipeList({recipes}) {
  const {mode} = useTheme()

  if (recipes.length === 0 ){
    return <div className="error">No recipes found</div>
  } else {
  return (
    <div className="recipe-list">
        {recipes.map(recipe=>(
        <div key={recipe.id} className={`card ${mode}`}>
            <div className="card-heading">
            <h3>{recipe.title}</h3>
            <Link className="button" to={`/recipes/${recipe.id}`}>See details...</Link>
            </div>
            <p>Ready in {recipe.cookingTime}</p>
            <h4>Ingredients</h4>
            {/* <ul>{recipe.ingredients.map(ingredient=>(<li key={ingredient}>{ingredient}</li>))}</ul> */}
            <form>{recipe.ingredients.map(ingredient=>(<div className="recipe-ingredients-div" key={ingredient}><input type="checkbox"/><label>{ingredient}</label></div>))}</form>
            <h4>Method</h4>
            <Link className="link-text" to={`/recipes/${recipe.id}`}>See method...</Link>
            {/* <div>{recipe.method.substring(0,80)}...</div> */}
            
        </div>
    ))}</div>
  )
}}
