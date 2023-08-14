# A Few Notes

I was offered the option to do this in Flutter, my most recent tooling. I opted for React, to demonstrate skills necessary for the job. However, this meant I was learning React, MUI and Redux as I went along. As such, I haven’t built up any particularly sophisticated methods of doing things and am still fairly unopinionated. The important things in my design were:

- All stateful components are at the greatest depth in the component tree possible. This means that when the state is updated, it won’t re-render any unnecessary child components.
- There are many opinions on when to use Redux. For simplicity, I have only used Redux for application state, not component state. That is, state that needs to be long-lived and used across multiple pages.
- To share component state between unrelated components I have utilised React.RefObject.
- I’ve utilised RTK Query, the recommended more modern alternative to createAsyncThunk. Reducers and Actions are created under the hood and can be observed in the Redux Devtools chrome extension.
- Because I was learning everything as I went, I've only done the simplest implementation, this means I've only done a couple of plain tests for the prune to target calculations, and I didn't quite understand what to do for the autocomplete "appearing" when clicking the canvas, so I just made it always visible rather than bothering you at work with questions!
- I am happy to fit into your codebase. I'm aware everyone has an opinion about things like Classes, OOP and functional programming, and I can take on yours for this job!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Here's how you can run the app

In the project directory, run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can also now press "Play" in Vs Code to debug this project.

### `npm test`

Launches the test runner in the interactive watch mode.\
Then enter "a" to run all tests.
