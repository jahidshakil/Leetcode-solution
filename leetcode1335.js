/*

You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).

You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.

You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].

Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.


Input: jobDifficulty = [6,5,4,3,2,1], d = 2
Output: 7
Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7 
*/






var minDifficulty = (jobDifficulty, d) => {
    if(jobDifficulty.length<d){
        return -1
    }
    
    const memo = {};
    
    var dfs = (start, days)=>{
        if(days==d){
            return start == jobDifficulty.length ? 0 : Infinity;
        }
        let key = `${start} - ${days}`;
        if(memo[key]!==undefined) return memo[key];
        let end = jobDifficulty.length-d+days;
        let result = Infinity;
        let max = -Infinity;
        for(let  i= start;i<=end;i++){
           max = Math.max(max,jobDifficulty[i]);
           result = Math.min(result, max+dfs(i+1,days+1));
        }
        return memo[key]=result;
    }
    return dfs(0, 0);
}