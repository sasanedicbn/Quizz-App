
const Inputs = () => {
  return (
    <div className="mt-4">
      <label htmlFor="numberOfQuestions" className="block mb-1">Number of questions:</label>
      <input
        id="numberOfQuestions"
        type="number"
        className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        placeholder="10"
      />

      <label htmlFor="category" className="block mt-4 mb-1">Category:</label>
      <select id="category" className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="sports">Sports</option>
        <option value="mythology">Mythology</option>
        <option value="art">Art</option>
      </select>

      <label htmlFor="difficulty" className="block mt-4 mb-1">Difficulty:</label>
      <select id="difficulty" className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default Inputs;
