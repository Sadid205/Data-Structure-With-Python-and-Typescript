import * as readline from 'readline'
const rl = readline.createInterface({
    input:process.stdin
})
let input_data:string = ""
rl.on("line",(line)=>{
    input_data+=line
    if(line.includes("-1")){
        rl.close()
    }
})

class Stack<T>{
    stk:T[]
    constructor(){
        this.stk = []
    }
    push(val:T):void{
        this.stk.push(val)
    }
    pop():void{
        this.stk.pop()
    }
    top():T{
        return this.stk[this.stk.length-1]
    }
    size():number{
        return this.stk.length
    }
    isEmpty():boolean{
        return this.size()===0
    }
}
const stack = new Stack<number>()
rl.on("close",()=>{
    const a = input_data.split(" ").map(Number)
    let i = 0;
    while(true){
        if(a[i]===-1){
            break
        }else{
            stack.push(a[i])
        }
        i++
    }
    while(!stack.isEmpty()){
        process.stdout.write(stack.top() +  " ")
        stack.pop()
    }
    console.log()
})
