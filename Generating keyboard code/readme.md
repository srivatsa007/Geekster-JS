[live link:](https://srivatsa007.github.io/Geekster-JS/Generating%20keyboard%20code/)

# Keboard code generation!

## reload page
page reloading is executed using a function made which invokes `loaction.reload()`` function which reloads the webpage.
<br>
This function is then simply called on a reload button using `Onclick` function/attribute in the button element HTML code.


### JavaScript Statement Explanation

The JavaScript statement `innerHTML = \`You pressed : <span id="pressed-key">\${event.key}\`` is used to dynamically update the content of an HTML element.

#### Breakdown:

- `innerHTML`: This property is used to get or set the HTML content inside an element in the DOM (Document Object Model).

- `\`You pressed : <span id="pressed-key">\${event.key}\``: This is a template literal enclosed by backticks (\`). It consists of a string "You pressed : " followed by a `<span>` element with the ID "pressed-key". The `${event.key}` is a placeholder used to display the value of the `event.key` property.

#### Conceptual Explanation:

- The `innerHTML` property allows JavaScript to manipulate the content of an HTML element directly.
- Template literals (`\``) are a way to create strings in JavaScript that allow embedded expressions (such as `${event.key}`) to be evaluated and included within the string.
- `${event.key}` retrieves the value of the `event.key` property, which captures the key pressed during an event (e.g., a keypress event).

This statement is commonly used to dynamically display information based on user interactions or events within a web page.
