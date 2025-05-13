

function pointer(obj:{value:number | null}):void{
    obj.value = null
}

const a = {
    value:400
}

pointer(a)

console.log(a)