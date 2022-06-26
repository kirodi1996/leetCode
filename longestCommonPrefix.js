var longestCommonPrefix = function(strs) {
    if(!strs.length) {return ''}
    let smallestString = strs[0]
    let similar = ''
    for (let i = 1 ; i< strs.length ; i++) {
        let j =0;
        while(smallestString[j] && strs[i][j] && smallestString[j] === strs[i][j]) {
            similar+=smallestString[j];
            j++;
        }
        smallestString = similar;
        similar = '';
    }
    return smallestString;
};

strs = ["flower","flow","flight"]
longestCommonPrefix(strs)