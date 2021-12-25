"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readWriteFile_1 = require("./classes/readWriteFile");
const data = ['5string'];
const n5 = new readWriteFile_1.ReadWriteFile(data);
n5.showFile();
