export type QuestionTY = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionsData = QuestionTY[]

