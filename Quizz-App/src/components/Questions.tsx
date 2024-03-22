import Question from "./Question";

const Questions = ({ questions }) => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto">
                <ul>
                    {questions.map((question, index) => (
                        <li key={index} className="my-4 ">
                            <Question question={question}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Questions;
