export class WriteFile {

    // Here we import the File System module of node
    private fs = require('graceful-fs');
    data:string[];
    fileName:string;
    FileLength:number;
    constructor(data:string[]) {
        this.data=data;
        this.fileName=`N${this.data[0].length/2}.txt`;
        this.FileLength=this.data.length
        this.createFile();
     }
     
    createFile() {

        
          this.data.map((line)=>{
              this.fs.appendFile(this.fileName,line+'\n',function(err:any){
                if (err) return console.log(err);
              })
          })
    }
}