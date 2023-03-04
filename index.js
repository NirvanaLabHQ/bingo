const seedrandom = require("seedrandom");

const topHundredTokenIds = [
  7639, 3470, 8472, 6909, 2726, 1399, 3799, 1485, 2487, 1911, 1520, 3901, 8409,
  7947, 4055, 5968, 4041, 8924, 9064, 1200, 3349, 1167, 2385, 2829, 3913, 9227,
  9674, 3396, 2050, 2394, 5457, 7555, 1692, 1377, 6516, 9004, 1427, 6428, 1173,
  4868, 86, 6093, 5918, 4933, 9215, 2818, 9951, 7217, 5107, 4697, 6911, 6321,
  9093, 3623, 5161, 2935, 1694, 6168, 1989, 4081, 8810, 7162, 1589, 2598, 2129,
  2663, 2583, 5667, 1102, 4980, 3718, 6137, 2477, 9670, 340, 6383, 9480, 8724,
  2197, 3413, 6962, 5322, 3029, 7601, 9683, 9416, 3547, 432, 8078, 3643, 5369,
  2474, 425, 3875, 7084, 759, 3556, 5123, 3185, 9007,
];

const blockHash =
  "0xf1cc3bca7ef7506caf95b6e4091506856e3d9e22ffd2975bfded49107245f33d";

const seed = blockHash;

const generator = seedrandom(seed);

let selectedTokenIds = [];
let selected = new Set();

for (let i = 0; i < 10; i++) {
  let id = Math.round(generator() * 100) % 100;
  while (selected.has(id)) {
    id = Math.round(generator() * 100) % 100;
  }
  selected.add(id);
  selectedTokenIds.push(topHundredTokenIds[id]);
}

console.log(selectedTokenIds);
