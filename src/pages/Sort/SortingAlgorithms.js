// Merge Sort Animation Algorithm
export function mergeSortAnimations(array) {

	if (array.length <= 1) return array;

	const animations = [];
	const helperArray = array.slice();

	mergeSortHelper(array, helperArray, 0, array.length - 1, animations);

	return animations;
}

function mergeSortHelper(mainArray, helperArray, startIndex, endIndex, animations) {

	if (startIndex === endIndex) return;

	const midIndex = Math.floor((startIndex + endIndex) / 2);

	mergeSortHelper(helperArray, mainArray, startIndex, midIndex, animations);
	mergeSortHelper(helperArray, mainArray, midIndex + 1, endIndex, animations);

	doMerge(mainArray, helperArray, startIndex, midIndex, endIndex, animations);
}

function doMerge(mainArray, helperArr, startIndex, midIndex, endIndex, animations) {

	let k = startIndex, i = startIndex, j = midIndex + 1;

	while (i <= midIndex && j <= endIndex) {
		animations.push([i, j]);
		animations.push([i, j]);
		if (helperArr[i] <= helperArr[j]) {
			animations.push([k, helperArr[i]]);
			mainArray[k++] = helperArr[i++];
		}
		else {
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
	const animations = []
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < (array.length - i - 1); j++) {
			if (array[j] > array[j + 1]) {
				animations.push([[j, j + 1], true])
				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
			else { animations.push([[j, j + 1], false]) }
		}
	}
	return animations;
}

// Insertion Sort Animations

export function insertionSortAnimations(array) {

	// const animations = []
	
	for (let i = 1; i < array.length; i++) {

		let j = i - 1;
		let keyIndex = i;

		while (j !== 0 && array[keyIndex] < array[j]) {
			// animations.push([keyIndex, j, true]);
			
			let temp = array[keyIndex];
			array[keyIndex] = array[j];
			array[j] = temp;

			keyIndex = keyIndex - 1;
			j = j - 1;
		}
		// animations.push([keyIndex, j, false])
	}

	return array;
}