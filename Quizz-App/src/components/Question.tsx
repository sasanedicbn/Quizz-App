const Question = ({question}) => {
    console.log('OVO SU PITANJA', question)
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