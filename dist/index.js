"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WriteFile_1 = require("./classes/WriteFile");
let res = [];
const N_prbability = (arr, start = 0) => {
    if (start === arr.length) {
        const temp = arr.toString().split(',').join('');
        if (!res.includes(temp)) {
            res.push(temp);
        }
    }
    else {
        for (let n = start; n < arr.length; n++) {
            let temp = arr[start];
            arr[start] = arr[n];
            arr[n] = temp;
            N_prbability(arr, start + 1);
            temp = arr[start];
            arr[start] = arr[n];
            arr[n] = temp;
        }
    }
};
const N_prbabilityFile = (n) => {
    const n_data = [...Array(n).keys()].map(i => i + 1);
    const n_zeros = new Array(n).fill(0);
    const data = [...n_data, ...n_zeros];
    N_prbability(data);
    const file = new WriteFile_1.WriteFile(res);
    return file;
};
const n2 = N_prbabilityFile(1);
console.log(`there are ${n2.FileLength} lines in the file`);
//there are 30240lines in the file for n=5
