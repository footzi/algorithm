const input = document.querySelector('#sort');
const result = document.querySelector('#result');

function sortSelect(array) {
    let temp = 0;

    for (let i = 0; i < array.length; i++){
        let min = i;
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                min = j;
        }

        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

input.addEventListener('change', () => {
    const value = document.querySelector('#sort').value.split(',');

    result.innerHTML = sortSelect(value);
})