---
slug: atcoder-90day-challenge-day-3
title: "[Atcoder typical 90] Day 03 - Longest Circular Road"
date: 2023-04-13
authors: clover
tags: [Algorithm, Atcoder]
keywords: [Algorithm, Atcoder]
---
### Question description
There are $N$ cities, each numbered from $1, 2, 3, \dots, N$. There are also $N-1$ roads, with the $i$-th road connecting cities $A[i]$ and $B[i]$ bidirectionally. It is possible to travel between any two cities using some roads.

Now, you can freely choose integers $u, v$ ($1 \leq u < v \leq N$) and build a single new road that connects city $u$ and city $v$ bidirectionally. Then, the following value is considered as the score:
- The number of roads traveled in a route that returns to the same city without passing the same road twice (this value is uniquely determined).

Output the maximum possible score.
<!-- truncate -->

**Constraints**  

$N\in[1, 10^5]$   
$A_i\in[1,N-1]$   
$B_i\in[A_i+1,N]$   
It is possible to travel between any two cities using some roads  
All inputs are integers  

**Input** 

$N$   
$A_{1}$  $B_{1}$  
$\vdots$  
$A_{N-1}$  $B_{N-1}$  

**Output**

the maximum possible score

### Approach
This question pertains to finding the longest path in a connected, undirected graph $G$, also known as the diameter of $G$. The diameter of a graph is the maximum vertex-to-vertex distance in the graph. To find the diameter of $G$, follow these steps:

- Choose any vertex $s \in G.V$ and run Depth-First Search (DFS) with $s$ as the starting vertex. The farthest vertex reached from $s$ is denoted as $u$.
- Run DFS again with $u$ as the starting vertex and find the farthest vertex reached, denoted as $v$.
- The diameter of $G$ is the longest path between $u$ and $v$.
### Complexity Analysis
- **time complexity** : $O(N)$

### Solution
```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;
c
const int INF = (1 << 29);
vector<vector<int>> G(1 << 18);
vector<int> C(1 << 18), P(1 << 18), D(1 << 18);
int N;

void bfs(int s) {
    for (int i = 1; i <= N ; i++) {
        C[i] = 0;
        D[i] = INF;
        P[i] = -1;
    }
    C[s] = 1;
    D[s] = 0;
    P[s] = -1;
    queue<int> q;
    q.push(s);
    while (!q.empty()) {
        int u = q.front); q.pop();
        for (int v : G[u]) {
            if(C[v] == 0) {
                C[v] = 1;
                D[v] = D[u] + 1;
                q.push(v);
            }
        }
        C[u] = 2;
    }
}

int main(){
    cin >> N;
    for (int i = 0; i < N; i++) {
        int u, v;
        cin >> u >> v;
        G[u].push_back(v);
        G[v].push_back(u);
    }
    bfs(1);
    int md = -1, idx = -1;
    for (int i = 1; i <= N; i++) {
        if (D[i] > md) {
            md = D[i];
            idx = i;
        }
    }
    bfs(idx);
    int ans = -1;
    for (int i = 1; i <=N; i++) {
        ans = max(ans, D[i]);
    }
    cout << ans + 1<< endl;
    return 0;
}
```

### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 003 - Longest Circular Road（★4）](https://atcoder.jp/contests/typical90/tasks/typical90_c)