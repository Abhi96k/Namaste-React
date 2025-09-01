import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import "../index.css";
import RestaurantMenuPage from "./components/RestaurantMenuPage.js";
// import Grocery from "./components/Grocery.js";
import { lazy , Suspense } from "react";


//lazy Loading
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "restaurant/:resId",
          element: <RestaurantMenuPage />,
        },
        {
          path: "grocery",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Grocery />
            </Suspense>
          ),
        },
        {  
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
