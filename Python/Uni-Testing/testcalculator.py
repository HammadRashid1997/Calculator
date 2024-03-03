import unittest
from calculator import add, subtract, multiply, divide, factorial, percentage, powerNumber, squareRoot, cubeRoot

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(3, 5), 8)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
        self.assertEqual(add(-3, -4), -7)

    def test_subtract(self):
        self.assertEqual(subtract(5, 3), 2)
        self.assertEqual(subtract(1, 5), -4)
        self.assertEqual(subtract(0, 0), 0)

    def test_multiply(self):
        self.assertEqual(multiply(3, 4), 12)
        self.assertEqual(multiply(-2, 5), -10)
        self.assertEqual(multiply(0, 0), 0)

    def test_divide(self):
        self.assertEqual(divide(8, 4), 2)
        self.assertEqual(divide(5, 2), 2.5)
        self.assertEqual(divide(10, 0), "Cannot divide by zero")

    def test_factorial(self):
        self.assertEqual(factorial(0), 1)
        self.assertEqual(factorial(1), 1)
        self.assertEqual(factorial(-1), "Complex Factorial")
        self.assertEqual(factorial(5), 120)

    def test_percentage(self):
        self.assertEqual(percentage(0), 0)
        self.assertEqual(percentage(-5), -0.05)
        self.assertEqual(percentage(70), 0.7)
        self.assertEqual(percentage(248), 2.48)

    def test_powerNumber(self):
        self.assertEqual(powerNumber(2, 2), 4)
        self.assertEqual(powerNumber(2, 0), 1)
        self.assertEqual(powerNumber(2, -2), 0.25)
        self.assertEqual(powerNumber(-2, 3), 8)

    def test_squareRoot(self):
        self.assertEqual(squareRoot(4), 2)
        self.assertEqual(squareRoot(0), 0)
        self.assertEqual(squareRoot(1), 1)
        self.assertEqual(squareRoot(-2), "Complex Root Exists!")

    def test_cubeRoot(self):
        self.assertEqual(cubeRoot(64), 4)
        self.assertEqual(cubeRoot(0), 0)
        self.assertEqual(cubeRoot(1), 1)
        self.assertEqual(cubeRoot(-8), -2)


if __name__ == '__main__':
    unittest.main()
