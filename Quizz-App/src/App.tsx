
import './index.css'

function App() {


  return (
    <section>
     <div className="bg-blue-500  p-4">
       <h3>Quiz setup</h3>
       <p>Number of questions:</p>
       <input type='number' />
       <label htmlFor="options">Category:</label>
       <select>
        <option value="">sports</option>
        <option value="option1">sports</option>
        <option value="option2">mythology</option>
        <option value="option3">art</option>
      </select>

       <label htmlFor="options">Difficulty:</label>
       <select>
        <option value="">easy</option>
        <option value="option1">medium</option>
        <option value="option2">hard</option>
      </select>
      

     </div>
    </section>
  
  )
}

export default App
