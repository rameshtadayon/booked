import "./App.css";
import React from "react";
import { List } from "./features/List";
import NewBookForm from "./newBook/Form/NewBookForm";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">LIBRARY</header>
      <NewBookForm />
      <div className="BookList">
        <List />
      </div>
    </div>
  );
}

export default App;
