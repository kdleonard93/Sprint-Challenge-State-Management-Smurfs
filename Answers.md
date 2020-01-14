1. What problem does the context API help solve? Prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Actions change the state of the current store. Reducers takes a previous state and action and returns the next state object as a copy instead of replacing it. Store is know as the single store of truth because it holds the states that are considered global.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?Application state is global and component state is for the local component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why! I'd say redux since it's highly used in the industry. No actual favorite though.
