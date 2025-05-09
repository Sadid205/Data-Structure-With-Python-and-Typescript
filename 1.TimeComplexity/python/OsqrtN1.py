import math
n = int(input())
print(int(math.sqrt(n)))
i=1
while i<=int(math.sqrt(n)):
    if n%i==0:
        print(i,end=" ")
        print(n//i,end=" ")
    i+=1
    

