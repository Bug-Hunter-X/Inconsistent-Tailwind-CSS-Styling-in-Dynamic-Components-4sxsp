# Inconsistent Tailwind CSS Styling in Dynamic Components

This repository demonstrates a bug where Tailwind CSS styles do not apply consistently to dynamically rendered components in a Next.js application. The issue is resolved by ensuring the component re-renders properly when its state changes.

## Bug Description

The button component changes its background color based on a state variable. However, the style changes are not reflected in the UI.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the button's style doesn't change when the state changes.

## Solution

The solution involves ensuring that the component re-renders whenever the state variable changes, by using appropriate state management techniques or by employing React's built-in features such as `useState` and re-rendering.