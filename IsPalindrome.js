function PalindromeResult(inStr) {
    let result = true;
    for (let i = 0; i < inStr.length; i++) {
        if (inStr[i] !== inStr[inStr.length - i - 1]) {
            result = false;
        }
    }
    return result;
};

export const IsPalindrome = (str, ignoreCapitalisation = false) => ignoreCapitalisation == true ? PalindromeResult(str.toUpperCase()) : PalindromeResult(str);