import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { income } from "./reducers/income";
import { expense } from "./reducers/expense";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import LoadingPage from "./components/LoadingPage"; // Import your LoadingPage component

const reducer = combineReducers({
  income: income.reducer,
  expense: expense.reducer,
});

const store = configureStore({ reducer });

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        {loading ? (
          <LoadingPage /> // Show the loading animation
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        )}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
