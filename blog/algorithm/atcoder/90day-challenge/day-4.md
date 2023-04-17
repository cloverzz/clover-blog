---
slug: atcoder-90day-challenge-day-4
title: "[Atcoder typical 90] Day 04 - Cross Sum"
date: 2023-04-17
authors: clover
tags: [Algorithm, Atcoder, Graph, BFS]
keywords: [Algorithm, Atcoder, Graph, BFS]
---
### Question description
There is a grid with $H$ rows and $W$ columns. The cell at the $i$-th row from the top and $j$-th column from the left, denoted as $(i, j)$, contains the integer $A[i][j]$.

For all cells $(i, j)$ where $1 \leq i \leq H$ and $1 \leq j \leq W$, find the following value:
- The sum of integers written in the cells that are in the same row or the same column as cell $(i, j)$ (including the cell itself).

**Constraints**
$$
1 \leq H \leq 2000 \\
1 \leq W \leq 2000 \\
1 \leq A[i][j] \leq 99 \\
\text{All inputs are integers}
$$

**Input**   
The input is given in the following format from standard input:

$$
\begin{align*}
&H W \\  
&A_{1,1} A_{1,2} \cdots A_{1,W}\\
&A_{2,1} A_{2,2} \cdots A_{2,W}\\  
&\vdots\\  
&A_{H,1} A_{H,2} \cdots A_{H,W} \\    
\end{align*}
$$

**Output**  
Let $B_{i,j}$ be the sum of integers written in the cells that are in the same row or the same column as cell $(i, j)$ (including the cell itself). Output the values in the following format:
$$
\begin{align*}
&B_{1,1} B_{1,2} \cdots B_{1,W}\\
&B_{2,1} B_{2,2} \cdots B_{2,W}\\
&\vdots\\
&B_{H,1} B_{H,2} \cdots B_{H,W}\\ 
\end{align*}
$$
**Examples**
Input example
```
4 4
3 1 4 1
5 9 2 6
5 3 5 8
9 7 9 3
```
Output example
```
28 28 25 26
39 33 40 34
38 38 36 31
41 41 39 43
```

The sum of integers written in cells that are in the same row or column as cell $(1, 1)$ is as follows:
$3 + 1 + 4 + 1 + 5 + 5 + 9 = 28$

### Approach
1. Create a matrix $M$.
2. Calculate row_sum, where `row_sum[i]$ is the sum of the $i$-th row.
3. Calculate col_sum, where `col_sum[j]$ is the sum of the $j$-th column.
4. Print the result of cell $(i, j)$, which is row_sum[i] + col_sum[j] - M[i][j].
### Complexity Analysis
- **time complexity** : $O(HW)$


### Solution
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    int H, W;
    cin >> H >> W;
    vector<vector<int>> M(H, vector<int>(W, 0));
    vector<int> row_sum(H, 0), col_sum(W, 0);
    for (int i = 0; i < H; i++) {
        int sum = 0;
        for (int j = 0; j < W; j++) {
            cin >> M[i][j];
            sum += M[i][j];
        }
        row_sum[i] = sum;
    }
    for (int j = 0; j < W; j++) {
        int sum = 0;
        for (int i = 0; i < H; i++) {
            sum += M[i][j];
        }
        col_sum[j] = sum;
    }
    for (int i = 0; i < H; i++) {
        for (int j = 0; j < W; j++) {
            cout << row_sum[i] + col_sum[j] - M[i][j];
            if (j != W - 1) cout << " ";
        }
        cout << endl;
    }
    return 0;
}
```

### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 004 - Cross Sum（★2）](https://atcoder.jp/contests/typical90/tasks/typical90_d)