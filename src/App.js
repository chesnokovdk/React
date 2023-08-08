import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("green");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          {/* <h3>FUch how does it work?!_1</h3> */}
          {/* <h3>FUch how does it work?!_2</h3> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>

          {/* <h2>FUch how does it work?!_3</h2> */}
          {/* <Pet name="Luna" animal ="dog" breed="kva"/>
      <Pet name="r1" animal ="d1" breed="kva1"/>
      <Pet name="r2" animal ="d2" breed="kva2"/> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

// return React.createElement("div", { id: "here_is_id" }, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//      name: "Kik",
//      animal: "cat",
//      breed: " 1"
//     }),
//   React.createElement(Pet,
//     { name: "Mik",
//     animal: "fox",
//     breed: " 2"
//   }),
//   React.createElement(Pet, { name: "Dik", animal: "box",
//     breed: " 3"
//   }),
// ]);
