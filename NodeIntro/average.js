function average(nums){
    var sum = 0;
    for(var i=0; i<nums.length; i++){
        sum = sum + nums[i];
    }
    console.log(sum/nums.length);
}

var grades = [1,2];
average(grades);