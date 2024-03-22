const Question = ({question}) => {
    console.log('OVO SU PITANJA', question)
    const answer = [question.correct_answer, ...question.incorrect_answers]
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomAnswer = shuffleArray(answer)
    return(
        <>
          <p>{question.question}?</p>
          <div>
            <p>{question.correct_answer}</p>
            <p>{question.incorrect_answers}</p>
          </div>
        </>
    )
}

export default Question;