import each from "jest-each";
import * as funcs from "./speedtest";

each([
  ["linear", funcs.findLinear],
  ["fakeLast", funcs.findFakeLast],
  ["binary", funcs.findBinary],
]).test("%s", (_, func) => {
  expect(func(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(7);
});
