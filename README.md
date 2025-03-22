# toasty-reactx

A minimal, customizable toast notification system for React applications.

## Features

- 🚀 **Lightweight & Fast**: Minimal dependencies and optimized for performance
- 🎨 **Customizable**: Style your toasts with custom CSS, icons, or components
- 📱 **Responsive**: Works well on all screen sizes
- 📍 **Positioned Toasts**: Place toasts in any corner or center of the screen

## Installation

```bash
# Using npm
npm install toasty-reactx

# Using yarn
yarn add toasty-reactx
```

## Basic Usage

```jsx
import React from "react";
import { ToastProvider, ToastContainer, useToast } from "toasty-reactx";

// Wrap your app with ToastProvider
function App() {
  return (
    <ToastProvider>
      <Component />
      <ToastContainer />
    </ToastProvider>
  );
}

// Use the toast hook in your components
function Component() {
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success("Operation completed successfully!");
  };

  return <button onClick={showSuccessToast}>Success</button>;
}

export default App;
```

## API

### Toast Types

- `toast.success(message, options)`
- `toast.error(message, options)`
- `toast.info(message, options)`

### Options

```typescript
interface ToastOptions {
  duration?: number; // Duration in milliseconds (default: 3000)
  position?: ToastPosition; // Position on screen (default: 'bottom-center')
  style?: React.CSSProperties; // Custom inline styles
  className?: string; // Custom CSS class
}

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
```

### Methods

```typescript
// Dismiss all toasts
toast.dismissAll();
```
