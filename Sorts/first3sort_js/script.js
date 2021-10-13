function insertSort(arr) {
    let list = document.getElementById("result_insert");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let arrCopy = arr.slice();
        for (let i = 1; i < arrCopy.length; i++) {
            for (let j = i; j > 0 && arrCopy[j - 1] > arrCopy[j]; j--) {
                [arrCopy[j - 1],arrCopy[j]]=[arrCopy[j],arrCopy[j-1]];
            }
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}

function selectionSort(arr) {
    let list = document.getElementById("result_selection");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let arrCopy = arr.slice();
        for (let i = 0, l = arrCopy.length, k = l - 1; i < k; i++) {
            let indexMin = i;
            for (let j = i + 1; j < l; j++) {
                if (arrCopy[indexMin] > arrCopy[j]) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                [arrCopy[i], arrCopy[indexMin]] = [arrCopy[indexMin], arrCopy[i]];
            }
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}
function bubbleSort(arr) {
    let list = document.getElementById("result_bubble");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let arrCopy = arr.slice();
        for (let i = 0, endI = arrCopy.length - 1; i < endI; i++) {
            let wasSwap = false;
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arrCopy[j] > arrCopy[j + 1]) {
                    [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
                    wasSwap = true;
                }
            }
            if (!wasSwap) break;
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}

function binSearch(arr, searchItems, testNumbers) {
    let list = document.getElementById("result_bin");
    let averageBinSearch = 0;
    for (let i = 0; i < testNumbers; i++) {
        let start = performance.now();
        for (let iters = 0; iters < 100000; iters++) {
            let left = 0;
            let right = arr.length
            let mid = Math.floor((left + right) / 2)
            do {
                mid = Math.floor((left + right) / 2);
                if (arr[mid] > searchItems[i]) {
                    right = mid;
                } else {
                    left = mid;
                }
            } while (arr[mid] !== searchItems[i]);
        }
        let end = performance.now() - start;

        let li = document.createElement('li');
        li.innerHTML = end;
        list.appendChild(li);
        averageBinSearch += end;
    }
    document.getElementById("binSpan").innerHTML = "Средний результат: " +
        (averageBinSearch / testNumbers).toFixed(2);
}

function getRandom(N) {
    return Math.round(Math.random() * (N - 1)) + 1;

}

function main() {
    let N = prompt("Введите длину массива", "20");

    let testNumbers = 10;
    let arr = new Array(N);
    for (let i = 0; i < testNumbers; i++) {
        for (let i = 0; i < N; i++) {
            arr[i] = getRandom(N);
        }
        console.log(arr);
        insertSort(arr);
        selectionSort(arr);
        bubbleSort(arr);
    }
}