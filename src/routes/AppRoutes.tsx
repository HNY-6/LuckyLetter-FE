import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ReadMyPocket from "@/pages/ReadMyPocket";
import ReadMyLetter from "@/pages/ReadMyLetter";
import SelectPocketPage from "@/pages/SelectPocketPage";
import WriteLetterPage from "@/pages/WriteLetterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/mypocket' element={<ReadMyPocket />}></Route>
      <Route path='/mypocket/:myletterId' element={<ReadMyLetter />}></Route>
      <Route path='/selectpocket' element={<SelectPocketPage />}></Route>
      <Route path='/writeletter' element={<WriteLetterPage />}></Route>
    </Routes>
  );
};
export default AppRoutes;
