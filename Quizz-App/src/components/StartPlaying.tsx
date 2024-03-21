
const StartPlaying = ({onClick}) => {
  
  return (
    <button onClick={onClick} className="bg-blue-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-8">
      Start Playing!
    </button>
  );
}

export default StartPlaying;
