"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin
});
var input_data = [];
rl.on('line', function (line) {
    input_data.push(line);
});
rl.on('close', function () {
    var _a = input_data[0].split(" ").map(Number), n = _a[0], q = _a[1];
    var a = input_data[1].split(" ").map(Number).sort(function (a, b) { return a - b; });
    for (var i = 0; i < q; i++) {
        var x = parseInt(input_data[2 + i]);
        var l = 0;
        var r = n - 1;
        var flag = false;
        while (l <= r) {
            var middle = Math.floor((l + r) / 2);
            if (a[middle] === x) {
                flag = true;
                break;
            }
            else if (x > a[middle]) {
                l = middle + 1;
            }
            else if (x < a[middle]) {
                r = middle - 1;
            }
        }
        if (flag === true) {
            console.log("found");
        }
        else {
            console.log("not found");
        }
    }
});
