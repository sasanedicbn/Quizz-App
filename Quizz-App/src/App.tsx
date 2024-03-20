import Inputs from './components/Inputs';
import StartPlaying from './components/StartPlaying';


function App() {
  async function fetchData() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data); 
      
    } catch (error) {
      console.error(error);
    }
  }
  fetchData()
  return (
    <section className="flex justify-center items-center my-12">
      <div className="flex justify-center flex-col w-1/3 bg-blue-400 h-96 p-24 shadow-lg">
        <h1 className="text-3xl text-center my-6">Quiz setup</h1>
        <Inputs />
        <StartPlaying />
      </div>
    </section>
  );
}

export default App;
