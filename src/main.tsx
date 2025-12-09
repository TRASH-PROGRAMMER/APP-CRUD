/* src/main.tsx */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Procesos from "./pages/Procesos";
render(() => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/usuarios" component={Usuarios} />
    <Route path="/procesos" component={Procesos} />
  </Router>
), document.getElementById("root") as HTMLElement);

