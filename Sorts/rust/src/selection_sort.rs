// 153 ns/iter (+/- 9)
fn selection_sort<T>(arr: &Vec<T>) -> Vec<T>
where
    T: Ord + Copy,
{
    let mut arr_copy = arr.clone();

    let l = arr.len();
    let k = l - 1;
    for i in 0..k {
        let mut index_min = i;
        for j in (i+1)..l {
            if arr_copy[index_min] > arr_copy[j] {
                index_min = j;
            }
        }
        if index_min != i {
            (arr_copy[i], arr_copy[index_min]) = (arr_copy[index_min], arr_copy[i]);
        }
    }
    arr_copy
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::NUMS;
    use test::Bencher;

    #[test]
    fn test_selection_sort() {
        let sorted = selection_sort(&NUMS);

        for i in 0..sorted.len() {
            assert_eq!(sorted[i], i as i32);
        }
    }

    #[bench]
    fn bench_selection_sort(b: &mut Bencher) {
        b.iter(|| selection_sort(&NUMS));
    }
}
