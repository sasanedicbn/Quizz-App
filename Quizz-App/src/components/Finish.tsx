
const Finish = ({ totalQuestions, correctAnswersCount, onPlayAgain }) => {
    const handlePlayAgain = () => {
        onPlayAgain();
    };

    return (
        <div>
            <h1>Quiz Finished</h1>
            <p>Total questions: {totalQuestions}</p>
            <p>Correct answers: {correctAnswersCount}</p>
            <button onClick={handlePlayAgain}>Play Again</button>
        </div>
    );
};

export default Finish;
