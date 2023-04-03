---
slug: longest-palindromic-substring
title: Longest Palindromic Substring
date: 2023-04-03
authors: clover
tags: [Algorithm, String, Dynamic Programing, Manacher’s Algorithm]
keywords: [Algorithm, String, Dynamic Programing]
---
### Problem description:
- **Input** : A string `s` 
- **Output:** Return the longest palindromic substring in `s`
<!-- truncate -->
- **Constraints:**
  - `1 <= s.length <= 1000`
  - `s` consist of only digits and English letters.
**Example:** 
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

## Approach 1: Two pointers
### Intuition
For each $\ \{S_i, S_j\mid j - i \leq 1,\text{and } 0\leq i, j\leq S.length\} \space$, we expand from $S_i, S_j$ to both left and right while $S_i == S_j$ to find longest palindromic substring for this $i, j$, note as $lsp(S, i, j)$. 
So the longest palindromic substring is:
$$
\text{longest palindromic substring } S[i, j]= \max_{i,j} \{lsp(S, i, j)\}
$$
### Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(1)$
### code
```
class Solution {
public:
    int lsp(string &s,int i,int j){
        while(i >= 0 && j < s.length() && s[i] == s[j]){i--; j++;}
        return j-i-1;
    }
    string longestPalindrome(string s) {
        int start = 0, max_len = 0, n = s.length();
        for(int i = 0; i < n; i++){
            int l1 = lsp(s, i, i);
            int l2 = lsp(s, i, i+1);
            int curr_len = max(l1, l2);
            if(curr_len > max_len){
                max_len = curr_len;
                start = i - (curr_len - 1)/2;
            }
        }
        return s.substr(start, max_len);
    }
};
```
## Approach 2: Dynamic Programming
### Intuition
We using botom up way of dynamic programming, where $dp[i][j]$ is `true` if $S[i, j]$ is a validate palindromic substring, otherwise `false`.  
So the state transition equation will be:
$$
        dp[i][j]=
       \begin{cases}
       true &i = j\\
       S_i == S_j & j - i = 1\\
       dp[i + 1][j - 1] \land S_i == S_j & else 
       \end{cases}
$$
And the longest palindromic substring is:
$$
\text{longest palindromic substring } S[i, j]= \max_{i,j} \{j-i+1 \mid \text{dp}[i][j] = \text{true}\}
$$
### Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$
### Code
```
class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size(), start = 0, max_len = 1;
        vector<vector<bool>> dp(n, vector<bool>(n, false));
        for (int i = s.size() - 1; i >= 0; i--) {
            dp[i][i] = true;
            for (int j = i + 1; j < s.size(); j++) {
                if (j - i == 1) dp[i][j] = s.at(i) == s.at(j);
                else dp[i][j] = (s.at(i) == s.at(j)) && dp[i + 1][j - 1];
                if (dp[i][j] == true && j - i + 1 > max_len) {
                    start = i;
                    max_len = j - i + 1;
                }
            }
        }
        return s.substr(start, max_len);
    }
};
```

## Approach 3: Manacher’s Algorithm
### Intuition
Manacher’s Algorithm can find all maximal palindromic substrings anywhere within the input string in $O(n)$ time.
### Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$
### Code
```
class Solution {
public:
    string longestPalindrome(string s) {
        string t;
        for(auto c: s) {
            t += string("#") + c;
        }
        t = "$" + t + "#^";
        int n = t.size();
        vector<int> p(n);
        int l = 1, r = 1, start = 1, max_len = 1;
        for(int i = 1; i < n; i++) {
            p[i] = max(0, min(r - i, p[l + (r - i)]));
            while(t[i - p[i]] == t[i + p[i]]) {
                p[i]++;
            }
            if(i + p[i] > r) {
                l = i - p[i], r = i + p[i];
                if(p[i] > max_len) {
                    start = l / 2;
                    max_len = p[i] - 1;
                }
            }
        }
        return s.substr(start, max_len);
    }
};
```