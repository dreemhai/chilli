import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import NFTPage from "../pages/nft";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route  oute path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/nft" element={<NFTPage />}></Route>
        <Route path="*" element={<Navigate to="/nft" replace />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes;