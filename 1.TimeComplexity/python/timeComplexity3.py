# Reverse a list 

# O(N) Complexity
a = [1,56,89,40,45,89]

c = a[::-1]
print(c)


# O(N) Complexity but slightly better.
n = len(a)
for i in range(0,int(n/2)):
    temp = a[i]
    a[i] = a[n-i-1]
    a[n-i-1] = temp
print(a)


