// Initialize the count as 0
// Listen for clicks on the incre button
// Increment the count variable when the button is clicked
// change the counting in the HTML to reflect the new count

 // The steps taken include for the previous statement:
    // 1. Grab the save-el paragrah and store it in a variable called saveEl
     // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

let numCount= document.getElementById("num-count")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    numCount.textContent = count
    
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr // This addes the numbers save and then creats a hyphen 
    console.log(count)
    numCount.textContent = 0
    count = 0
}
