# Add 2 numbers
def add(x, y):
    return x + y

# Subtract 2 numbers
def subtract(x, y):
    return x - y

# Multiply 2 numbers
def multiply(x, y):
    if x == 0 or y == 0 or (x == 0 and y == 0):
        return 0
    return x * y

# Divide 2 numbers
def divide(x, y):
    if y == 0:
        return "Cannot divide by zero"
    return x / y

# Factorial of a number
def factorial(x):
    if x < 0:
        return "Complex Factorial"
    elif x == 0 or x == 1:
        return 1
    else:
        return x * factorial(x - 1)

# Percentage of a number
def percentage(x):
    return x / 100

# Power of number
def powerNumber(x, y):
    if y == 0:
        return 1
    elif y == 1:
        return x
    elif y < 0:
        return 1 / (x ** abs(y))
    return x ** y

# Square root of a number
def squareRoot(x):
    if x < 0:
        return "Complex Square Root exists!"
    elif x == 0 or x == 1:
        return x
    return x ** 0.5

# Cube root of a number
def cubeRoot(x):
    if x < 0:
        return -1 * (x ** (1 / 3))
    elif x == 0 or x == 1:
        return x
    return x ** (1 / 3)

# User input
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Select operation:")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")
print("5. Factorial")
print("6. Percentage")
print("7. Exponent")
print("8. Square root")
print("9. Cube root")

choice = input("Enter choice (1/2/3/4/5/6/7/8/9): ")

if choice in ('1', '2', '3', '4', '5', '6', '7', '8', '9'):
    if choice == '1':
        print("Result:", add(num1, num2))
    elif choice == '2':
        print("Result:", subtract(num1, num2))
    elif choice == '3':
        print("Result:", multiply(num1, num2))
    elif choice == '4':
        print("Result:", divide(num1, num2))
    elif choice == '5':
        print("Result:", factorial(num1))
        print("Result:", factorial(num2))
    elif choice == '6':
        print("Result:", percentage(num1))
        print("Result:", percentage(num2))
    elif choice == '7':
        exponent = int(input("Enter the exponent: "))
        print("Result:", powerNumber(num1, exponent))
        print("Result:", powerNumber(num2, exponent))
    elif choice == '8':
        print("Result:", squareRoot(num1))
        print("Result:", squareRoot(num2))
    elif choice == '9':
        print("Result:", cubeRoot(num1))
        print("Result:", cubeRoot(num2))
else:
    print("Invalid input")
