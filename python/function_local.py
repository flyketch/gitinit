x = 24
def func(x):
    print('x is', x)
    x = 18
    print('changed local x to', x)
func(x)
print('x is still', x)
