import Inputs from './components/Inputs';

function App() {
  return (
    <section className="flex justify-center items-center my-8 ">
      <div className="flex justify-center flex-col w-1/3 bg-blue-500 h-2/5 p-24">
        <h1 className="text-3xl text-center my-10">Quiz setup</h1>
        <Inputs />
      </div>
    </section>
  );
}

export default App;

