/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  for (let i = 0; i < transactions.length; i++) {
    if (categories.includes(transactions[i].category) == false) {
      categories.push(transactions[i].category);
    }
  }

  let outputObject = [];
  for (let i = 0; i < categories.length; i++) {
    let obj = {
      category: categories[i],
      totalSpent: 0,
    };
    outputObject.push(obj);
  }

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < outputObject.length; j++) {
      if (transactions[i].category == outputObject[j].category) {
        outputObject[j].totalSpent += transactions[i].price;
      }
    }
  }

  return outputObject;
}

module.exports = calculateTotalSpentByCategory;
