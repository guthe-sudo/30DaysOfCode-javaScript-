// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
      let total_cost;
      total_cost =  meal_cost + meal_cost * tip_percent/100 + meal_cost * tax_percent/100;
      console.log(Math.round(total_cost));
  
  }