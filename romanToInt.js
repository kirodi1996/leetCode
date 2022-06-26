var romanToInt = function(s) {
    let stringArr = s.split('')
    num = 0
    let romanaMap = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000 
    }
    let prev = stringArr[0]
    for(let i=0;i<stringArr.length;i++){
        if(romanaMap[prev] < romanaMap[stringArr[i]] ){
            let addNum = romanaMap[stringArr[i]] - 2*romanaMap[prev] 
            num += addNum
        }
        else{
            num +=   romanaMap[stringArr[i]]
        }
        
        prev = stringArr[i]
    }
    return num
    
    };