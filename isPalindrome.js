var isPalindrome = function(x) {
 
   return testPalindrome(x.toString().split(''))
    
};

function testPalindrome(x) {
    if(x.length <= 1) {return true}
    let first = x.splice(0,1)[0]
    let end = x.splice(-1, 1)[0]
    if(first !== end) return false;
    if(!testPalindrome(x)) {
        return false
    } 
    return testPalindrome(x)
}



x = 123;
isPalindrome(x.toString().split(''))