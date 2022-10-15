import React, { useState, useRef, Link, useEffect } from "react";
import "./Sort.css";
import {
    mergeSortAnimations,
    bubbleSortAnimations,
    insertionSortAnimations,
    quickSortVisualizer,
} from "./SortingAlgorithms";

import { Howl, Howler } from "howler";

import Augh from "./Audio/augh.mp3";

const MAIN_COLOR = "#EAE3D2";
const CHANGE_COLOR = "red";

export default function Sort() {
    const [array, setArray] = useState([]);
    const [value, setValue] = useState(window.innerWidth / 4 - 20);
    const [speed, setSpeed] = useState(0.5);

    function resetArray() {
        const arr = [];

        for (let i = 0; i < value; i++) {
            arr.push(randomInt(10, 750));
        }

        setArray(arr);
    }

    // When Component Mounts
    useEffect(() => {
        resetArray();
    }, []);

    function playSound() {
        var sound = new Howl({
            src: ["./Audio/augh.mp3"],
        });

        sound.play();
    }

    function mergeSortButton() {
        const animations = mergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementsByClassName("sort__array__bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? CHANGE_COLOR : MAIN_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, (i * speed) / 3);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    playSound();
                }, (i * speed) / 3);
            }
        }
    }

    function bubbleSortButton() {
        const animations = bubbleSortAnimations(array.slice());
        for (let i = 0; i < animations.length; i++) {
            let arrayBars = document.getElementsByClassName("sort__array__bar");
            let [barOneIndex, barTwoIndex, swap] = animations[i];
            setTimeout(() => {
                if (i % 2 === 1) {
                    const barOne = arrayBars[barOneIndex];
                    const barTwo = arrayBars[barTwoIndex];

                    barOne.style.backgroundColor = MAIN_COLOR;
                    barTwo.style.backgroundColor = MAIN_COLOR;
                } else {
                    const barOne = arrayBars[barOneIndex];
                    const barTwo = arrayBars[barTwoIndex];

                    barOne.style.backgroundColor = CHANGE_COLOR;
                    barTwo.style.backgroundColor = CHANGE_COLOR;

                    if (swap) {
                        let barOneHeight = barOne.offsetHeight;
                        let barTwoHeight = barTwo.offsetHeight;

                        barOne.style.height = `${barTwoHeight}px`;
                        barTwo.style.height = `${barOneHeight}px`;
                    }
                }
            }, (i * speed) / 2);
        }
    }

    function quickSortButton() {
        const animations = quickSortVisualizer(array);
        let first = true;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars =
                document.getElementsByClassName("sort__array__bar");
            const [pivotIndex, swapIndex, isPivot] = animations[i];
            setTimeout(() => {
                if (isPivot && first) {
                    const pivotBar = arrayBars[pivotIndex];
                    const pivotBarStyle = pivotBar.style;
                    pivotBarStyle.backgroundColor = CHANGE_COLOR;
                    first = false;
                } else if (isPivot && !first) {
                    const pivotBar = arrayBars[pivotIndex];
                    const pivotBarStyle = pivotBar.style;
                    const swapBar = arrayBars[swapIndex];
                    const swapBarStyle = swapBar.style;
                    let pivotBarHeight = pivotBar.offsetHeight;
                    let swapBarHeight = swapBar.offsetHeight;
                    pivotBarStyle.height = `${swapBarHeight}px`;
                    swapBarStyle.height = `${pivotBarHeight}px`;
                    for (let j = 0; j < arrayBars.length; j++) {
                        const bar = arrayBars[j];
                        bar.style.backgroundColor = MAIN_COLOR;
                    }
                    first = true;
                } else {
                    const pivotBar = arrayBars[pivotIndex];
                    const pivotBarStyle = pivotBar.style;
                    const swapBar = arrayBars[swapIndex];
                    const swapBarStyle = swapBar.style;
                    pivotBarStyle.backgroundColor = CHANGE_COLOR;
                    swapBarStyle.backgroundColor = CHANGE_COLOR;
                    let pivotBarHeight = pivotBar.offsetHeight;
                    let swapBarHeight = swapBar.offsetHeight;
                    pivotBarStyle.height = `${swapBarHeight}px`;
                    swapBarStyle.height = `${pivotBarHeight}px`;
                }
            }, i * speed);
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <div className="sort__container">
                <div className="sort__bar__container">
                    {array.map((val, index) => (
                        <div
                            className="sort__array__bar"
                            key={index}
                            style={{
                                backgroundColor: MAIN_COLOR,
                                height: `${val}px`,
                                width: `${
                                    window.innerWidth / (value + 20) - 2
                                }px`,
                            }}
                        ></div>
                    ))}
                </div>
                <nav className="sort__controls">
                    <button className="sort__buttons" onClick={resetArray}>
                        GENERATE NEW ARRAY
                    </button>
                    <button
                        className="sort__buttons"
                        onClick={() => mergeSortButton()}
                    >
                        MERGE SORT
                    </button>
                    <button
                        className="sort__buttons"
                        onClick={() => bubbleSortButton()}
                    >
                        BUBBLE SORT
                    </button>
                    <button
                        className="sort__buttons"
                        onClick={() => quickSortButton()}
                    >
                        QUICK SORT
                    </button>
                    <div className="sort__range__container">
                        <div className="sort__range__info">
                            <p>Number of Bars:</p>
                            <p>Animation Speed:</p>
                        </div>
                        <div className="sort__range">
                            <input
                                type="range"
                                value={value}
                                min={10}
                                max={window.innerWidth / 4 - 20}
                                onChange={(e) => {
                                    setValue(e.target.valueAsNumber);
                                    resetArray();
                                }}
                                className="sort__range__bar"
                            />

                            <input
                                type="range"
                                value={speed}
                                min={0.5}
                                max={1000}
                                onChange={(e) => {
                                    setSpeed(e.target.valueAsNumber);
                                }}
                                className="sort__range__bar"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

// Random Number Interval from Min to Max
function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

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

// Used to test My Insertion sort algorithm
// function insertionSortTest() {

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
//     const mySorted = insertionSortAnimations(arr.slice());
//     console.log(arrayEqual(jsSorted, mySorted));
//   }
// }
