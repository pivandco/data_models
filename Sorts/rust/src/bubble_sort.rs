// 89 ns/iter (+/- 2)
fn bubble_sort<T>(arr: &Vec<T>) -> Vec<T>
where
    T: Ord + Copy,
{
    let mut arr_copy = arr.clone();

    let end_i = arr_copy.len() - 1;
    for i in 0..end_i {
        let mut was_swap = false;
        let end_j = end_i - i;
        for j in 0..end_j {
            if arr_copy[j] > arr_copy[j + 1] {
                (arr_copy[j], arr_copy[j + 1]) = (arr_copy[j + 1], arr_copy[j]);
                was_swap = true;
            }
        }
        if !was_swap {
            break;
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
    fn test_bubble_sort() {
        let sorted = bubble_sort(&NUMS);

        for i in 0..sorted.len() {
            assert_eq!(sorted[i], i as i32);
        }
    }

    #[bench]
    fn bench_bubble_sort(b: &mut Bencher) {
        b.iter(|| bubble_sort(&NUMS));
    }
}
