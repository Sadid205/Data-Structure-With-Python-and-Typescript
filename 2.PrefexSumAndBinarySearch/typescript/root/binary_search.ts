import * as readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin
})

const input_data:string[] = []

rl.on('line',(line)=>{
    input_data.push(line)
})
rl.on('close',()=>{
    const [n,q]:number[] = input_data[0].split(" ").map(Number)
    const a = input_data[1].split(" ").map(Number).sort((a:number,b:number)=>a-b)
    
    for (let i:number=0;i<q;i++){
        const x = parseInt(input_data[2+i])
        let l = 0;
        let r = n-1;
        let flag = false
        while (l<=r){
            const middle = Math.floor((l+r)/2)
            if (a[middle]===x){
                flag=true;
                break
            }else if (x > a[middle]){
                l=middle+1;
            }else if (x < a[middle]){
                r=middle-1;
            }
        }
        if (flag===true){
            console.log("found")
        } else {
            console.log("not found")
        }
    }
})