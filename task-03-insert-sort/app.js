const input = document.querySelector('#sort');
const result = document.querySelector('#result');

function insertSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];

        for (var j = i - 1; j > -1 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = currentValue;

      };
    
      return array;
}

input.addEventListener('change', () => {
    const value = document.querySelector('#sort').value.split(',');

    const inputArray = value.map((item) => {
        return Number(item);
    });

    result.innerHTML = insertSort(inputArray);
})