import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let n:number;
rl.question("Please enter value:",(input:string)=>{
    n=parseInt(input)
    rl.close()
})

rl.on("close",()=>{
    for(let i:number=1;i<n;i*=2){
        process.stdout.write(i + " ")
    }
})
