import {useState} from 'react'

//styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime)
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

        {/* ingredients go here */}

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

      </form>
    </div>
  )
}
