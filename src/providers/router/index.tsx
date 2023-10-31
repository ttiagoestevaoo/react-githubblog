import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Default } from "../../ui/templates/Default";
import { Home } from "./elements";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Default />}>
        <Route path="" element={<Home />} />
      </Route>
    )
  );
  