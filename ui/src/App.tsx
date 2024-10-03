import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MemberList from "./components/MemberList";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MemberList />,
  },
  {
    path: "add",
    element: <AddMember />,
  },
  {
    path: "edit/:id",
    element: <EditMember />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
