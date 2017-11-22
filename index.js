// Code your solution here:
function driversWithRevenueOver (driver, revenue) {
  let results = driver.filter(function(revenue){
    return driver > revenue
  })
}