// Fill in for exercises!
const doesntExistIndex = -1

let shoppingList = [];

const addItem = (item) => {
    let index = shoppingList.indexOf(item);
    if (index === doesntExistIndex) {
        shoppingList.push(item);
    } else {
        return "Item already exists"
    }    
    
}

const removeItem = (item) => {
    let index = shoppingList.indexOf(item);
    if (index != doesntExistIndex) {
        shoppingList.splice(index, 1)
    } else {
        return "Item doesn't exist"
    }    
}

const printList = () => {
    for (let i = 0; i<shoppingList.length; i++) {
        console.log(shoppingList[i])
    }
}