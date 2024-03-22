import { useState } from 'react';
import Inputs from './components/Inputs';
import StartPlaying from './components/StartPlaying';
import Questions from './components/Questions';

function App() {
  const [questions, setQuestions] = useState([]);
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(21); 
  const [difficulty, setDifficulty] = useState('easy'); 

  async function fetchData() {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`); 
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      let data = await response.json();
      console.log(data); 
      setQuestions(data.results);
      
    } catch (error) {
      console.error(error);
    }
  }
  // {console.log(questions)}
 
  return (
    <>
      {questions.length > 0 ? (
        <Questions questions={questions} amount={amount}/>
      ) : (
        <section className="flex justify-center items-center my-12">
          <div className="flex justify-center flex-col w-1/3 bg-blue-400 h-96 p-24 shadow-lg">
            <h1 className="text-3xl text-center my-6">Quiz setup</h1>
            <Inputs setAmount={setAmount} setCategory={setCategory} setDifficulty={setDifficulty} />
            <StartPlaying onClick={fetchData} />
          </div>
        </section>
      )}
    </>
  );
}

export default App;
