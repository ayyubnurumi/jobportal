import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobPortal from "./pages/JobPortal";
import JobDetail from "./pages/JobDetail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <JobPortal /> },
    { path: "detail", element: <JobDetail /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
