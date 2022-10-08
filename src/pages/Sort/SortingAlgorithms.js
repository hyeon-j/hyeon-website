// Merge Sort Animation Algorithm
export function mergeSortAnimations(array) {
  if (array.length <= 1) return array;
  const animations = [];
  const helperArray = array.slice();
  mergeSortHelper(array, helperArray, 0, array.length - 1, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  helperArray,
  startIndex,
  endIndex,
  animations
) {
  if (startIndex === endIndex) return;
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(helperArray, mainArray, startIndex, midIndex, animations);
  mergeSortHelper(helperArray, mainArray, midIndex + 1, endIndex, animations);
  doMerge(mainArray, helperArray, startIndex, midIndex, endIndex, animations);
}

function doMerge(
  mainArray,
  helperArr,
  startIndex,
  midIndex,
  endIndex,
  animations
) {
  let k = startIndex,
    i = startIndex,
    j = midIndex + 1;

  while (i <= midIndex && j <= endIndex) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (helperArr[i] <= helperArr[j]) {
      animations.push([k, helperArr[i]]);
      mainArray[k++] = helperArr[i++];
    } else {
      animations.push([k, helperArr[j]]);
      mainArray[k++] = helperArr[j++];
    }
  }

  while (i <= midIndex) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, helperArr[i]]);
    mainArray[k++] = helperArr[i++];
  }

  while (j <= endIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, helperArr[j]]);
    mainArray[k++] = helperArr[j++];
  }
}

// Bubble Sort Animations
export function bubbleSortAnimations(array) {
  const animations = [];
  bubbleSortHelper(array, animations);
  return animations;
}
function bubbleSortHelper(array, animations) {
  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      const animation = [j, j + 1];
      if (array[j] > array[j + 1]) {
        animation[2] = true;
        swap(array, j, j + 1);
      } else {
        animation[2] = false;
      }
      animation[3] = false;
      animations.push(animation);
      animation[3] = true;
      animations.push(animation);
    }
  }
}

// Quick Sort Visualizer
export function quickSortVisualizer(arr) {
  if (arr.length <= 1) return [];
  const animations = [];
  let start = 0;
  let end = arr.length - 1;
  quickSortHelper(arr, start, end, animations);
  return animations;
}

function quickSortHelper(arr, start, end, animations) {
  if (start >= end) return;
  let index = quickSortPartition(arr, start, end, animations);
  quickSortHelper(arr, start, index - 1, animations);
  quickSortHelper(arr, index + 1, end, animations);
}

function quickSortPartition(arr, start, end, animations) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  animations.push([pivotIndex, -1, true]);
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      animations.push([pivotIndex, i, false]);
      pivotIndex++;
    }
  }
  animations.push([pivotIndex, end, true]);
  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
