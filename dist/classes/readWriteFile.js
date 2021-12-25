"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadWriteFile = void 0;
class ReadWriteFile {
    constructor(data) {
        // Here we import the File System module of node
        this.fs = require('fs');
        this.data = data;
        this.createFile();
    }
    createFile() {
        this.fs.writeFile(`file${this.data.length}.txt`, this.data, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }
    showFile() {
        this.fs.readFile(`file${this.data.length}.txt`, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    }
}
exports.ReadWriteFile = ReadWriteFile;
