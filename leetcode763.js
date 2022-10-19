/*

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]

*/




var partitionLabels = function (S) {
    const last = new Array(26).fill(-1);
    const partitions = [];
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < S.length; i++) {
        last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    
    /*
    example
    a b c c a d d b e f f e
    
          a b c d e  f  
    last=[4,7,3,6,11,10]
    
    i=0  -> end=max(0,4)=4     anchor=0
    i=1  -> end=max(4,7)=7     anchor=0
    i=2  -> end=max(7,3)=7     anchor=0
    i=3  -> end=max(7,3)=7     anchor=0
    i=4  -> end=max(7,3)=7     anchor=0
    i=5  -> end=max(7,6)=7     anchor=0
    i=6  -> end=max(7,6)=7     anchor=0
    i=7  -> end=max(7,7)=7     anchor=8   partitions.push(7 - 0 + 1)
    i=8  -> end=max(7,11)=11   anchor=8
    i=9  -> end=max(11,10)=11  anchor=8
    i=10 -> end=max(11,10)=11  anchor=8
    i=11 -> end=max(11,11)=11  anchor=12  partitions.push(11 - 8 + 1)
    
    partitions = [8, 4]
    */
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === end) {
            partitions.push(i - start + 1);
            start = i + 1;
        }
    }
    return partitions;
};