import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Firebase configuration object
const appSettings = {
    databaseURL: process.env.DATABASE_URL
};

// Initialize Firebase app
const app = initializeApp(appSettings)
// Get a reference to the database
const database = getDatabase(app)
// Create a reference to the 'shoppingList' node in the database
const shoppingListInDB = ref(database, "shoppingList")

// Get DOM elements
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

// Add click event listener to the add button
addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value
    // Push the input value to the database
    push(shoppingListInDB, inputValue)
    // Clear the input field
    clearInputFieldEl()
})

// Listen for changes in the shopping list data
onValue(shoppingListInDB, function (snapshot) {
    if (snapshot.exists()) {
        // Convert the snapshot to an array of key-value pairs
        let itemsArray = Object.entries(snapshot.val())

        // Clear the current shopping list display
        clearShoppingListEl()

        // Iterate through the items and append them to the list
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToShoppingListEl(currentItem)
        }
    } else {
        // If no items exist, display a message
        shoppingListEl.innerHTML = "Nothing to buy, uh?"
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    // Create a new list item element
    let newEl = document.createElement("li")

    newEl.textContent = itemValue
    // Add click event listener to remove item when clicked
    newEl.addEventListener("click", function () {
        // Create a reference to the specific item in the database
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        // Remove the item from the database
        remove(exactLocationOfItemInDB)
    })
    
    // Append the new item to the shopping list
    shoppingListEl.append(newEl)
}
