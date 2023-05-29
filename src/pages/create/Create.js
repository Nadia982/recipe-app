import {useState, useRef} from 'react'

//styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
   }

   const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => 
        [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="recipe-title"><span>Recipe title:</span>
          <input 
          type="text" 
          id="recipe-title"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required/>
        </label>

        <label htmlFor="recipe-ingredients"><span>Recipe ingredients:</span>
          <div className="ingredients">
          <input 
          type="text" 
          id="recipe-ingredients"
          onChange={(e)=>setNewIngredient(e.target.value)}
          value={newIngredient}
          ref={ingredientInput}
          />
          <button onClick={handleAdd} className="btn">Add</button>
          </div>
        </label> 
        <p>Current ingredients: {ingredients.map((i)=>(
          <em key={i}>{i}, </em>
        ))}</p>
<div>
        <label htmlFor="recipe-method"><span>Recipe method:</span>
          <textarea id="recipe-method"
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          required/>
        </label>

        <label htmlFor="cooking-time"><span>Cooking time (minutes):</span>
          <input 
          type="number" 
          id="cooking-time"
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          required/>
        </label>

        <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
