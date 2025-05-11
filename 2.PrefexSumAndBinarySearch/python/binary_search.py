import sys 

input_data = sys.stdin.read().strip().splitlines()

n,q = map(int,input_data[0].split(" "))
a = sorted(map(int,input_data[1].split(" ")))

for i in range(0,q):
    x = int(input_data[2+i])
    l = 0
    r = n-1
    flag = False
    while l<=r:
        middle = (l+r)//2
        if a[middle] == x:
            flag=True
            break
        elif x > a[middle]:
            l=middle+1
        elif x < a[middle]:
            r=middle-1
    if flag==True:
        print('found')
    else :
        print('not found')




