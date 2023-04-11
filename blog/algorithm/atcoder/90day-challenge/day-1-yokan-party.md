---
slug: atcoder-90day-challenge-day-1
title: "[Atcoder typical 90] Day 01 - Yokan Party"
date: 2023-04-11
authors: clover
tags: [Algorithm, Atcoder, Binary Search]
keywords: [Algorithm, Atcoder, Binary Search]
---
### Problem description
There is a Yokan of length $L$ [cm]. There are $N$ cutting points, and the $i$-th cutting point from the left is at position $A_i$ [cm] from the left.

You want to choose $K$ of the $N$ cutting points and divide the Yokan into $K+1$ pieces. Then, the following value is used as the score:
- The length of the shortest piece among the $K+1$ pieces

Find the score that can be obtained when dividing the Yokan to maximize the score.
<!-- truncate -->

**Constraints**
$$
\begin{align*}
&1 \leq K \leq N \leq 10^5 \\
&0 < A_1 < A_2 < \cdots < L \leq 10^9 \\
&\text{All inputs are integers}    
\end{align*}
$$

**Input**
 ```
    N L
    K
    A_1 A_2 A_3 ... A_N
```

**Output**
```
    The score need to be find
 ```

**Examples**
```
    Input 1:
    7 45
    2
    7 11 16 20 28 34 38

    Output 1:
    12

    Input 2:
    3 100
    1
    28 54 81

    Output 2:
    46
```
### Approach
We can employ the binary search algorithm to determine the highest achievable score. During each search iteration, we validate if the target score is feasible with a minimum of K cuts.
### Complexity Analysis
- **time complexity** : $O(N\log(L))$
- **space complexity** : $O(N)$

### Solution
```cpp
#include <iostream>
#include <vector>
using namespace std;

int N, K, L;
vector<int> A;

bool validate(int T) {
    int cnt = 0, pre = 0;
    for (int i = 0; i < N; i++) {
        if (A[i] - pre >= T && L - A[i] >= T) {
            cnt++;
            pre = A[i];
        }
    }
    return cnt >= K;
}

int main(){
    cin >> N >> L;
    cin >> K;
    A = vector<int>(N, 0);
    for (int i = 0; i < N; i++) {
        cin >> A[i];
    }
    int l = 0, r = L;
    while (l < r) {
        int m = l + (r - l + 1) / 2;
        if (validate(m)) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    cout << l << endl;
    return 0;
}

```