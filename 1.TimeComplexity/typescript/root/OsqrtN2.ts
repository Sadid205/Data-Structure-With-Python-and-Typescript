import * as readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout 
})
let n:number;
rl.question("Please enter value: ",(input:string)=>{
    n=parseInt(input)
    rl.close()
})

rl.on("close",()=>{
    let s:number = 1;
    let i:number = 1;
    while (s<n){
        console.log(s,i)
        s=s+i
        i++
    }
})