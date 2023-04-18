---
slug: atcoder-90day-challenge-day-5
title: "[Atcoder typical 90] Day 5 - Restricted Digits"
date: 2023-04-18
authors: clover
tags: [Algorithm, Atcoder, DP, Math]
keywords: [Algorithm, Atcoder, DP, Math]
---
### Question description
You are given a set of digits: $c_1, c_2, \dots, c_K$. Find the number of positive integers with $N$ digits that can be created using only these digits and are divisible by $B$. Calculate the result modulo $10^9 + 7$.
<!-- truncate -->
**Constraints**
- $1 \leq K \leq 9$
- $1 \leq c_1 < c_2 < \cdots < c_K \leq 9$
- $1 \leq N \leq 10^{18}$
- $2 \leq B \leq 1000$
- All input values are integers.
  
**Subtasks & Scoring**
This problem is divided into several subtasks, and you will be considered to have "solved the subtask" if you correctly answer all test cases in the subtask. The score of your submitted source code will be the sum of the scores of the subtasks you solved.
1. (1 point): $N \leq 10000, B \leq 30$
2. (3 points): $B \leq 30$
3. (3 points): No additional constraints.

**Input**   
The input is given in the following format from the standard input:

$$
\begin{align*}
&N\ B\ K\\
&c_1\  c_2\ \cdots c_K 
\end{align*}
$$

**Output**  
Print the answer modulo $10^9 + 7$.

**Examples**
Input example
```
3 7 3
1 4 9
```
Output example
```
3
```

There are 3 three-digit multiples of 7 that can be created using 1, 4, and 9: 119, 441, and 994.

### Approach

### Complexity Analysis
- **time complexity** : 


### Solution
```cpp
#include <iostream>
using namespace std;

long long modpow(long long a, long long b, long long m) {
	long long p = 1, q = a;
	for (int i = 0; i < 63; i++) {
		if ((b & (1LL << i)) != 0) {
			p *= q;
			p %= m;
		}
		q *= q;
		q %= m;
	}
	return p;
}

const long long mod = 1000000007;

long long N, B, K;
long long C[11];

long long power10[64];
long long DP[64][1009];
long long Answer[64][1009];

int main() {
	cin >> N >> B >> K;
	for (int i = 1; i <= K; i++) cin >> C[i];
	
	for (int i = 0; i <= 62; i++) {
		power10[i] = modpow(10LL, (1LL << i), B);
	}
	
	for (int i = 1; i <= K; i++) {
		DP[0][C[i] % B] += 1;
	}

	for (int i = 0; i < 62; i++) {
		for (int j = 0; j < B; j++) {
			for (int k = 0; k < B; k++) {
				int nex = (j * power10[i] + k) % B;
				DP[i + 1][nex] += DP[i][j] * DP[i][k];
				DP[i + 1][nex] %= mod;
			}
		}
	}

	Answer[0][0] = 1;
	for (int i = 0; i < 62; i++) {
		if ((N & (1LL << i)) != 0LL) {
			for (int j = 0; j < B; j++) {
				for (int k = 0; k < B; k++) {
					int nex = (j * power10[i] + k) % B;
					Answer[i + 1][nex] += Answer[i][j] * DP[i][k];
					Answer[i + 1][nex] %= mod;
				}
			}
		}
		else {
			for (int j = 0; j < B; j++) Answer[i + 1][j] = Answer[i][j];
		}
	}

	cout << Answer[62][0] << endl;
	return 0;
}
```

### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 005 - Restricted Digits（★7）](https://atcoder.jp/contests/typical90/tasks/typical90_e)