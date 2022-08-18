/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 */




var wordPattern = function (pattern, s) {
    let str = s.split(" ");
    if(pattern.length !== str.length) return false;
    let obj1 ={}
    let obj2 ={}
    for(let i =0; i<pattern.length; i++){
        if(!obj1[pattern[i]] && !obj2[str[i]]){
            obj1[pattern[i]]=str[i];
            obj2[str[i]]=pattern[i]
            }else{
            if(obj1[pattern[i]] !=str[i] || obj2[str[i]] != pattern[i]){
            return false
        }
    }

    }
    return true
}