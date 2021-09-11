#![feature(test)]
#![allow(dead_code)]

extern crate test;

// 4 ns/iter
fn find_linear<T: Copy + Eq>(haystack: &Vec<T>, needle: T) -> Option<usize> {
    let mut i = 0usize;
    let n = haystack.len();
    while i < n - 1 && haystack[i] != needle {
        i += 1;
    }
    if haystack[i] == needle {
        Some(i)
    } else {
        None
    }
}

// 3 ns/iter
fn find_fake_last<T: Copy + Eq>(haystack: &mut Vec<T>, needle: T) -> Option<usize> {
    let mut i = 0usize;
    haystack.push(needle);

    while haystack[i] != needle {
        i += 1;
    }

    let result = if i != haystack.len() - 1 {
        Some(i)
    } else {
        None
    };

    haystack.pop();
    result
}

// 1 ns/iter
fn find_binary<T: Copy + Eq + Ord>(haystack: &Vec<T>, needle: T) -> Option<usize> {
    let mut i = 0usize;
    let mut j = haystack.len() - 1;
    let mut k = j / 2;

    while haystack[k] != needle && i < j {
        if needle > haystack[k] {
            i = k + 1;
        } else {
            j = k - 1;
        }
        k = (i + j) / 2;
    }

    if haystack[k] == needle {
        Some(k)
    } else {
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test::Bencher;

    #[test]
    fn test_linear() {
        let haystack = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        assert_eq!(find_linear(&haystack, 8), Some(7));
        assert_eq!(find_linear(&haystack, 11), None);
    }

    #[bench]
    fn bench_linear(b: &mut Bencher) {
        let haystack = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        b.iter(|| find_linear(&haystack, 8));
    }

    #[test]
    fn test_fake_last() {
        let mut haystack = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        assert_eq!(find_fake_last(&mut haystack, 8), Some(7));
        assert_eq!(find_fake_last(&mut haystack, 11), None);
    }

    #[bench]
    fn bench_fake_last(b: &mut Bencher) {
        let mut haystack = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        b.iter(|| find_fake_last(&mut haystack, 8));
    }

    #[test]
    fn test_binary() {
        let haystack = vec![1usize, 2usize, 3usize, 4usize, 5usize, 6usize, 7usize, 8usize, 9usize, 10usize];

        assert_eq!(find_binary(&haystack, 8), Some(7));
        assert_eq!(find_binary(&haystack, 11), None);
    }

    #[bench]
    fn bench_binary(b: &mut Bencher) {
        let haystack = vec![1usize, 2usize, 3usize, 4usize, 5usize, 6usize, 7usize, 8usize, 9usize, 10usize];

        b.iter(|| find_binary(&haystack, 8));
    }
}
