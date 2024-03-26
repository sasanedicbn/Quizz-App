import { Questions } from "../App"
import Answers from "./Answers"
type props = {
    question: Questions, 
    handleNextQuestion: () => void,
    setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>,
    handleCorrectAnswer: () => void
}
const Question: React.FC<props> = ({ question, handleNextQuestion, handleCorrectAnswer, setQuizFinished }) => {
    console.log('OVO SU PITANJA', question)
    if (!question) {
        setQuizFinished(true)
    }

    const answer = [question.correct_answer, ...question.incorrect_answers]

    const randomIndex = Math.floor(Math.random() * answer.length); 
    const correctAnswer = answer[0]; 
    answer.splice(0, 1); 
    answer.splice(randomIndex, 0, correctAnswer); 

    const randomAnswers: string[] = answer;

    const handleClickAnswer = (selectedAnswer: string) => {
        if (selectedAnswer === question.correct_answer) {
            handleCorrectAnswer()
        }
        handleNextQuestion()
    }

    return (
        <div className="bg-white p-4 md:p-8 rounded shadow-lg max-w-md mx-auto">
            <p dangerouslySetInnerHTML={{ __html: question.question }} className=" text-lg font-semibold mt-2 text-center"></p>
            <div className="mt-4">
                <div>
                    {randomAnswers.map((answer, index) => (
                        <p key={index} className="my-2 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer" onClick={() => handleClickAnswer(answer)}>
                            <Answers answer={answer} /></p>
                    ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleNextQuestion}>Next question</button>
            </div>
        </div>
    );
}

export default Question;
