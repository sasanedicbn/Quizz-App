import React, { ChangeEvent } from 'react';

type InputsProps = {
  setAmount: (value: number) => void;
  setCategory: (value: number) => void;
  setDifficulty: (value: string) => void;
};

const Inputs: React.FC<InputsProps> = ({ setAmount, setCategory, setDifficulty }) => {
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setAmount(value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setDifficulty(value);
  };

  return (
    <div className="mt-4">
      <label htmlFor="numberOfQuestions" className="block mb-1">Number of questions:</label>
      <input
        id="numberOfQuestions"
        type="number"
        className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        placeholder="10"
        onChange={handleAmountChange}
      />

      <label htmlFor="category" className="block mt-4 mb-1">Category:</label>
      <select id="category" onChange={handleCategoryChange} className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="21">Sports</option>
        <option value="20">Mythology</option>
        <option value="25">Art</option>
      </select>

      <label htmlFor="difficulty" className="block mt-4 mb-1">Difficulty:</label>
      <select id="difficulty" onChange={handleDifficultyChange} className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default Inputs;

