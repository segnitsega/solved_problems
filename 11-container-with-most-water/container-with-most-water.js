var maxArea = function(height) {
    let area = 0;
    let lbar = 0;
    let rbar = height.length - 1;
    while(lbar < rbar){
        let currentArea = Math.min(height[lbar], height[rbar]) * (rbar - lbar);
        area = Math.max(currentArea, area);
        if(height[lbar] < height[rbar]){
            lbar++;
        } else{
            rbar--
        }
    }
    return area
};
