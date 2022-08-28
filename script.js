// Initialize the count as 0
// Listen for clicks on the incre button
// Increment the count variable when the button is clicked
// change the counting in the HTML to reflect the new count

// document.getElementById("increment-btn").innerText = 5

let numCount= document.getElementById("num-count")
console.log(numCount)

let count = 0

function increment() {
    count = count + 1
    numCount.innerText = count
}


