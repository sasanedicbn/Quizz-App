import Question from "./Question";

const Questions = ({ questions }) => {
    console.log(questions);
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
