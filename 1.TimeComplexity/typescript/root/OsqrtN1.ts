import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout 
})

let n:number;
rl.question("Please input value:",(input:string)=>{
    n = parseInt(input)
    rl.close()
})

rl.on("close",()=>{
    for (let i:number=0;i<=Math.sqrt(n);i++){
        if (n%i==0){
            process.stdout.write(i + " ")
            process.stdout.write(n/i + " ")
        }
    }
})