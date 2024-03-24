import { Questions } from "../App"
import Answers from "./Answers"

const Question = ({ question, handleNextQuestion, handleCorrectAnswer, setQuizFinished}:{question: Questions, setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>}) => {
    console.log('OVO SU PITANJA', question)
    if(!question){
        setQuizFinished(true)
    }
   
    const answer = [question.correct_answer, ...question.incorrect_answers]

    // umjesto ovoga ubaciti na random index tacan odg (splice)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomAnswers:string[] = shuffleArray(answer)
    
    const handleClickAnswer = (selectedAnswer:string) => {
        if(selectedAnswer === question.correct_answer){
            handleCorrectAnswer()
        }
        handleNextQuestion()
    }

    return (
        <div className="bg-white p-4 md:p-8 rounded shadow-lg max-w-md mx-auto">
            <p dangerouslySetInnerHTML={{__html: question.question}}  className=" text-lg font-semibold mt-2 text-center"></p>
            <div className="mt-4">
                <div>
                    {randomAnswers.map((answer, index) => (
                        <p key={index} className="my-2 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer" onClick={() => handleClickAnswer(answer)}>
                            <Answers  answer={answer}/></p>
                    ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleNextQuestion}>Next question</button>
            </div>
        </div>
    );
}

export default Question;
