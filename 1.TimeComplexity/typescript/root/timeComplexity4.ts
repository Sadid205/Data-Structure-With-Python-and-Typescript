import * as redline from 'readline'

const rl = redline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let n:number;
let m:number;
let count = 0
// rl.on("line",(input:string)=>{
//     if (count === 0){
//         n = parseInt(input)
//         count++
//     } else if(count===1){
//         m = parseInt(input)
//         rl.close()
//     }
// })
rl.question("Please enter n:",(input:string)=>{
    n=parseInt(input)
    rl.question("Please enter m:",(input:string)=>{
        m=parseInt(input)
        rl.close()
    })
})
rl.on("close",()=>{
    for (let i:number=1;i<=n;i++){
       process.stdout.write(i + " ")
    }
    console.log()
    for (let i:number=1;i<=m;i++){
        process.stdout.write(i + " ")
    }
})
