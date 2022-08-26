import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import PrivateRouter from "./PrivateRouter";


const AppRouter = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<PrivateRouter />}>
          <Route path="" element={<Users />} />
        </Route>
        <Route path="/posts" element={<PrivateRouter />}>
          <Route path="" element={<Posts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
