def modular_power(a, b, m):
    power = pow(a, b)
    modular = pow(a, b, m)
    print(power)
    print(modular)

a = int(input())
b = int(input())
m = int(input())

modular_power(a, b, m)