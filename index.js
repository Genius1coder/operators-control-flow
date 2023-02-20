// Question 5 //

function nearestPowerOf2(n) {
    if (n <= 0) {
      return 0;
    }
  
    let power = 0;
    while (Math.pow(2, power) <= n) {
      power++;
    }
  
    const lower = Math.pow(2, power - 1);
    const upper = Math.pow(2, power);
  
    if (n - lower < upper - n) {
      return lower;
    } else {
      return upper;
    }
  }

  // Examples //
console.log(nearestPowerOf2(10)); // Output: 8
console.log(nearestPowerOf2(17)); // Output: 16


// Question 3 //

// initialize variable for class group
let classGroup = "Arts"; 

// use if...else statements to determine the subjects based on class group
if (classGroup === "Science") {
  console.log("Your subjects are: Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Your subjects are: Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Your subjects are: Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. Your subjects are: English, Mathematics");
}