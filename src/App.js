import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import LightTheme from "./components/styled/LightTheme";
import DarkTheme from "./components/styled/DarkTheme";
import { useState } from "react";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./components/Country";


function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={ theme == "light" ? LightTheme : DarkTheme }>
      <>
        <GlobalStyles/>
        <Router>
          <div className="App">
            <Navbar theme={theme} themeToggler={themeToggler}/>
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/country/:name">
                  <Country/>
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
