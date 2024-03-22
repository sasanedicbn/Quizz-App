import Answers from "./Answers"

const Question = ({ question, handleNextQuestion }) => {
    console.log('OVO SU PITANJA', question)

    const answer = [question.correct_answer, ...question.incorrect_answers]
    // console.log(answer)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomAnswer = shuffleArray(answer)
    // console.log(randomAnswer)

    return (
        <div className="bg-white p-4 md:p-8 rounded shadow-lg max-w-md mx-auto">
            <p className="text-sm text-right">Correct answers: 0/0</p>
            <p className="text-lg font-semibold mt-2 text-center">{question.question}?</p>
            <div className="mt-4">
                <div>
                    {randomAnswer.map((answer, index) => (
                        <p key={index} className="my-2 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer"><Answers answer={answer}/></p>
                    ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleNextQuestion}>Next question</button>
            </div>
        </div>
    );
}

export default Question;
