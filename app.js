// const arr = [6, 7, 1, 4, 3, 2, 2];

const arr = [10, 35, 48, 98, 72, 658, 9453, 4872, 15436, 412, 253, 12, 0, 135, -1];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const a = array[j];
                const b = array[j + 1];
                array[j] = b;
                array[j + 1] = a;
            }
        }
    }

    return array;
}

console.log(bubbleSort(arr));
