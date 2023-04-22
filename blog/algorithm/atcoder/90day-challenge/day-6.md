---
slug: atcoder-90day-challenge-day-6
title: "[Atcoder typical 90] Day 6 - Smallest Subsequence"
date: 2023-04-20
authors: clover
tags: [Algorithm, Atcoder, DP, Math]
keywords: [Algorithm, Atcoder, DP, Math]
---
### Question description
You are given a string $S$ of length $N$, consisting of only lowercase English letters.

Find the lexicographically smallest substring of $S$ with a length of $K$ and output it.

Note:  
A substring of a string $T$ is a string obtained by removing 0 or more characters from $T$ and concatenating the remaining characters in their original order.

The definition of lexicographic order:  
Let $X = x_1 x_2 \dots x_n$ and $Y = y_1 y_2 \dots y_m$ be two different strings. $X$ is said to be lexicographically smaller than $Y$ if and only if $X$ is a prefix of $Y$, or if $j$ is the smallest integer such that $x_j \neq y_j$, and $x_j < y_j$.
<!-- truncate -->
**Constraints**
- $1 \leq K \leq N \leq 100000$
- $S$ is a string of length $N$ consisting of lowercase English letters
- $N$, $K$ are integers


**Input**   
The input is given in the following format:
- $N$ $K$  
- $S$

**Output**  
Output the answer as a string.  

**Examples**
Input example
```
7 3
atcoder
```
Output example
```
acd
```
In this example, we can obtain the string "acd" by taking only the 1st, 3rd, and 5th characters.  
This string is the lexicographically smallest 3-character substring among all possible substrings.

### Approach

### Complexity Analysis
- **time complexity** : 


### Solution
```cpp

```

### Reference
\[1\] [ 競プロ典型 90 問](https://atcoder.jp/contests/typical90)  
\[2\] [ 006 - Smallest Subsequence（★5）](https://atcoder.jp/contests/typical90/tasks/typical90_f)