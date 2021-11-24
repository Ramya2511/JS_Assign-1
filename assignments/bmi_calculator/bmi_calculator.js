// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (height===0 || mass===0){
        var output="INVALID INPUT"
        return output
    }else{
        var ans=(mass)/(height*height)
        return ans
    }
}

module.exports = BMICalculator;
