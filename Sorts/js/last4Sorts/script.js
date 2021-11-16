function shellSort(arrBase) {
    let list = document.getElementById("result_shell");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let arr = arrBase.slice();
        let l = arr.length;
        let gap = Math.floor(l / 2);
        while (gap >= 1) {
            for (let i = gap; i < l; i++) {
                const current = arr[i];
                let j = i;
                while (j > 0 && arr[j - gap] > current) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = current;
            }
            gap = Math.floor(gap / 2);
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}

function shakeSort(arrBase) {
    let list = document.getElementById("result_shake");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let arr = arrBase.slice();
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            for (var i = left; i < right; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                }
            }
            right--;
            for (let i = right; i > left; i--) {
                if (arr[i] < arr[i - 1]) {
                    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];;
                }
            }
            left++;
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}
function heapSort(arr) {
    let list = document.getElementById("result_heap");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let A = arr.slice();
        let n = A.length, i = Math.floor(n/2), j, k, t;
        while (true)
        { if (i > 0) t = A[--i];
        else { n--;
            if (n == 0) break;
            t = A[n];  A[n] = A[0];
        }
            j = i;  k = j*2+1;
            while (k < n)
            { if (k+1 < n && A[k+1] > A[k]) k++;
                if (A[k] > t)
                { A[j] = A[k];  j = k;  k = j*2+1; }
                else break;
            }
            A[j] = t;
        }
    }
    let end = performance.now() - start;
    let li = document.createElement('li');
    li.innerHTML = end;
    list.appendChild(li);
    return end;
}
function quickSortUtil(A){
    if (A.length == 0) return [];
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++)
    { if (A[ i ] < p) a[a.length] = A[ i ];
    else b[b.length] = A[ i ];
    }
    return quickSortUtil(a).concat( p,quickSortUtil(b) );
}
function quickSort(arr) {
    let list = document.getElementById("result_quick");
    let start = performance.now();
    for (let iters = 0; iters < 10000; iters++) {
        let A = arr.slice();
        quickSortUtil(A);
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
        shellSort(arr);
        shakeSort(arr);
        heapSort(arr);
        quickSort(arr);
    }
}