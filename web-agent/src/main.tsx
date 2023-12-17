import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./routes/Signin.tsx"
import Cars from "./routes/Cars.tsx"

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />
  },
  { 
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/cars",
    element: <Cars />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
