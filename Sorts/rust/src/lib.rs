#![allow(dead_code)]
#![feature(destructuring_assignment)]
#![feature(test)]

#[cfg(test)]
extern crate test;

#[cfg(test)]
#[macro_use]
extern crate lazy_static;

mod insert_sort;
mod selection_sort;
mod bubble_sort;
// mod binary_search;

#[cfg(test)]
lazy_static! {
    static ref NUMS: Vec<i32> = vec![9, 8, 6, 4, 7, 2, 10, 0, 5, 3, 1];
}

#[cfg(test)]
mod tests {
    use crate::NUMS;
    use test::Bencher;

    // 58 ns/iter (+/- 2)
    #[bench]
    fn bench_builtin_sort(b: &mut Bencher) {
        b.iter(|| {
            // Другие сортировки тоже дублируют массив, все по честному
            let mut arr_copy = NUMS.clone();
            arr_copy.as_mut_slice().sort();
        });
    }
}