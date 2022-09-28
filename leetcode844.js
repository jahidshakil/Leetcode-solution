
/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.


*/



const backspaceCompare = (S, T) => {
    const strip = str => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.length > 0 && stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    return strip(S) === strip(T);
};