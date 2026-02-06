var trap = function(height) {
    let totalWater = 0;
    let pl = 0;
    let pr = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while(pl < pr){
        if(height[pl] <= height[pr]){
            let currentWater = leftMax - height[pl];
            if(currentWater > 0) totalWater += currentWater;
            leftMax = Math.max(leftMax, height[pl]);
            pl++;
        } else{
            let currentWater = rightMax - height[pr];
            if(currentWater > 0) totalWater += currentWater;
            rightMax = Math.max(rightMax, height[pr]);
            pr--;
        }
    }    
    return totalWater;
};
