import sys

input_data = sys.stdin.read().strip().splitlines()
n,q = map(int,input_data[0].split(" "))

arr = list(map(int,input_data[1].split(" ")))

prefix_sum = [0] * n
prefix_sum[0]=arr[0]
for i in range(1,n):
    prefix_sum[i] = prefix_sum[i-1] + arr[i]

for i in range(0,q):
    l,r = list(map(int,input_data[2+i].split(" ")))
    l=l-1
    r=r-1
    if l==0:
        print(prefix_sum[r])
    else:
        print(prefix_sum[r]-prefix_sum[l-1])


