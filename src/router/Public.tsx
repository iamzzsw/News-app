import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
    Navigate,
  } from "react-router-dom";

import MainPage from "../pages/Main";
  

  const PublicRoutes = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<MainPage />} />

        </>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  
  export default PublicRoutes;