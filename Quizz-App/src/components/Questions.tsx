import Question from "./Question";

const Questions = ({ questions }) => {
    return (
        <div>
                <ul>
                    {questions.map((question, index) => (
                          <li key={index}>
                            <Question question={question}/>
                          </li>
                    ))}
                </ul>
        </div>
    );
};

export default Questions;
