import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Default } from "../../ui/templates/Default";
import Home from "../../ui/pages/Home";
import Issue from "../../ui/pages/Issue";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Default />}>
        <Route path="" element={<Home />} />
        <Route path=":id" element={<Issue />} />
      </Route>
    )
  );
  