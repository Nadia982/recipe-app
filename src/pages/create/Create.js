import {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';

//styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()
  
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
    // const doc = (title, ingredients, method, cookingTime)
    history.push('/')
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
      <h2 className="page-title">Suggest a Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="recipe-title"><span>Recipe title:</span></label>
          <input 
          type="text" 
          id="recipe-title"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required/>
        

        <label htmlFor="recipe-ingredients"><span>Recipe ingredients:</span></label> 
          <div className="ingredients">
          <input 
          className="ingredient-input"
          type="text" 
          id="recipe-ingredients"
          onChange={(e)=>setNewIngredient(e.target.value)}
          value={newIngredient}
          ref={ingredientInput}
          />
          <button onClick={handleAdd} className="btn">Add</button>
          </div>
        
        <p>Current ingredients: {ingredients.map((i)=>(
          <em key={i}>{i}, </em>
        ))}</p>
<div>
        <label htmlFor="recipe-method"><span>Recipe method:</span></label>
          <textarea id="recipe-method"
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          required/>
        

        <label htmlFor="cooking-time"><span>Cooking time (minutes):</span></label>
          <input 
          type="number" 
          id="cooking-time"
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          required/>
        

        <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
