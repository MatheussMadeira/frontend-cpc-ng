import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
