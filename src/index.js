import ReactDOM from "react-dom/client";
import ThemeContextProivder from "./Context/ThemeContextProvider";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeContextProivder>
      <AllRoutes />
    </ThemeContextProivder>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
