## Redux ToolKit :-
- RTK is the official, opinionated, batteries-included toolset for efficient Redux development. It is designed to simplify common Redux use cases, and to help you write Redux logic that is correct, efficient, and easy to understand.

- RTK includes utilities to simplify store setup, reduce boilerplate, and provide powerful capabilities like data fetching and caching. It is intended to be the standard way to write Redux logic, and is recommended for all Redux users.
- RTK is built on top of the core Redux library, and is fully compatible with existing Redux code. It is also designed to work well with other popular libraries in the React ecosystem, such as React Router and React Query.

- RTK includes several key features, including:
  - A configureStore function that simplifies store setup and configuration
  - A createSlice function that reduces boilerplate when defining reducers and actions
  - A createAsyncThunk function that simplifies handling of asynchronous logic
  - A built-in middleware for handling common use cases like logging and error reporting
  - Integration with the Redux DevTools extension for easy debugging and inspection of state changes

- Overall, RTK is a powerful and flexible toolset that can help you write better Redux code, faster. Whether you are new to Redux or an experienced user, RTK is definitely worth considering for your next project.


### steps to use redux toolkit :-
1. npm install @reduxjs/toolkit react-redux
2. Create a store.js file inside src folder
3. Create a slice file inside src folder
4. Provide the store to the app using Provider from react-redux in index.js
5. Use useSelector to read the state from the store
6. Use useDispatch to dispatch actions to the store


-install redux devtools extension in browser
-build the store
-connect the store with react app
-create a slice
-dispatch the action
-read from the store using useSelector