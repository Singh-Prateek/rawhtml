let items = "000001111111122223456448766666".split('').map(x => parseInt(x)).sort();
// let items = "qwertwuxypoiuz".split('').sort();

//let items = "012346789".split('').map(x=> parseInt(x));

function binary_search(itemType, key, low, high) {
    let middle = Math.floor((low + high) / 2);

    if (low > high) {
        return -1;
    }

    if (itemType[middle] == key) {
        return middle;
    }

    if (itemType[middle] > key) {
        return binary_search(itemType, key, low, middle - 1);

    } else {
        return binary_search(itemType, key, middle + 1, high);
    }

}
function binary_search_high(itemType, key, low, high) {

    let middle = Math.floor((low + high) / 2);

    if (low > high) {
        return high;
    }

    if (itemType[middle] > key) {
        return binary_search_high(itemType, key, low, middle - 1);
    } else {
        return binary_search_high(itemType, key, middle + 1, high);
    }

}

function binary_search_low(itemType, key, low, high) {

    let middle = Math.floor((low + high) / 2);

    if (low > high) {
        return low;
    }

    if (itemType[middle] < key) {
        return binary_search_low(itemType, key, middle + 1, high);
    } else {
        return binary_search_low(itemType, key, low, middle - 1);
    }

}

console.log(items.map((s, idx) => `${idx}-${s}`));



const key = 'u'
console.log(`search item : ${key}`);

//let idx = binary_search(items, key, 0, items.length);
//console.log(`search index: ${idx}`);

let low = binary_search_low(items, key, 0, items.length);
let high = binary_search_high(items, key, 0, items.length);

console.log(`range: ${low} -- ${high}`);
