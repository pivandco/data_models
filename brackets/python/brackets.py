BRACKETS = {
    '{': '}',
    '[': ']',
    '(': ')',
}
bracket_stack = []

def match_fail():
    print('Скобки не совпадают')
    exit()

equation = input('Уравнение: ')

for char in equation:
    if char in BRACKETS.keys():
        bracket_stack.append(char)
    if char in BRACKETS.values():
        if BRACKETS[bracket_stack[-1]] != char:
            match_fail()
        bracket_stack.pop()

if bracket_stack:
    match_fail()
else:
    print('Скобки совпадают')