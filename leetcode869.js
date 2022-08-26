/* You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.

  */


var reorderedPowerOf2 = function (n) {
    let str = n.toString();
   let initialString =  str.split('').sort().join('');
    
    
    for(let i=0; i<30; i++){
        let tempString = (1<<i).toString();
       let finalString = tempString.split('').sort().join('');
        if(initialString===finalString){
            return true
        }
    }
    return false
};