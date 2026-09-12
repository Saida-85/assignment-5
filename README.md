# 🚀 Dev Stack

Dev Stack is a responsive web application that helps developers explore different technologies and build a suitable technology stack for their projects. Users can explore frontend, backend, database, and development tools in one place.

## 🌐 Live Website

[Visit Dev Stack](https://dev-stack-sage.vercel.app/)

## 💻 Technologies Used

* React.js
* JavaScript
* Tailwind CSS
* Vite
* React Icons
* Vercel

## ✨ Features

* **Explore Technologies** — Browse different frontend, backend, database, and development tool options.
* **Build Your Stack** — Select technologies and create a personalized technology stack for your project.
* **Responsive Design** — The website works smoothly on desktop, tablet, and mobile devices.

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make creating and displaying UI components easier and more readable.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. It can change when the user interacts with the application.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and update data inside a React component.

In this project, I used it to manage the selected technologies and the user's technology stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform actions after a component renders.

I used it to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which items were added, removed, or changed and update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the selected stack is empty, the project displays an empty-stack message instead of showing technology cards.

```jsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedStack.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

A child can send information back to the parent by calling a function that the parent passes to it through props.

For example:

```jsx
// Parent
<Child onSelect={handleSelect} />

// Child
<button onClick={() => onSelect(technology)}>
  Select
</button>
```

Here, `onSelect` is passed from the parent to the child, and the child calls it to send the selected technology back to the parent.
