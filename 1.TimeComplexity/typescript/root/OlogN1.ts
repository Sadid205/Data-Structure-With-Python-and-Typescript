import * as readline from 'readline'
{
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    let n:number;
    rl.question("Please Input value n:",(input:string)=>{
        n=parseInt(input)
        rl.close()
    })
    rl.on("close",()=>{
        for(let i:number=n;i>1;i=Math.floor(i/2)){
            process.stdout.write(i + " ")
        }
    })
}

