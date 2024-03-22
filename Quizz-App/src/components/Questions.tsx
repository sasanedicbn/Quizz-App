import React, { useState } from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto">
                    <Question question={questions[currentQuestionIndex]} handleNextQuestion={handleNextQuestion} />
            </div>
        </div>
    );
};


export default Questions;
