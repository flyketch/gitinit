ab = {
    'Swaroop': 'swaroop@gmail.com',
    'Larry': 'larry@hotmail.com',
    'Steve': 'steve@icloud.com',
    'Max': 'max@gmail.com'
}

print("Swaroop's address is", ab['Swaroop'])

#删除一对键值配对
del ab['Larry']

print('\nThere are {} contacts in the address-book\n'.format(len(ab)))

for name, address in ab.items():
    print('Contact {} at {}'.format(name, address))

ab['Guido'] = 'guido@python.org'

if 'Guido' in ab:
    print("\n Guido's address is", ab['Guido'])
