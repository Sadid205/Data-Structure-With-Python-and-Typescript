import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const askQuestion = (question:string):Promise<string> =>{
    return new Promise((resolve)=>{
        rl.question(question,(answer)=>{
            resolve(answer)
        })
    })
}

// let n:number;
// let q: number;

const main = async() =>{
    const x = await askQuestion('')
    const [n,q] = x.split(" ").map((n:string):number=>parseInt(n))
    const a = await askQuestion('')
    const arr:number[] = a.split(" ").map((n:string)=>parseInt(n))
    let prefex_sum:number[] = new Array(n).fill(0);
    prefex_sum[0] = arr[0]
    for (let i:number=1;i<n;i++){
        prefex_sum[i]=prefex_sum[i-1]+arr[i]
    }
    for(let i:number=0;i<q;i++){
        const y = await askQuestion('')
        let [l,r]:number[] = y.split(" ").map((n:string)=>parseInt(n))
    
        if (l===1){
            console.log(prefex_sum[r-1])
        }else{
            console.log((prefex_sum[r-1]-prefex_sum[l-2]))
        }
    }
    
    rl.close()
}

main().catch((err)=>console.log(err))