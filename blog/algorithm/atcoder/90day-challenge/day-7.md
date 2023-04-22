---
slug: atcoder-90day-challenge-day-7
title: "[Atcoder typical 90] Day 7 - Smallest Subsequence"
date: 2023-04-22
authors: clover
tags: [Algorithm, Atcoder, Binary Search]
keywords: [Algorithm, Atcoder, Binary Search]
---
### Question description

There are $N$ classes in the ABC competitive programming school, and class number $i$ ($1 \leq i \leq N$) targets students with a rating of $A_i$.

Now, $Q$ students are about to join this school. The rating of student number $j$ ($1 \leq j \leq Q$) is $B_j$. Each student will be dissatisfied if they go to a class that does not match their level. The dissatisfaction for each student is defined as follows:

The absolute difference between the target rating $a$ and their own rating $b$, that is, $|a - b|$.

For $j = 1, 2, 3, \dots, Q$, find the minimum dissatisfaction that can be considered for student number $j$. It is allowed to have classes with no students or classes with multiple students.
<!-- truncate -->

**Constraints**
- $1 \leq N \leq 300,000$
- $1 \leq Q \leq 300,000$
- $0 \leq A_i \leq 10^9$
- $0 \leq B_j \leq 10^9$
- All input values are integers

**Input**

The input is given in the following format:

$N$  
$A_1\ A_2\ A_3\ \dots\ A_N$  
$Q$  
$B_1$  
$B_2$  
$B_3$  
$\dots$  
$B_Q$  

**Output**

For each $j = 1, 2, 3, \dots, Q$, output the answer on a separate line, for a total of $Q$ lines.


**Examples**
Input example
```
4
4000 4400 5000 3200
3
3312
2992
4229
atcoder
```
Output example
```
112
208
171
```
In this example, we can obtain the string "acd" by taking only the 1st, 3rd, and 5th characters.  
This string is the lexicographically smallest 3-character substring among all possible substrings.

### Approach
1. Sort the array $A$ in increasing order.
2. For each $B_j$, use the binary search method to find an index $i$ such that $|B_j - A_i|$ is minimized for all $A_k \in A$, where $\{k | 1 \leq k \leq Q \text{ and } k \neq i\}$.

### Complexity Analysis
- **time complexity** : $O(N\log{N} + Qlog{N})$


### Solution
```cpp
#include <iostream>

using namespace std;

int main(){
    int N;
    cin >> N;
    vector<int> A(N);
    for (int i = 0; i < N; i++) {
        cin >> A[i];
    }
    sort(A.begin(), A.end());
    int Q;
    cin >> Q;
    for (int i = 0; i < Q; i++) {
        int b;
        cin >> b;
        int p = lower_bound(A.begin(), A.end(), b) - A.begin();
        if (p == 0) {
            cout << abs(b - A[p]) << endl;
        } else if (p == A.size()) {
            cout << abs(b - A[p - 1]) << endl;
        } else {
            cout << min(abs(b - A[p]), abs(b - A[p - 1])) << endl;
        }
    }
    return 0;
}
```

### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 007 - CP Classes（★3）](https://atcoder.jp/contests/typical90/tasks/typical90_g)