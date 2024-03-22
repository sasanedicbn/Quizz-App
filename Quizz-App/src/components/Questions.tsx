import  { useState } from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(correctAnswersCount + 1);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto">
                <Question 
                    question={questions[currentQuestionIndex]} 
                    currentQuestionIndex={currentQuestionIndex} 
                    handleNextQuestion={handleNextQuestion} 
                    handleCorrectAnswer={handleCorrectAnswer} 
                />
                <p className="text-right">Correct answers: {correctAnswersCount}/{currentQuestionIndex}</p>
            </div>
        </div>
    );
};

export default Questions;



export default Questions;
