# Digital Counter App

## Project Description

In this project, you will build a **Digital Counter App** using fundamental web technologies. This is a beginner-friendly project designed to help you practice building interactive web pages from scratch.

You will use:

- **HTML** to build the structure of the page
- **CSS** to style and design the layout
- **Vanilla JavaScript** to add logic and interactivity
- **DOM Manipulation** to read and update what appears on screen
- **Event Listeners** to respond to button clicks

---

## Learning Objectives

By completing this project, you will be able to:

- Build a basic **HTML structure** with semantic elements
- Apply **CSS styling** to create a clean, centered layout with styled buttons
- Declare and update **JavaScript variables** to track state
- Use **DOM selection** to target specific HTML elements in your script
- Attach **event listeners** to respond to user interactions
- Update displayed content using **`textContent`**
- Dynamically change styles using **`classList` manipulation**

---

## Project Structure

When you fork this repo, the folder structure is already set up for you. Do not rename or move any files.

```
digital-counter-app
│── index.html
│── styles.css
│── index.js
```

- `index.html` — the page structure
- `styles.css` — all your styling rules
- `index.js` — all your JavaScript logic

---

## Feature Requirements

Your counter app must behave as follows:

- The **counter starts at 0** when the page loads
- The **Increase button** adds 1 to the current count
- The **Decrease button** subtracts 1 from the current count
- The **Reset button** sets the counter back to 0

**Example flows:**

```
Increase:   0 → 1 → 2 → 3
Decrease:   0 → -1 → -2
Reset:      5 → 0
```

---

## JavaScript Requirements

Your `index.js` file must include the following:

**1. A variable to track the count**
Declare a variable to store the current count value. It should start at `0` when the page loads.

**2. Select your HTML elements**
Use `querySelector` to select the element that displays the count and each of the three buttons. Store them in variables so you can reference them throughout your script.

**3. Listen for button clicks**
Use `addEventListener` on each button to detect when it is clicked. Each button should trigger a different action — increase, decrease, or reset.

**4. Update the display**
After every button click, update what the user sees on screen using `textContent`. The displayed number should always reflect the current value of your count variable.

**5. Change color based on the count**
After updating the count, check its value and use `classList.add` and `classList.remove` to apply the right class:

- If the number is **positive** → apply the `positive` class
- If the number is **negative** → apply the `negative` class
- If the number is **zero** → remove both classes

> **Hint:** Consider writing a reusable function that handles both the display update and the class logic together. You can then call it from each event listener instead of repeating yourself.

---

## CSS Requirements

Your `styles.css` file should include styling that makes the app look clean and usable:

- **Centered layout** — use flexbox to center everything on the page
- **Styled counter** — make the number large and easy to read
- **Styled buttons** — give buttons a background color, padding, and border-radius
- **Hover effects** — change button appearance when the user hovers over them

**Required color classes:**

```css
.positive {
  color: green;
}

.negative {
  color: red;
}
```

**Example button hover effect:**

```css
button:hover {
  opacity: 0.8;
  cursor: pointer;
}
```

---

## Bonus Challenges

Once your core app is working, try these extra challenges:

- **Prevent negative numbers** — stop the counter from going below 0 using an `if` statement
- **Step buttons** — add `+5` and `-5` buttons that jump the count by five
- **Dark mode** — add a toggle button that switches the page theme using `classList.toggle('dark-mode')`

```js
// Example: dark mode toggle
themeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
```

---

## Submission Instructions

Follow these steps to get started and submit your work:

**1. Fork this repository**
Click the **Fork** button at the top right of this page to create your own copy of the repo under your GitHub account.

**2. Clone your fork**
Copy your fork to your local machine so you can work on it:

```bash
git clone https://github.com/YOUR-USERNAME/digital-counter-app.git
```

**3. Build the app**
Open the project in your code editor and write your code in the three existing files — `index.html`, `styles.css`, and `index.js`.

**4. Commit and push your changes**

```bash
git add .
git commit -m "Complete Digital Counter App"
git push origin main
```

**5. Submit the link to your fork**
Share the URL of your forked repository with your instructor. It should look like:
`https://github.com/YOUR-USERNAME/digital-counter-app`

Make sure your app works correctly in the browser before submitting.

---

## Thinking Guide

Before you write any code, ask yourself these four questions. Come back to them whenever you get stuck:

| Question | What to think about |
|---|---|
| **What element am I selecting?** | Which HTML tag holds the data or triggers the action? |
| **What changes?** | Is it the text, a class, a color, or a value? |
| **What triggers the change?** | Is it a button click, a key press, or a page load? |
| **Which DOM method do I use?** | `textContent`, `classList.add`, `querySelector`, `addEventListener`? |

> **Tip:** Break every feature into small steps. Select → Listen → Update. That is the core loop of DOM manipulation.
