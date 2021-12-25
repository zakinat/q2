"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteFile = void 0;
class WriteFile {
    constructor(data) {
        // Here we import the File System module of node
        this.fs = require('graceful-fs');
        this.data = data;
        this.fileName = `N${this.data[0].length / 2}.txt`;
        this.FileLength = this.data.length;
        this.createFile();
    }
    createFile() {
        this.data.map((line) => {
            this.fs.appendFile(this.fileName, line + '\n', function (err) {
                if (err)
                    return console.log(err);
            });
        });
    }
}
exports.WriteFile = WriteFile;
