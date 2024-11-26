export const bubbleSort = (array) => {
  const animations = [];
  const tempArray = [...array];
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      // Push comparison indices
      animations.push([j, j + 1, 'compare']);
      if (tempArray[j] > tempArray[j + 1]) {
        // Swap values
        animations.push([j, tempArray[j + 1], 'swap']);
        animations.push([j + 1, tempArray[j], 'swap']);
        [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
      }
      // Push reset indices
      animations.push([j, j + 1, 'reset']);
    }
    // Reset the color of the sorted bar
    animations.push([tempArray.length - i - 1, tempArray.length - i - 1, 'sorted']);
  }
  return animations;
};
  
export const selectionSort = (array) => {
  const animations = [];
  const auxArray = [...array];

  for (let i = 0; i < auxArray.length; i++) {
    let minIndex = i;

    // Find the minimum element in the remaining array
    for (let j = i + 1; j < auxArray.length; j++) {
      // Highlight the bars being compared
      animations.push([j, minIndex, 'compare']);
      if (auxArray[j] < auxArray[minIndex]) {
        minIndex = j;
      }
      // Reset colors after comparison
      animations.push([j, minIndex, 'reset']);
    }

    // Swap the minimum element with the current element
    if (minIndex !== i) {
      animations.push([i, auxArray[minIndex], 'swap']);
      animations.push([minIndex, auxArray[i], 'swap']);
      [auxArray[i], auxArray[minIndex]] = [auxArray[minIndex], auxArray[i]];
    }

    // Reset the color of the sorted bar
    animations.push([i, i, 'sorted']);
  }

  return animations;
};

  
export const insertionSort = (array) => {
  const animations = [];
  const auxArray = [...array];

  for (let i = 1; i < auxArray.length; i++) {
    let key = auxArray[i];
    let j = i - 1;

    // Compare and shift elements
    while (j >= 0 && auxArray[j] > key) {
      // Highlight the bars being compared
      animations.push([j, j + 1, 'compare']);
      // Move element to the next position
      animations.push([j + 1, auxArray[j], 'swap']);
      auxArray[j + 1] = auxArray[j];
      // Reset bar colors
      animations.push([j, j + 1, 'reset']);
      j -= 1;
    }

    // Insert the key into the correct position
    animations.push([j + 1, key, 'swap']);
    auxArray[j + 1] = key;

    // Reset the color of the sorted bar
    for (let k = 0; k <= i; k++) {
      animations.push([k, k, 'sorted']);
    }
  }

  return animations;
};

  
export const mergeSort = (array) => {
  const animations = [];
  const auxArray = [...array];

  const merge = (start, mid, end) => {
    const left = auxArray.slice(start, mid + 1);
    const right = auxArray.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    // Merge the two halves
    while (i < left.length && j < right.length) {
      // Highlight the compared bars
      animations.push([k, k, 'compare']);
      if (left[i] <= right[j]) {
        // Swap with the left array element
        animations.push([k, left[i], 'swap']);
        auxArray[k++] = left[i++];
      } else {
        // Swap with the right array element
        animations.push([k, right[j], 'swap']);
        auxArray[k++] = right[j++];
      }
    }

    // Handle remaining elements in the left array
    while (i < left.length) {
      animations.push([k, k, 'compare']);
      animations.push([k, left[i], 'swap']);
      auxArray[k++] = left[i++];
    }

    // Handle remaining elements in the right array
    while (j < right.length) {
      animations.push([k, k, 'compare']);
      animations.push([k, right[j], 'swap']);
      auxArray[k++] = right[j++];
    }

    // Mark the merged section as sorted
    for (let l = start; l <= end; l++) {
      animations.push([l, null, 'sorted']);
    }
  };

  const mergeSortHelper = (start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      mergeSortHelper(start, mid);
      mergeSortHelper(mid + 1, end);
      merge(start, mid, end);
    }
  };

  mergeSortHelper(0, auxArray.length - 1);
  return animations;
};

export const quickSort = (array) => {
    const animations = [];
    const auxArray = [...array];
  
    const partition = (low, high) => {
      const pivot = auxArray[high];
      let i = low;
      for (let j = low; j < high; j++) {
        animations.push([j, high, 'compare']); // Compare
        if (auxArray[j] < pivot) {
          [auxArray[i], auxArray[j]] = [auxArray[j], auxArray[i]];
          animations.push([i, auxArray[i], 'swap']);
          animations.push([j, auxArray[j], 'swap']);
          i++;
        }
      }
      [auxArray[i], auxArray[high]] = [auxArray[high], auxArray[i]];
      animations.push([i, auxArray[i], 'swap']);
      animations.push([high, auxArray[high], 'swap']);

      // Reset the color of the sorted bar
      for (let k = low; k <= high; k++) {
        animations.push([k, k, 'sorted']);
      }
      return i;
    };
  
    const quickSortHelper = (low, high) => {
      if (low < high) {
        const pivotIndex = partition(low, high);
        quickSortHelper(low, pivotIndex - 1);
        quickSortHelper(pivotIndex + 1, high);
      }
    };
  
    quickSortHelper(0, auxArray.length - 1);
    return animations;
  };
  
  export const heapSort = (array) => {
    const animations = [];
    const auxArray = [...array];
  
    // Function to heapify a subtree rooted at index `i`
    const heapify = (n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      // Compare left child with largest
      if (left < n) {
        animations.push([left, largest, 'compare']); // Compare
        if (auxArray[left] > auxArray[largest]) {
          largest = left;
        }
        animations.push([left, largest, 'reset']); // Reset comparison
      }
  
      // Compare right child with largest
      if (right < n) {
        animations.push([right, largest, 'compare']); // Compare
        if (auxArray[right] > auxArray[largest]) {
          largest = right;
        }
        animations.push([right, largest, 'reset']); // Reset comparison
      }
  
      // Swap and continue heapifying if the root is not the largest
      if (largest !== i) {
        animations.push([i, auxArray[largest], 'swap']); // Swap
        animations.push([largest, auxArray[i], 'swap']); // Swap
        [auxArray[i], auxArray[largest]] = [auxArray[largest], auxArray[i]];
        heapify(n, largest); // Recursively heapify the affected subtree
      }
    };
  
    // Build max heap
    const n = auxArray.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (maximum) with the last element
      animations.push([0, auxArray[i], 'swap']);
      animations.push([i, auxArray[0], 'swap']);
      [auxArray[0], auxArray[i]] = [auxArray[i], auxArray[0]];
  
      // Heapify the reduced heap
      heapify(i, 0);
  
      // Mark the sorted part
      animations.push([i, null, 'sorted']); // Mark sorted
    }
  
    // Mark the first element as sorted
    animations.push([0, null, 'sorted']);
  
    return animations;
  };
  