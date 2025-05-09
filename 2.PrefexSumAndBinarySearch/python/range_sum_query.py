x = input()
n,q = list(map(int,x.split(" ")))
a = input()
arr = list(map(int,a.split(" ")))
l = len(arr)
prefix_sum = [0] * n
prefix_sum[0]=arr[0]
for i in range(1,l):
    prefix_sum[i] = prefix_sum[i-1] + arr[i]

for i in range(1,q+1):
    y = input()
    l,r = list(map(int,y.split(" ")))
    l=l-1
    r=r-1
    if l==0:
        print(prefix_sum[r])
    else:
        print(prefix_sum[r]-prefix_sum[l-1])


