# Changing color & Shape on click of a buton

[live link:](https://srivatsa007.github.io/Geekster-JS/Changing%20color/)

____

## Objective

The project aims to create an interactive interface allowing users to change colors and shapes dynamically. It utilizes JavaScript concepts like event listeners, `Math.random()`, and arrow notation for function definitions.

## JavaScript Concepts Used

### Event Listeners

Event listeners are used to detect user actions (e.g., clicks) on specific elements and trigger corresponding functions.

```javascript
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeColor);
``` 

### Arrow notation
Arrow Notation for Function Definition
Arrow functions are concise and maintain the context of this. They're utilized in event listeners to define functions:
```
const changeColor = () => {
  // Function logic to generate a random color
};
```
### Math.random() and Math.floor()
These functions are used to generate random numbers within specified ranges:
```
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```
