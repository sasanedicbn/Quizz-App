type AnswersProps = {
    answer: string;
  };
  
  const Answers: React.FC<AnswersProps> = ({ answer }) => {
    return <>{answer}</>;
  };
  
  export default Answers;
  