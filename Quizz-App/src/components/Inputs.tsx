const Inputs = ({setAmount,setCategory,setDifficulty}:) => {
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  }

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
      <select id="category"  onChange={handleCategoryChange} className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="21">Sports</option>
        <option value="20">Mythology</option>
        <option value="25">Art</option>
      </select>

      <label htmlFor="difficulty" className="block mt-4 mb-1">Difficulty:</label>
      <select id="difficulty"   onChange={handleDifficultyChange} className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default Inputs;
