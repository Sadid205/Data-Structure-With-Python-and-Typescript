import * as readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines: string[] = []

rl.on('line',(line)=>{
    lines.push(line)
}).on('close',()=>{
    const [n,q] = lines[0].split(" ").map(Number)
    
    const arr:number[] = lines[1].split(" ").map(Number)
    let prefex_sum:number[] = new Array(n).fill(0);
    prefex_sum[0] = arr[0]
    for (let i:number=1;i<n;i++){
        prefex_sum[i]=prefex_sum[i-1]+arr[i]
    }
    for(let i:number=0;i<q;i++){
        let [l,r]:number[] = lines[2+i].split(" ").map(Number)

        if (l===1){
            console.log(prefex_sum[r-1])
        }else{
            console.log((prefex_sum[r-1]-prefex_sum[l-2]))
        }
    }
})




