import { useState } from "react";
import Search from "./components/Search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("I am Batman");

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movie</span> You'll Enjoy Without the Hassle</h1>
        </header>
  
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  );
};

export default App;
