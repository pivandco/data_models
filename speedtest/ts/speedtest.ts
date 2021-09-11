// linear x 152,109,796 ops/sec ±0.30% (97 runs sampled)
export function findLinear(needle: number, haystack: number[]): number | null {
  let i = 0;
  const n = haystack.length;

  while (i < n - 1 && haystack[i] != needle) {
    i++;
  }

  return haystack[i] == needle ? i : null;
}

// fakeLast x 150,695,846 ops/sec ±0.33% (94 runs sampled)
export function findFakeLast(
  needle: number,
  haystack: number[]
): number | null {
  let i = 0;
  haystack.push(needle);

  while (haystack[i] != needle) {
    i++;
  }

  haystack.pop();
  return i != haystack.length - 1 ? i : null;
}

// binary x 150,779,112 ops/sec ±0.16% (97 runs sampled)
export function findBinary(needle: number, haystack: number[]): number | null {
  let i = 0;
  let j = haystack.length - 1;
  let k = Math.floor(j / 2);

  while (haystack[k] != needle && i < j) {
    if (needle > haystack[k]) {
      i = k + 1;
    } else {
      j = k - 1;
    }
    k = Math.floor((i + j) / 2);
  }

  return haystack[k] == needle ? k : null;
}
