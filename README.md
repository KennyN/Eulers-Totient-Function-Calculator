# Euler's Totient Function (phi) Recursive Algorithm

This repository contains a JavaScript implementation of Euler's Totient function (phi) using a recursive algorithm. The code calculates the number of integers up to a given integer `n` that are relatively prime to `n`, and iteratively finds the value of `n` where the totient function equals 10.

## Features

- **Euler's Totient Function**: Calculates the totient function `phi(n)` for a given `n`.
- **Recursive Calculation**: Uses a recursive approach to determine `phi(n)` values.
- **Greatest Common Divisor (GCD)**: Utilizes the Euclidean algorithm to compute the GCD, helping to identify relatively prime numbers.
- **Iterative Search**: Finds the smallest integer `n` for which `phi(n)` equals 10.

## Code Description

### `phi(n, counter)`

This function computes the Euler's Totient function for a given integer `n`. It:
1. Initializes an array `track` to store numbers relatively prime to `n`.
2. Checks if `n` is 1 and increments the counter, printing the result.
3. Iterates through numbers from 1 to `n`, checking if each number is relatively prime to `n` using the `gcd` function.
4. Recursively calls itself with the length of the `track` array until `n` is reduced to 1.
5. Prints and returns the counter.

### `gcd(x, y)`

This function computes the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm:
1. Converts `x` and `y` to their absolute values.
2. Repeatedly replaces `y` with `x % y` until `y` becomes zero.
3. Returns the GCD.

### Main Execution

The script:
1. Initializes `n` to 1 and prints the result of `phi(n, 0)`.
2. Enters an infinite loop to find the smallest integer `n` such that `phi(n)` equals 10.
3. Prints a message and breaks the loop when `phi(n)` equals 10.
4. Increments `n` and continues the search if `phi(n)` does not equal 10.

## Usage

To run the code, simply execute the JavaScript file in a Node.js environment:

```bash
node index.js
