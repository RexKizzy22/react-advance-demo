### REACT-ADVANCE-DEMO

A simple web application with login and form validation functionality used to practice and learn React.

Bootstraped with:

- Vitejs React template.
- PNPM

#### Key features of this branch include:

> Using the `useImperativeHandle` hook to give the Login component access to the HTMLInput element in the Input component and call the focus method outside of the Input component.

> Using the `forwardRef` React method to connect the Login component to the Input component so as to be able to call the focus method on it.

> An `activate` function that sets the focus on the input when attempting to log in with invalid input
