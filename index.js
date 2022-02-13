const CARDS = [2, 3, 4, 5, 6, 10, "J", "Q", "K", "A"]
const CARD_HISTORY = []
let count = 0

document.getElementById("button").addEventListener("click", cardInput)

function cardInput() {
  const CARD = document.getElementById("cards-drop-down").value
  switch (CARD) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
      count++
      break
    case "10":
    case "J":
    case "Q":
    case "K":
    case "A":
      count--
      break
  }
  // Show the count on the webpage
  document.getElementById("count").innerText = count
  // Create the div element for the card history
  const CREATE_DIV = document.createElement("div")
  const CREATE_NODE = document.createTextNode(CARD)
  CREATE_DIV.appendChild(CREATE_NODE)
  document.getElementById("card-history").appendChild(CREATE_DIV)
  // Add the cards to the CARD_HISTORY array
  CARD_HISTORY.push(CARD)
  return count
}
