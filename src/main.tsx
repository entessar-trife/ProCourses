import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HandleLoadingComponent from "./components/HandleLoadingComponent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "courseDetails/:id", element: <CourseDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HandleLoadingComponent>
      <CartProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CartProvider>
    </HandleLoadingComponent>
  </StrictMode>
);
