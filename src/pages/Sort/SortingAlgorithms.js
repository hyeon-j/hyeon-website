export function mergeSort(array) {
    if (array.length === 1) return array;

    const midIndex = Math.floor(array.length / 2);
    const front = mergeSort(array.slice(0, midIndex));
    const back = mergeSort(array.slice(midIndex));
    const tempArray = []

    let i=0, j=0;
    while (i < front.length && j < back.length) {
        if (front[i] < back[j]) tempArray.push(front[i++])
        else tempArray.push(back[j++])
    }

    while (i < front.length) tempArray.push(front[i++])
    while (j < back.length) tempArray.push(back[j++])

    return tempArray
}