function linearSearch(arr, searchItems, testNumbers) {
    let list = document.getElementById("result_linear");
    let averageLinearSearch=0;
    for (let i=0; i<testNumbers; i++) {
        let start = performance.now();
        for (let iters = 0; iters < 100000; iters++) {
            let j = 0;
            while (arr[j] !== searchItems[i]) {
                j++;
                if (j > arr.length) break;
            }
        }
        let end = performance.now() - start;

        let li = document.createElement('li');
        li.innerHTML = end;
        list.appendChild(li);
        averageLinearSearch+=end;
    }
    document.getElementById("linearSpan").innerHTML="Средний результат: " +
        (averageLinearSearch/testNumbers).toFixed(2);
}
function fictionSearch(arr, searchItems, testNumbers) {
    let list = document.getElementById("result_fiction");
    let averageFictionSearch = 0;
    for (let i = 0; i < testNumbers; i++) {
        let start = performance.now();
        arr.push(searchItems[i]);
        for (let iters = 0; iters < 100000; iters++) {
            let j = 0;
            while (arr[j] !== searchItems[i]) {
                j++;
            }
        }
            let end = performance.now() - start;

            let li = document.createElement('li');
            li.innerHTML = end;
            list.appendChild(li);
            averageFictionSearch += end;

    }
        document.getElementById("fictionSpan").innerHTML = "Средний результат: " +
            (averageFictionSearch / testNumbers).toFixed(2);

}

    function binSearch(arr, searchItems, testNumbers) {
        let list = document.getElementById("result_bin");
        let averageBinSearch = 0;
        for (let i=0; i<testNumbers; i++) {
            let start = performance.now();
            for (let iters = 0; iters < 100000; iters++) {
                let left=0;
                let right=arr.length
                let mid=Math.floor((left+right)/2)
                do{
                    mid=Math.floor((left+right)/2);
                    if (arr[mid]>searchItems[i]){
                        right=mid;
                    }
                    else{
                        left=mid;
                    }
                }while(arr[mid]!==searchItems[i]);
            }
        let end = performance.now() - start;

        let li = document.createElement('li');
        li.innerHTML = end;
        list.appendChild(li);
        averageBinSearch+=end;
    }
        document.getElementById("binSpan").innerHTML = "Средний результат: " +
            (averageBinSearch / testNumbers).toFixed(2);
    }

    function main() {
        let N = prompt("Введите длину массива", "20");
        let arr = new Array(N);
        for (let i = 0; i < N; i++) {
            arr[i] = i + 1;
        }
        let searchItems = new Array(10);
        for (let i = 0; i < 10; i++) {
            searchItems[i] = Math.round(Math.random() * (N - 1)) + 1;
        }

        let testNumbers = 10;
        linearSearch(arr, searchItems, testNumbers);
        fictionSearch(arr, searchItems, testNumbers);
        binSearch(arr, searchItems, testNumbers);
    }