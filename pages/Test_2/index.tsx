import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { home, menu1, menu2, menu3, menu4 } from "../../src/commons/Test_2";
import Navigation from "../../src/commons/Test_2com/Navigation";

export default function Test_2() {
  useEffect(() => {
    console.log(document.location);
    console.log(window.location.href);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route component={home} path="/" exact />
        <Route component={menu1} path="/menu1" exact />
        <Route component={menu2} path="/menu2" exact />
        <Route component={menu3} path="/menu3" exact />
        <Route component={menu4} path="/menu4" exact />
      </Switch>
    </BrowserRouter>
  );
}
