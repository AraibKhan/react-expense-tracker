import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const rootEle = document.querySelector("#root");
const root = createRoot(rootEle);

root.render(
  <>
    <App />
  </>
);

// import ReactDOM from "react-dom";

// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));
