const Question = ({question}) => {
    console.log('OVO SU PITANJA', question)
    const answer = [question.correct_answer, ...question.incorrect_answers]
   console.log(answer)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomAnswer = shuffleArray(answer)
    console.log(randomAnswer)
    return(
        <>
          <p>{question.question}?</p>
          <div>
           {randomAnswer.map((answer, index) => (
            <p key={index}>{answer}</p>
           ))}  
          </div>
        </>
    )
}

export default Question;