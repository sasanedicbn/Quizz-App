import Inputs from './components/Inputs';
import StartPlaying from './components/StartPlaying';

function App() {
  return (
    <section className="flex justify-center items-center my-12 ">
      <div className="flex justify-center flex-col w-1/3 bg-blue-400 h-96 p-24">
        <h1 className="text-3xl text-center my-6">Quiz setup</h1>
        <Inputs />
        <StartPlaying/>
      </div>
    </section>
  );
}

export default App;

