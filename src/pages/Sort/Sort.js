import React, { useState, useRef, Link, useEffect } from 'react'
import './Sort.css'

import { mergeSort } from './SortingAlgorithms';

export default function Sort() {

  const [array, setArray] = useState([]);

  function resetArray() {
    const arr = [];
    for (let i = 0; i < 300; i++) { arr.push(randomInt(10, 750)) }
    setArray(arr)
  }

  // When Component Mounts
  useEffect(() => {
    resetArray();
  }, []);
  
  function mergeSortButton() {
    mergeSortTest();
  }

  return (
    <>
      <div className='sort__container'>        
        <div className='sort__bar__container'>
          {array.map((val, index) => (
            <div 
            className='sort__array__bar' 
            key={index}
            style={{height: `${val}px`}}></div>
          ))}
        </div>
        <nav className='sort__controls'>
          <button className='' onClick={resetArray}>Generate New Array</button>
          <button className='' onClick={mergeSortButton}>Merge Sort</button>
        </nav>
      </div>
    </>
  )
}

// Random Number Interval from Min to Max
function randomInt(min, max) { return (min + Math.floor(Math.random() * (max - min))) }


// Used to test My merge sort algorithm
function mergeSortTest () {
  function arrayEqual (arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) return false
    }
    return true
  }

  for (let i = 0; i < 1000; i++) {
    const arr = [];
    for (let i = 0; i < 301; i++) { arr.push(randomInt(-10000, 10000)) }
    const jsSorted = arr.slice().sort((a,b) => a - b);
    const mySorted = mergeSort(arr.slice());
    console.log(arrayEqual(jsSorted, mySorted));
  }
}