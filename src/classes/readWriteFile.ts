

export class ReadWriteFile {

    // Here we import the File System module of node
    private fs = require('fs');
    data:string[];
    constructor(data:string[]) {
        this.data=data;
        this.createFile()
     }

    createFile() {

        this.fs.writeFile(`file${this.data.length}.txt`, this.data,  function(err:any) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    showFile() {

        this.fs.readFile(`file${this.data.length}.txt`, function (err:any, data:string) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    }
}