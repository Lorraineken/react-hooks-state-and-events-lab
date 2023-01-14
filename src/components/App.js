import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const[mode , setMode] = useState(false)

  function handleClickMode(){
    setMode(!mode)
    
  }

  const appClass = mode ? "App dark" : "App light"
  const currentMode = mode ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickMode}>{currentMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
