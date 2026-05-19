import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AddEditPost from "../pages/AddEditPost";
import ViewPost from "../pages/ViewPost";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddEditPost />} />

        <Route path="/edit/:id" element={<AddEditPost />} />

        <Route path="/view/:id" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;