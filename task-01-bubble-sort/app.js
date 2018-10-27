const input = document.querySelector('#sort');
const result = document.querySelector('#result');

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

input.addEventListener('change', () => {
    const value = document.querySelector('#sort').value.split(',');

    result.innerHTML = bubbleSort(value);
})