var twoSum = function(nums, target) {

    let map = {};
    let ans = [];
    nums.forEach((element, index) => {
        let diff = target-element
        map[diff] = index;
    }); 

    nums.forEach(function (element, index){
        if(map[element] && !ans.length && map[element]!==index) {
            ans.push(index, map[element]);
        }
        if(ans.length) return
    })
    console.log(map);
    console.log(ans);
    
};

twoSum([1, 3, 4, 2], 6)

