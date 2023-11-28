import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { income } from "./reducers/income";
import { expense } from "./reducers/expense";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


const reducer = combineReducers({
  income: income.reducer,
  expense: expense.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes> 
    </Provider>
    </BrowserRouter>
  );
}

export default App;
