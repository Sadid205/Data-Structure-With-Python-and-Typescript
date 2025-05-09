
// O(N) Time Complexity

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line",(input:string)=>{
    let n:number;
    n=parseInt(input)
    rl.close()
    for (let i:number=0;i<=n;i++){
        console.log(i)
    }
})


