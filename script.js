var food = {
    foodName: 'pounded yam',
    ancestor: 'yam',
    color: 'white',
    isSweet: true,
    isExpensive: true,
    price: 1000,
    eat() {
        console.log('i am now eating ');
    },
    notEat() {
        console.log('i am not eating');
    }

}

console.log(food.foodName);                  // dot natation
console.log(food['color']);              // bracket notation 
// food.eat
if (food.foodName !== 'pounded yam') {
    food.eat()
} else {
    food.notEat()
}
