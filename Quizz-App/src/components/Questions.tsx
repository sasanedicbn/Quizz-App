import { useState, useEffect } from "react";
import Question from "./Question";
import Finish from "./Finish";
import { QuestionsData } from "../App";

type Props = {
    questions: QuestionsData,
    amount: number,
    setQuestions: React.Dispatch<React.SetStateAction<QuestionsData>>,
};

const Questions: React.FC<Props> = ({ questions, amount, setQuestions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        if (currentQuestionIndex === amount) {
            setQuizFinished(true);
        }
    }, [currentQuestionIndex, amount]);


    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(correctAnswersCount + 1);
    };

     const handlePlayAgain = () => {
        setCurrentQuestionIndex(0);
        setCorrectAnswersCount(0);
        setQuizFinished(false);
        setQuestions([])
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto">
            {!quizFinished ? (
                    <Question 
                        question={questions[currentQuestionIndex]} 
                        handleNextQuestion={handleNextQuestion}
                        handleCorrectAnswer={handleCorrectAnswer} 
                        setQuizFinished={setQuizFinished}
                    />
                ) : (
                    <Finish 
                        totalQuestions={amount} 
                        correctAnswersCount={correctAnswersCount} 
                        onPlayAgain={handlePlayAgain} 
                    />
                )}
                <p className="text-right">Correct answers: {correctAnswersCount}/{currentQuestionIndex}</p>
            </div>
        </div>
    );
};

export default Questions;
