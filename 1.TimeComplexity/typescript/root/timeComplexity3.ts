


const a:number[] =  [1,56,89,40,45,89]
// a.reverse()
// console.log(a)

const n = a.length

for (let i:number=0;i<n/2;i++){
    const temp = a[i]
    a[i] = a[n-i-1]
    a[n-i-1] = temp
}
console.log(a)


