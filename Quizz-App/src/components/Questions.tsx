
const Questions = ({ questions }) => {
    console.log(questions);
    return (
        <div>
            {questions.length > 0 ? (
                <ul>
                    {questions.results.map((question, index) => (
                        <li key={index}>
                            <p>{question.question}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No questions available.</p>
            )}
        </div>
    );
};

export default Questions;
