package speedtest

// 4.587 ns/op
func findLinear(needle int, haystack []int) (int, bool) {
	n := len(haystack)
	for i := 0; i < n-1; i++ {
		if haystack[i] == needle {
			return i, true
		}
	}
	return 0, false
}

// 4.701 ns/op
func findFakeLast(needle int, haystack []int) (int, bool) {
	i := 0
	haystack[len(haystack) - 1] = needle

	for ; haystack[i] != needle; i++ {
	}

	if i != len(haystack) - 1 {
		return i, true
	}
	return 0, false
}

// 3.286 ns/op
func findBinary(needle int, haystack []int) (int, bool) {
	i := 0
	j := len(haystack) - 1
	k := j / 2

	for ; haystack[k] != needle && i < j; k = (i + j) / 2 {
		if needle > haystack[k] {
			i = k + 1
		} else {
			j = k - 1
		}
	}

	if haystack[k] == needle {
		return k, true
	} else {
		return 0, false
	}
}
