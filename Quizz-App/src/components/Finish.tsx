const Finish = ({ totalQuestions, correctAnswersCount, onPlayAgain, setQuizFinished }) => {
    const handlePlayAgain = () => {
        onPlayAgain();
        setQuizFinished(true)
        
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Quiz Finished</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-2">Total questions: {totalQuestions}</p>
                <p className="text-lg mb-2">Correct answers: {correctAnswersCount}</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePlayAgain}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Finish;
