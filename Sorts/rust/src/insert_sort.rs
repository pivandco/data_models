// 87 ns/iter (+/- 2)
fn insert_sort<T>(arr: &Vec<T>) -> Vec<T>
where
    T: Ord + Copy,
{
    let mut arr_copy = arr.clone();
    for i in 1..arr.len() {
        let mut j = i;
        while j > 0 && arr_copy[j - 1] > arr_copy[j] {
            (arr_copy[j - 1], arr_copy[j]) = (arr_copy[j], arr_copy[j - 1]);
            j -= 1;
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
    fn test_insert_sort() {
        let sorted = insert_sort(&NUMS);

        for i in 0..sorted.len() {
            assert_eq!(sorted[i], i as i32);
        }
    }

    #[bench]
    fn bench_insert_sort(b: &mut Bencher) {
        b.iter(|| insert_sort(&NUMS));
    }
}
