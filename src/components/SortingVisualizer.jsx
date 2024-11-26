import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
} from '../algorithms/algo.js';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50); // Lower is faster
  const [arraySize, setArraySize] = useState(10); // Number of bars
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [isSorting, setIsSorting] = useState(false);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  // Update orientation state on resize
  const updateOrientation = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  // Detect orientation change
  useEffect(() => {
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  // Generate a new random array
  const generateArray = () => {
    if (isSorting) return; // Disable generating during sorting
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 300) + 5
    );

    // Reset the color of all bars
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = '#4caf50';
    }
    setArray(newArray);
  };

  // Handle the sorting process
  const handleSort = () => {
    if (isSorting) return;
    setIsSorting(true);

    const sortingFunctions = {
      'Bubble Sort': bubbleSort,
      'Selection Sort': selectionSort,
      'Insertion Sort': insertionSort,
      'Merge Sort': mergeSort,
      'Quick Sort': quickSort,
      'Heap Sort': heapSort,
    };

    const animations = sortingFunctions[algorithm](array);
    visualizeSort(animations);
  };

  const visualizeSort = (animations) => {
    const bars = document.getElementsByClassName('array-bar');

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [barOneIdx, barTwoIdxOrHeight, type] = animation;

        if (type === 'compare') {
          // Highlight compared bars
          bars[barOneIdx].style.backgroundColor = 'red';
          bars[barTwoIdxOrHeight].style.backgroundColor = 'red';
        } else if (type === 'swap') {
          // Update bar height and text
          bars[barOneIdx].style.height = `${barTwoIdxOrHeight}px`;
          bars[barOneIdx].innerText = barTwoIdxOrHeight; // Update displayed value
        } else if (type === 'reset') {
          // Reset bar colors
          bars[barOneIdx].style.backgroundColor = '#4caf50';
          bars[barTwoIdxOrHeight].style.backgroundColor = '#4caf50';
        } else if (type === 'sorted') {
          bars[barOneIdx].style.backgroundColor = 'yellow'; // Mark as sorted
        }
      }, index * speed);
    });

    // Re-enable controls after sorting
    setTimeout(() => {
      setIsSorting(false);
    }, animations.length * speed);
  };

  // Generate a new array whenever the array size changes
  useEffect(() => {
    generateArray();
  }, [arraySize]);

  return (
    <div className="visualizer flex flex-col items-center mt-5">
      {/* Show "Rotate your phone" prompt if in portrait mode */}
      {isPortrait ? (
        <div
          className="rotate-message w-screen h-screen bg-white flex items-center justify-center"
          style={{ position: 'fixed', top: 0, left: 0 }}
        >
          <p className="text-black text-2xl font-bold">Rotate your phone</p>
        </div>
      ) : (
        <>
          {/* Controls Component */}
          <Controls
            generateArray={generateArray}
            handleSort={handleSort}
            setAlgorithm={setAlgorithm}
            setSpeed={setSpeed}
            setArraySize={setArraySize}
            algorithm={algorithm}
            isSorting={isSorting}
          />

          {/* Array Bars */}
          <div className="array-container flex justify-center items-end w-full">
            {array.map((value, idx) => (
              <div
                className="array-bar bg-blue-500 mx-1 transition-all ease-in-out flex justify-center items-end"
                key={idx}
                style={{
                  height: `${value}px`,
                  width: `${60 / arraySize}%`,
                  backgroundColor: '#4caf50',
                  fontSize: '12px', // Adjust font size for readability
                  color: 'black', // Ensure text is visible
                  fontWeight: 'bold',
                  position: 'relative', // Required for centering
                  display: 'flex',
                  alignItems: 'bottom',
                  justifyContent: 'bottom',
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SortingVisualizer;
