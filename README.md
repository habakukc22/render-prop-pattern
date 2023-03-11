## Example of render props pattern

It's a pattern that pass JSX elements to component through props.

A way of making components very reusable is by using the render prop pattern. A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

In the App.js, the component Input has a props called "render" which returns a JSX element. That way we can use the data inside Input component and then pass it to the Kelvin and Fahrenheit components.

That's a simple example of the render props pattern.
