import React from 'react';

const Controls = ({ 
  generateArray, 
  handleSort, 
  setAlgorithm, 
  setSpeed, 
  setArraySize, 
  algorithm, 
  isSorting 
}) => {
  return (
    <div className="controls flex flex-col md:flex-row items-center gap-4 mb-4">
      {/* Generate Array Button */}
      <button
        className={`btn ${isSorting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white px-4 py-2 rounded`}
        onClick={generateArray}
        disabled={isSorting}
      >
        Generate Array
      </button>

      {/* Algorithm Selector */}
      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        className="dropdown border px-4 py-2 rounded"
        disabled={isSorting}
      >
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        <option value="Heap Sort">Heap Sort</option>
      </select>

      {/* Speed Slider */}
      <div className="flex items-center gap-2">
        <label className="text-white">Speed:</label>
        <input
          type="range"
          min="10"
          max="200"
          defaultValue="50"
          onChange={(e) => setSpeed(201 - e.target.value)}
          className="slider"
          disabled={isSorting}
        />
      </div>

      {/* Array Size Slider */}
      <div className="flex items-center gap-2">
        <label className="text-white">Array Size:</label>
        <input
          type="range"
          min="5"
          max="20"
          defaultValue="10"
          onChange={(e) => setArraySize(parseInt(e.target.value))}
          className="slider"
          disabled={isSorting}
        />
      </div>

      {/* Sort Button */}
      <button
        className={`btn ${isSorting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded`}
        onClick={handleSort}
        disabled={isSorting}
      >
        Sort
      </button>
    </div>
  );
};

export default Controls;
