---
slug: atcoder-90day-challenge-day-2
title: "[Atcoder typical 90] Day 02 - Encyclopedia of Parentheses"
date: 2023-04-12
authors: clover
tags: [Algorithm, Atcoder, Binary Search]
keywords: [Algorithm, Atcoder, Binary Search]
---
### Question description
Output all correct bracket sequences of length $N$ in lexicographic order.

A correct bracket sequence is defined as follows:

- `()` is a correct bracket sequence.
- When $S$ is a correct bracket sequence, the string `(` + $S$ + `)` is a correct bracket sequence.
- When $S$ and $T$ are correct bracket sequences, the string $S$ + $T$ is a correct bracket sequence.
- All other strings are not correct bracket sequences.
<!-- truncate -->

For example,
```
    ()()
    (()())(())
    ()()()()()()()()
```
are correct bracket sequences, but
```
    )(
    )))()(((
    ((((a))))
```
are not correct bracket sequences.

Furthermore, it is assumed that `(` comes before `)` in lexicographic order.

**Constraints**
$$
\begin{align*}
&1 \leq N \leq 20 \\
&N \text{ is an integer}
\end{align*}
$$
**Input**  
The input is given in the following format from standard input:
```
    N
```

**Output**  
Output all correct bracket sequences of length $N$ in lexicographic order, separated by line breaks.

### Approach
Because bracket sequences consist only of the symbols `(` and `)`, we can represent them as binary expressions of numbers. For instance, the sequence `())` can be expressed as `010`, which represents the decimal value `2`.  

And to form a correct bracket sequence:
- the number of `)` symbols appearing at any position in the sequence should not exceed the number of `(` symbols
- the total number of `(` symbols should be equal to the total number of `)` symbols.  

Therefore, our approach is:
- iterate over i from 0 to 2^N - 1, convert each i to a bracket sequence
- validate the bracket sequence, output it if it is correct.
### Complexity Analysis
- **time complexity** : $O(2^NN)$
- **space complexity** : $O(N)$

### Solution
```cpp
#include <iostream>

using namespace std;

bool validate(string S) {
    int sum = 0;
    for (auto c : S) {
        if (c == '(') sum++;
        else sum--;
        if(sum < 0) return false;
    }
    return sum == 0;
}

int main(){
    int N;
    cin >> N;
    for (int i = 0; i < (1 << N); i++) {
        string candidate = "";
        for (int j = N - 1; j >= 0; j--) {
            if (((i >> j) & 1) == 0) {
                candidate += "(";
            } else {
                candidate += ")";
            }
        }
        if (validate(candidate)) {
            cout << candidate << endl;
        }
    }
    return 0;
}
```
### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 002 - Encyclopedia of Parentheses（★3）](https://atcoder.jp/contests/typical90/tasks/typical90_b)