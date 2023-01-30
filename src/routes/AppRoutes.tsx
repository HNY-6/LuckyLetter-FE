import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ReadMyPocket from "@/pages/ReadMyPocket";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/mypocket" element={<ReadMyPocket />}></Route>
    </Routes>
  );
};
export default AppRoutes;
