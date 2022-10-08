import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
	const index = ++stateIndex;
	if (states[index]) {
		return states[index];
	}
	const setValue = (newValue) => {
		states[index][0] = newValue;
		renderWithFuad();
	};
	const returnArray = [defaultValue, setValue];
	states[index] = returnArray;
	return returnArray;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
function renderWithFuad() {
	stateIndex = -1;
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
renderWithFuad();
