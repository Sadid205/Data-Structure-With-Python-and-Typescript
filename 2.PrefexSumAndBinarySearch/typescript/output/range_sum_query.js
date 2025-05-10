"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var lines = [];
rl.on('line', function (line) {
    lines.push(line);
}).on('close', function () {
    var _a = lines[0].split(" ").map(Number), n = _a[0], q = _a[1];
    var arr = lines[1].split(" ").map(Number);
    var prefex_sum = new Array(n).fill(0);
    prefex_sum[0] = arr[0];
    for (var i = 1; i < n; i++) {
        prefex_sum[i] = prefex_sum[i - 1] + arr[i];
    }
    for (var i = 0; i < q; i++) {
        var _b = lines[2 + i].split(" ").map(Number), l = _b[0], r = _b[1];
        if (l === 1) {
            console.log(prefex_sum[r - 1]);
        }
        else {
            console.log((prefex_sum[r - 1] - prefex_sum[l - 2]));
        }
    }
});
