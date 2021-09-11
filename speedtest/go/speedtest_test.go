package speedtest

import "testing"

func TestFindLinear(t *testing.T) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	result, ok := findLinear(8, haystack)
	if result != 7 || !ok {
		t.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
	}

	_, ok = findLinear(11, haystack)
	if ok {
		t.Fatal(`findLinear(11, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (..., true), expected (..., false)`)
	}
}

func BenchmarkFindLinear(b *testing.B) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	for i := 0; i < b.N; i++ {
		result, ok := findLinear(8, haystack)
		if result != 7 || !ok {
			b.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
		}
	}
}

func TestFindFakeLast(t *testing.T) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1}

	result, ok := findFakeLast(8, haystack)
	if result != 7 || !ok {
		t.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
	}

	_, ok = findFakeLast(11, haystack)
	if ok {
		t.Fatal(`findLinear(11, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (..., true), expected (..., false)`)
	}
}

func BenchmarkFindFakeLast(b *testing.B) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	for i := 0; i < b.N; i++ {
		result, ok := findFakeLast(8, haystack)
		if result != 7 || !ok {
			b.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
		}
	}
}

func TestFindBinary(t *testing.T) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	result, ok := findBinary(8, haystack)
	if result != 7 || !ok {
		t.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
	}

	_, ok = findBinary(11, haystack)
	if ok {
		t.Fatal(`findLinear(11, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (..., true), expected (..., false)`)
	}
}

func BenchmarkFindBinary(b *testing.B) {
	haystack := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	for i := 0; i < b.N; i++ {
		result, ok := findBinary(8, haystack)
		if result != 7 || !ok {
			b.Fatalf(`findLinear(8, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) = (%v, %v), expected (8, true)`, result, ok)
		}
	}
}
