import { Event, Suite } from "benchmark";
import * as funcs from "./speedtest";

const haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suite = new Suite();
(
  [
    ["linear", funcs.findLinear],
    ["fakeLast", funcs.findFakeLast],
    ["binary", funcs.findBinary],
  ] as [string, (needle: number, haystack: number[]) => number | null][]
).forEach(([name, fn]) => {
  suite.add(name, () => {
    fn(8, haystack);
  });
});

suite
  .on("cycle", (event: Event) => {
    console.log(String(event.target));
  })
  .on("complete", function (this: Suite) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  });

suite.run({ async: true });
