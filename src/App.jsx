// import React, { useReducer, useState } from "react";
// import Post from "./useReducer/Post";

// import ReactDOM from "react-dom";
// import Switch from "./switch";
// import { useUndo } from "./use-undo";

// const actionTypes = {
//   toggle: "TOGGLE",
//   on: "ON",
//   off: "OFF",
// };

// function toggleReducer(state, action) {
//   switch (action.type) {
//     case actionTypes.toggle: {
//       return { on: !state.on };
//     }
//     case actionTypes.on: {
//       return { on: true };
//     }
//     case actionTypes.off: {
//       return { on: false };
//     }
//     default: {
//       throw new Error(`Unhandled type: ${action.type}`);
//     }
//   }
// }

// function useToggle({ reducer = toggleReducer } = {}) {
//   const [{ on }, dispatch] = useReducer(reducer, { on: false });

//   const toggle = () => dispatch({ type: actionTypes.toggle });
//   const setOn = () => dispatch({ type: actionTypes.on });
//   const setOff = () => dispatch({ type: actionTypes.off });

//   return { on, toggle, setOn, setOff };
// }
// export { useToggle, actionTypes, toggleReducer };

// function Toggle() {
//   const [clicksSinceReset, setClicksSinceReset] = useState(0);
//   const tooManyClicks = clicksSinceReset >= 4;

//   const { on, toggle, setOn, setOff } = useToggle({
//     reducer(currentState, action) {
//       const changes = toggleReducer(currentState, action);
//       if (tooManyClicks && action.type === actionTypes.toggle) {
//         // other changes are fine, but on needs to be unchanged
//         return { ...changes, on: currentState.on };
//       } else {
//         // the changes are fine
//         return changes;
//       }
//     },
//   });

// function handleClick() {
//   toggle();
//   setClicksSinceReset((count) => count + 1);
// }

//   return (
//     <div>
//       <button onClick={setOff}>Switch Off</button>
//       <button onClick={setOn}>Switch On</button>
//       <Switch
//         onClick={() => {
//           toggle();
//           setClicksSinceReset((count) => count + 1);
//         }}
//         on={on}
//       />
//       {tooManyClicks ? (
//         <button onClick={() => setClicksSinceReset(0)}>Reset</button>
//       ) : null}
//     </div>
//   );
// }
import { useSelector } from "react-redux";

function App() {
  // return <Toggle />;
  // return <Post />;
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
