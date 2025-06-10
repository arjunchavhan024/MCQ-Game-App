// src/data/questions.js

const questions = [
  {
    question: "What is React primarily used for?",
    options: [
      "Styling web pages",
      "Server-side scripting",
      "Building user interfaces",
      "Database management",
    ],
    answer: "Building user interfaces",
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useState",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Expression",
      "Java Serialized XML",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which method is used to create a new React app?",
    options: [
      "npx create-react-app",
      "npm init react-app",
      "react-new-app",
      "npm install react",
    ],
    answer: "npx create-react-app",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Netflix"],
    answer: "Facebook",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM kept in memory",
      "A server-side database",
      "A browser API",
      "A plugin for DOM manipulation",
    ],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    question: "What does the useEffect hook do?",
    options: [
      "Directly modifies state",
      "Performs side effects in function components",
      "Manages context values",
      "Renders components",
    ],
    answer: "Performs side effects in function components",
  },
  {
    question: "How do you pass data from parent to child component?",
    options: ["Using props", "Using state", "Using context", "Using Redux"],
    answer: "Using props",
  },
  {
    question: "What is a React fragment used for?",
    options: [
      "To return multiple elements without a wrapper",
      "To comment code",
      "To render arrays",
      "To manage keys",
    ],
    answer: "To return multiple elements without a wrapper",
  },
  {
    question: "Which hook is used to access context values?",
    options: ["useContext", "useEffect", "useReducer", "useMemo"],
    answer: "useContext",
  },
  {
    question: "How is conditional rendering achieved in React?",
    options: [
      "Ternary operators",
      "Switch statements",
      "If-else blocks",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the default port for a React app?",
    options: ["3000", "8080", "5000", "8000"],
    answer: "3000",
  },
  {
    question: "Which hook is used for referencing DOM elements?",
    options: ["useRef", "useState", "useMemo", "useEffect"],
    answer: "useRef",
  },
  {
    question: "What is prop drilling in React?",
    options: [
      "Passing props deeply through many components",
      "Using Redux for state",
      "Updating props dynamically",
      "None of the above",
    ],
    answer: "Passing props deeply through many components",
  },
  {
    question: "What is the purpose of keys in lists?",
    options: [
      "They help React identify which items have changed",
      "They encrypt the list data",
      "They sort the list",
      "They validate props",
    ],
    answer: "They help React identify which items have changed",
  },
  {
    question: "What is the useMemo hook used for?",
    options: [
      "To memoize expensive calculations",
      "To use lifecycle methods",
      "To share state globally",
      "To update state",
    ],
    answer: "To memoize expensive calculations",
  },
  {
    question: "What is React Router used for?",
    options: [
      "Routing in React applications",
      "State management",
      "Form validation",
      "Styling components",
    ],
    answer: "Routing in React applications",
  },
  {
    question: "Which of the following is true about controlled components?",
    options: [
      "They are controlled by React state",
      "They use refs to get values",
      "They are faster than uncontrolled components",
      "They do not use event handlers",
    ],
    answer: "They are controlled by React state",
  },
  {
    question: "How do you handle forms in React?",
    options: [
      "By using controlled components and event handlers",
      "With AJAX",
      "With external APIs",
      "Only with Redux",
    ],
    answer: "By using controlled components and event handlers",
  },
  {
    question: "What is the role of Redux in a React application?",
    options: [
      "Managing global state",
      "Rendering UI",
      "Routing",
      "Handling form inputs",
    ],
    answer: "Managing global state",
  },
];

export default questions;
