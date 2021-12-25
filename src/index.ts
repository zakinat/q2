import {WriteFile} from './classes/WriteFile'
let res:string[]=[]

const N_prbability=(arr:number[],start:number=0):void=>{
    if(start=== arr.length){
        const temp=arr.toString().split(',').join('')
        if(!res.includes(temp)){res.push(temp)}
    }else{
        for(let n = start; n <arr.length; n++){
            let temp=arr[start]
            arr[start]=arr[n]
            arr[n]=temp
            N_prbability(arr,start+1)
            temp=arr[start]
            arr[start]=arr[n]
            arr[n]=temp
        }
    }

}

const N_prbabilityFile=(n:number)=>{
    const n_data:number[]=[...Array(n).keys()].map(i => i + 1)
    const n_zeros:number[]=new Array(n).fill(0);
    const data:number[]=[...n_data,...n_zeros]
    N_prbability(data)
    const file=new WriteFile(res)
    return file
}


const n2=N_prbabilityFile(1)
console.log(`there are ${n2.FileLength} lines in the file`)
//there are 30240 lines in the file for n=5
