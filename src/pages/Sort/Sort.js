import React, { useState, useRef, Link, useEffect } from 'react'
import './Sort.css'
import { mergeSortAnimations, bubbleSortAnimations, insertionSortAnimations } from './SortingAlgorithms';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 300;

const MAIN_COLOR = 'red';
const CHANGE_COLOR = 'blue';

export default function Sort() {

  const [array, setArray] = useState([]);

  function resetArray() {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) { arr.push(randomInt(10, 750)) }
    setArray(arr)
  }

  // When Component Mounts
  useEffect(() => {
    resetArray();
  }, []);

  function mergeSortButton() {
    const animations = mergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('sort__array__bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? CHANGE_COLOR : MAIN_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  function bubbleSortButton() {

    const animations = bubbleSortAnimations(array.slice());

    for (let i = 0; i < animations.length; i++) {
      
      const animation = animations[i];

      let [barOneIndex, barTwoIndex] = animation[0];
      let isSwap = animation[1];

      let arrayBars = document.getElementsByClassName('sort__array__bar');

      let barOne = arrayBars[barOneIndex]
      let barTwo = arrayBars[barTwoIndex]
      let barOneStyle = barOne.style;
      let barTwoStyle = barTwo.style;

      barOneStyle.backgroundColor = CHANGE_COLOR;
      barTwoStyle.backgroundColor = CHANGE_COLOR;

      setTimeout(() => {
        if (isSwap) {
          let barOneHeight = arrayBars[barOneIndex].offsetHeight;
          let barTwoHeight = arrayBars[barTwoIndex].offsetHeight;
          barOneStyle.height = `${barTwoHeight}px`;
          barTwoStyle.height = `${barOneHeight}px`;
        }
      }, i * ANIMATION_SPEED_MS);

      barOneStyle.backgroundColor = MAIN_COLOR;
      barTwoStyle.backgroundColor = MAIN_COLOR;
    }
  }

  function insertionSortButton() {
    insertionSortTest()
  }

  return (
    <>
      <div className='sort__container'>
        <div className='sort__bar__container'>
          {array.map((val, index) => (
            <div
              className='sort__array__bar'
              key={index}
              style={{ backgroundColor: MAIN_COLOR, height: `${val}px` }}></div>
          ))}
        </div>
        <nav className='sort__controls'>
          <button className='' onClick={resetArray}>Generate New Array</button>
          <button className='' onClick={() => mergeSortButton()}>Merge Sort</button>
          <button className='' onClick={() => bubbleSortButton()}>Bubble Sort</button>
          <button className='' onClick={() => insertionSortButton()}>Insertion Sort</button>
        </nav>
      </div>
    </>
  )
}

// Random Number Interval from Min to Max
function randomInt(min, max) { return (min + Math.floor(Math.random() * (max - min))) }


// // Used to test My merge sort algorithm
// function mergeSortTest() {
//   function arrayEqual(arr1, arr2) {
//     if (arr1.length != arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] != arr2[i]) return false
//     }
//     return true
//   }

//   for (let i = 0; i < 1000; i++) {
//     const arr = [];
//     for (let i = 0; i < 301; i++) { arr.push(randomInt(-10000, 10000)) }
//     const jsSorted = arr.slice().sort((a, b) => a - b);
//     const mySorted = mergeSort(arr.slice());
//     console.log(arrayEqual(jsSorted, mySorted));
//   }
// }

// Used to test My Bubble sort algorithm
// function bubbleSortTest() {

//   function arrayEqual(arr1, arr2) {
//     if (arr1.length != arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] != arr2[i]) return false
//     }
//     return true
//   }

//   for (let i = 0; i < 1000; i++) {
//     const arr = [];
//     for (let i = 0; i < 301; i++) { arr.push(randomInt(-10000, 10000)) }
//     const jsSorted = arr.slice().sort((a, b) => a - b);
//     const mySorted = bubbleSortAnimations(arr.slice());
//     console.log(arrayEqual(jsSorted, mySorted));
//   }
// }

// Used to test My Bubble sort algorithm
function insertionSortTest() {

  function arrayEqual(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) return false
    }
    return true
  }

  for (let i = 0; i < 1000; i++) {
    const arr = [];
    for (let i = 0; i < 301; i++) { arr.push(randomInt(-10000, 10000)) }
    const jsSorted = arr.slice().sort((a, b) => a - b);
    const mySorted = insertionSortAnimations(arr.slice());
    console.log(arrayEqual(jsSorted, mySorted));
  }
}