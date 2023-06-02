## **Challenge: React Frontend Developer**

This README file provides an overview of the considerations made while working on the challenge for the position of React Frontend Developer for Coolshop. Below are the key aspects that were taken into account:

### **Accessibility**

Accessibility was a priority in the development of this application. To ensure a better user experience for individuals with disabilities, the following practices were implemented:

- Usage of **`aria-label`** attributes: By providing appropriate **`aria-label`** values, the app becomes more accessible for screen readers and assistive technologies.
- Utilization of buttons for enhanced keyboard navigation: The app can be fully operated without a mouse by utilizing the **`focus`** feature on buttons.

### **Unit Testing**

To ensure code quality and maintainable components, unit testing was implemented using **Vitest** and **React Testing Library**. This approach helps identify and prevent potential issues and regressions during the development process.

### **TypeScript**

The application is built using **TypeScript**. TypeScript brings several advantages to the development process, including: static typing, autocompletion, documentation, etc.

### **CSS Styling with BEM Methodology**

CSS styles in this application follow the **BEM (Block, Element, Modifier)** methodology. BEM promotes better organization and structure in CSS code, making it more maintainable and scalable.

### **State Management with useState**

The application's state management is handled using React's built-in **`useState`** hook. Considering the simplicity of the app and to avoid increasing the bundle size, external state management libraries like Redux or Zustand were not incorporated.

### **Code Formatting with ESLint**

To ensure consistent code formatting and enforce best practices, ESLint was used with custom rules. This helps maintain a clean and readable codebase while reducing potential errors and improving code quality.

Feel free to explore the codebase and reach out if you have any questions or feedback.
