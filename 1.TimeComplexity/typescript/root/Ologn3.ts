import * as readline from 'readline'
{
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
        const k:number = 2;
        let i:number = 0
        while (i<n){
            process.stdout.write(i+" ")
            i=(i+1)*2
        }

    })
}